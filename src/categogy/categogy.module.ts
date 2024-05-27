import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategogyController } from './categogy.controller';
import { CategogyService } from './categogy.service';
import { Category } from './entities/categogy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategogyController],
  providers: [CategogyService],
})
export class CategogyModule {}
