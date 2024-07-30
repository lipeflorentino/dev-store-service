import { Inject, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInputDTO } from './dto/createUserInput.dto';
import { USER_REPOSITORY } from '../constants';
import { UpdateUserInputDTO } from './dto/updateUserInput.dto';
import { DeleteUserInputDTO } from './dto/deleteUserInput.dto';
import { GetUserInputDTO } from './dto/getUserInput.dto';

@Injectable()
export class UserService {
    private logger = new Logger('UserService');

    constructor(
        @Inject(USER_REPOSITORY)
        private userRepository: Repository<User>,
    ) {}

    async getUser(input: GetUserInputDTO) {
        this.logger.log('input received', { input });
        return this.userRepository.findOne({ where: { email: input.email } });
    }

    async createUser(input: CreateUserInputDTO) {
        this.logger.log('input received', { input });
        const newUser = this.userRepository.create({
            nickname: input.nickname,
            email: input.email,
            type: input.type,
        });
        this.logger.log('new user', { newUser });
        return this.userRepository.save(newUser);
    }

    async updateUser(input: UpdateUserInputDTO) {
        this.logger.log('input received', { input });
        return this.userRepository.update(
            {
                email: input.email,
            },
            input.params,
        );
    }

    async deleteUser(input: DeleteUserInputDTO) {
        this.logger.log('input received', { input });
        return this.userRepository.delete({ email: input.email });
    }

    async findAll(): Promise<User[]> {
        this.logger.log('finding users');
        return this.userRepository.find();
    }
}
