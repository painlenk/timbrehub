import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimbreModule } from './modules/timbres/application/timbre.module';
import { PrismaModule } from './shared/infra/prisma/prisma.module';

@Module({
  imports: [TimbreModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
