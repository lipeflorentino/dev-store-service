import { Test, TestingModule } from '@nestjs/testing';
import { CardService } from '../src/card/card.service';
import { cardRepositoryMock, dataSourceMock, configServiceMock } from './mocks';

describe('CardService', () => {
    let service: CardService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CardService,
                cardRepositoryMock,
                dataSourceMock,
                configServiceMock,
            ],
        }).compile();

        service = module.get<CardService>(CardService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
