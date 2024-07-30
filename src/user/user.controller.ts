import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Logger,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserInputDTO } from './dto/createUserInput.dto';
import { UpdateUserInputDTO } from './dto/updateUserInput.dto';

@Controller('user')
export class UserController {
    private logger = new Logger('UserController');

    constructor(private readonly userService: UserService) {}

    @Get(':email')
    @HttpCode(HttpStatus.OK)
    async getUser(@Param('email') email: string) {
        try {
            const response = await this.userService.getUser({ email });
            this.logger.log({ response });
            return {
                statusCode: HttpStatus.OK,
                message: 'retrieved user successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error(JSON.stringify(error));
            throw new HttpException(error.response, error.status);
        }
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async listUsers() {
        try {
            const response = await this.userService.findAll();
            this.logger.log({ response });
            return {
                statusCode: HttpStatus.OK,
                message: 'listed successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error(JSON.stringify(error));
            throw new HttpException(error.response, error.status);
        }
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createUser(@Body() createDTO: CreateUserInputDTO) {
        try {
            this.logger.log(createDTO);
            const response = await this.userService.createUser(createDTO);

            return {
                statusCode: HttpStatus.CREATED,
                message: 'created successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error(JSON.stringify(error));
            throw new HttpException(error.response, error.status);
        }
    }

    @Patch(':email')
    @HttpCode(HttpStatus.OK)
    async updateUsers(
        @Body() body: Partial<UpdateUserInputDTO>,
        @Param('email') email: string,
    ) {
        try {
            const response = await this.userService.updateUser({
                email,
                params: body.params,
            });
            this.logger.log({ response });
            return {
                statusCode: HttpStatus.OK,
                message: 'updated successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error(JSON.stringify(error));
            throw new HttpException(error.response, error.status);
        }
    }

    @Delete(':email')
    @HttpCode(HttpStatus.OK)
    async deleteUsers(@Param('email') email: string) {
        try {
            const response = await this.userService.deleteUser({ email });
            this.logger.log({ response });
            return {
                statusCode: HttpStatus.OK,
                message: 'deleted successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error(JSON.stringify(error));
            throw new HttpException(error.response, error.status);
        }
    }
}
