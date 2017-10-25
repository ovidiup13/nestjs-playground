import { Module } from '@nestjs/common';
import { CatsService } from './components/cats.service';
import { CatsController } from './controllers/cats.controller';

@Module({
    controllers: [CatsController],
    components: [CatsService],
})
export class CatsModule { }