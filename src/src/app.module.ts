import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeTypeOrm } from './typeorm/home.typeorm';
import { UsersModule } from './users/users.module';
@Module({
  imports: [HomeTypeOrm, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
