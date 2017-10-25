import { Module } from '@nestjs/common';
import { CatsController } from './controllers/cats.controller';
import { CatsService } from './components/cats.service';

@Module({
    modules: [],
    components: [CatsService],
    controllers: [CatsController],
})
export class ApplicationModule { }