import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './shared/infra/prisma/prisma.module';
import { TimbreModule } from './modules/timbres/timbre.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TimbreModule, PrismaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
