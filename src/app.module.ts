import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
  MongooseModule.forRoot('mongodb://localhost:27017/amazon'),AuthModule,
  UserModule,
  ProductModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
