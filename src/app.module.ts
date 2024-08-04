import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "root",
      "database": "nestjsrealworld",
      "autoLoadEntities": true,
      "synchronize": true
    }),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule,
    AuthModule
  ],
  controllers: [
    AppController
  ],
  providers: []
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
