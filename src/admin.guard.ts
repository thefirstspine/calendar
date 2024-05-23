import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthService } from "@thefirstspine/auth";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const handler = context.getHandler();

    // Check the bearer JSON token
    if (
      !context.switchToHttp().getRequest().headers ||
      !context.switchToHttp().getRequest().headers.authorization
    ) {
      return false;
    }
    
    // Get the user ID
    const userId: number|string|null = await this.authService.me(
      context.switchToHttp().getRequest().headers.authorization.replace(/Bearer /, '')
    );
    if (!userId) {
      return false;
    }

    // Set the user ID
    context.switchToHttp().getRequest().user = userId;
    const admins: string[] = process.env.ADMINS.split(",");
    
    return !!admins.find((u) => userId === parseInt(u, 10));
  }
}
