/**
app.module.ts: This is the root module of the application, which imports other
modules and providers. Nest.js modules act as organizational units and follow
the Single Responsibility Principle.
*/

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerModule } from './common/middleware/logger/logger.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [SongsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log(consumer);
    // consumer.apply(LoggerMiddleware).forRoutes('songs'); //? option no 1
    // consumer.apply(LoggerMiddleware).forRoutes({ path: 'songs', method: RequestMethod.POST }); //? option no 2
    consumer.apply(LoggerMiddleware).forRoutes(SongsController); //? option no 3
  }
}

// ? ================== VERSION 1 ==================
// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { SongsModule } from './songs/songs.module';
// import { LoggerModule } from './common/middleware/logger/logger.module';

// @Module({
//   imports: [SongsModule, LoggerModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
