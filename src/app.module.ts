import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimbreModule } from './modules/timbres/application/timbre.module';

@Module({
  imports: [TimbreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
