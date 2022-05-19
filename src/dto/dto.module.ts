import { Module } from '@nestjs/common';
import { DtoService } from './dto.service';
import { DtoController } from './dto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApisModule } from 'src/apis/apis.module';

@Module({
  imports: [TypeOrmModule.forFeature([]), ApisModule],
  providers: [DtoService],
  controllers: [DtoController],
  exports: [DtoService],
})
export class DtoModule {}
