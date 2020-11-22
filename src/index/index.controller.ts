import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@thefirstspine/auth-nest';
import { AdminGuard } from 'src/admin.guard';

/**
 * Main controller to avoir 404 on home & report status.
 */
@Controller()
export class IndexController {

  /**
   * Return empty page with 200 status code.
   * Useful for Letsencrypt.
   */
  @Get('/')
  index() {
    return '';
  }

  /**
   * Simply returns 'ok' for status checking =)
   */
  @Get('/status')
  status() {
    return {status: 'ok'};
  }

  /**
   * Simply returns 'ok' for status checking =)
   */
  @Get('/protected')
  @UseGuards(AuthGuard, AdminGuard)
  protected() {
    return {status: 'ok'};
  }
}
