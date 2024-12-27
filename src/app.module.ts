import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { WorkersModule } from './workers/workers.module';
import { HomesectionsModule } from './homesections/homesections.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    EmployeesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'), // Adjust path to match your upload folder
      serveRoot: '/upload', // Public access path for the browser
    }),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 2000, // ကြာချိန်
        limit: 3, // ဘနစ်ကြိမ်ဆိုတာ ကန့်သတ်
      },
      {
        name: 'long',
        ttl: 60000, // ကြာချိန်
        limit: 100, // ဘနစ်ကြိမ်ဆိုတာ ကန့်သတ်
      },
    ]),
    MyLoggerModule,
    WorkersModule,
    HomesectionsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
