import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { getFeature, getAction } from "@nestjsx/crud";

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const handler = context.getHandler();
    const action = getAction(handler);
    const user: string = context.switchToHttp().getRequest().user;
    const admins: string[] = process.env.ADMINS.split(",");

    if (!['Create-One', 'Create-Many', 'Update-One', 'Replace-One', 'Delete-One'].includes(action)) {
      // Not filtered actions
      return true;
    }
    
    return !!admins.find((u) => parseInt(user, 10) === parseInt(u, 10));
  }
}
