import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // a single method
    return 'Hello Samiha 23 September, 2025!';
  }
}

/**
 * app.service.ts: A basic service file with a single method. In Nest.js, services
encapsulate business logic and can be injected into controllers, promoting
Dependency Injection and the Separation of Concerns
 */
