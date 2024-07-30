import { ConfigService } from '@nestjs/config';
import {
    USER_REPOSITORY,
    CARD_REPOSITORY,
    DATA_SOURCE,
    ORDER_REPOSITORY,
} from '../src/constants';

export const userRepositoryMock = {
    provide: USER_REPOSITORY,
    useValue: {
        find: jest.fn(),
        findOne: jest.fn(),
        save: jest.fn(),
        create: jest.fn(),
        // Outros métodos mockados do repositório, conforme necessário
    },
};

export const cardRepositoryMock = {
    provide: CARD_REPOSITORY,
    useValue: {
        find: jest.fn(),
        findOne: jest.fn(),
        save: jest.fn(),
        create: jest.fn(),
        // Outros métodos mockados do repositório, conforme necessário
    },
};

export const orderRepositoryMock = {
    provide: ORDER_REPOSITORY,
    useValue: {
        find: jest.fn(),
        findOne: jest.fn(),
        save: jest.fn(),
        create: jest.fn(),
        // Outros métodos mockados do repositório, conforme necessário
    },
};

export const dataSourceMock = {
    provide: DATA_SOURCE,
    useValue: {
        getRepository: jest.fn().mockReturnValue({
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
            // Outros métodos mockados do repositório
        }),
        initialize: jest.fn(),
    },
};

export const configServiceMock = {
    provide: ConfigService,
    useValue: {
        get: jest.fn((key: string) => {
            switch (key) {
                case 'DB_HOST':
                    return 'localhost';
                case 'DB_PORT':
                    return 27017;
                case 'DB_NAME':
                    return 'testdb';
                default:
                    return null;
            }
        }),
    },
};
