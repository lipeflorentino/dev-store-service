import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { DatasourceModule } from '../datasource/datasource.module';

@Module({
    imports: [DatasourceModule],
    controllers: [UserController],
    providers: [UserService, ...userProviders],
    exports: [UserService],
})
export class UserModule {}
