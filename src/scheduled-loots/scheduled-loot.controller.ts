import { Controller, Get, NotFoundException, Req, UseGuards } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { AuthGuard } from "@thefirstspine/auth-nest";
import { ArenaService } from "../arena/arena.service";
import { AdminGuard } from "../admin.guard";
import { ScheduledLootUser } from "./scheduled-loot-user.entity";

import { ScheduledLoot } from "./scheduled-loot.entity";
import { ScheduledLootsService } from "./scheduled-loot.service";

@Crud({
  model: {
    type: ScheduledLoot,
  },
})
@Controller("scheduled-loots")
@UseGuards(AdminGuard)
export class ScheduledLootsController implements CrudController<ScheduledLoot> {

  constructor(
    public service: ScheduledLootsService,
    private readonly arenaService: ArenaService
  ) {}

  @Get('current')
  @UseGuards(AuthGuard)
  async getCurrent(@Req() request) {
    // Get current scheduled loot
    const scheduledLoot: ScheduledLoot|undefined = await this.service.current();
    if (!scheduledLoot) {
      throw new NotFoundException();
    }

    // Get scheduled loot for user
    const scheduledLootsForUser: ScheduledLootUser|undefined = await this.service.forUser(
      request.user,
      scheduledLoot.id,
    );
    if (scheduledLootsForUser) {
      return {
          rewarded: false,
          scheduledLoot: {
            id: scheduledLoot.id,
            loots: scheduledLoot.unserializeLoot(),
          },
      };
    }

    // Reward the user
    try {
      this.arenaService.sendLootToUser(request.user, scheduledLoot.unserializeLoot());
      await this.service.registerForUser(
        request.user,
        scheduledLoot.id,
      );
      return {
          rewarded: true,
          scheduledLoot: {
            id: scheduledLoot.id,
            loots: scheduledLoot.unserializeLoot(),
          },
      };
    } catch (e) {
      return {
          rewarded: false,
          scheduledLoot: {
            id: scheduledLoot.id,
            loots: scheduledLoot.unserializeLoot(),
          },
      };
    }
  }

}
