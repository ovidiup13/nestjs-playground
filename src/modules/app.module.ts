import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from '../middlewares/logger.middleware';

@Module({
    modules: [CatsModule],
    components: [],
    controllers: [],
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(
            {
                path: '/cats',
                method: RequestMethod.GET
            },
            {
                path: '/cats',
                method: RequestMethod.POST
            }

            // or
            // {
            //     path: '/cats',
            //     method: RequestMethod.ALL
            // }

            // or
            // can also take single or multiple controller classes
            // consumer.apply(LoggerMiddleware).forRoutes(CatsController);
        );
    }
}