import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user: string = context.switchToHttp().getRequest().user;
    const admins: string[] = process.env.ADMINS.split(",");
    
    return !!admins.find((u) => parseInt(user, 10) === parseInt(u, 10));
  }
}
