import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../src/user/user.service';
import { UserController } from '../src/user/user.controller';
import { userRepositoryMock, dataSourceMock, configServiceMock } from './mocks';

describe('UserService', () => {
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                UserService,
                userRepositoryMock,
                dataSourceMock,
                configServiceMock,
            ],
        }).compile();
        service = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
