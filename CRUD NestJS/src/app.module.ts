import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mongo:1234@cluster0.ov9of.mongodb.net/test',
      UsersModule,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
