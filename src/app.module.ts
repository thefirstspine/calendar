import { DynamicModule, Module } from '@nestjs/common';
import { AuthService } from '@thefirstspine/auth';
import { AppService } from './app.service';
import { IndexController } from './index/index.controller';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [AppService, AuthService],
})
export class AppModule {
  static register(): DynamicModule {
    return {
      module: AppModule,
      imports: [
      ],
    };
  }
}
