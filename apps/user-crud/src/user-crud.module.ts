import { Module } from '@nestjs/common';
import { UserCrudController } from './user-crud.controller';
import { UserCrudService } from './user-crud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'root',
      password: '',
      database: 'mikerepo',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserCrudController],
  providers: [UserCrudService],
})
export class UserCrudModule {}
