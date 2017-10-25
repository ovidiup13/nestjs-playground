import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
    modules: [CatsModule],
    components: [],
    controllers: [],
})
export class ApplicationModule { }