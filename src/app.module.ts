import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RediCacheModule } from './redi-cache/redi-cache.module';
import { TasksModule } from './tasks/tasks.module';
import { ApisModule } from './apis/apis.module';
import { DtoModule } from './dto/dto.module';

@Module({
  imports: [RediCacheModule, TasksModule, ApisModule, DtoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
