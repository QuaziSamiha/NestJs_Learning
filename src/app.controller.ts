import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // ● app.controller.ts: This is a basic controller file containing a single route.
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // a single route.
  getHello(): string {
    return this.appService.getHello();
  }
}

/**
 * Controllers in Nest.js are responsible for request handling and response
sending, acting as a gateway between client and server.
 */
