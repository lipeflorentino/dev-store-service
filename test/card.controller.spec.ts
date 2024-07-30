import { Test, TestingModule } from '@nestjs/testing';
import { CardController } from '../src/card/card.controller';
import { CardService } from '../src/card/card.service';
import { cardRepositoryMock, dataSourceMock, configServiceMock } from './mocks';

describe('CardController', () => {
    let controller: CardController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CardController],
            providers: [
                CardService,
                cardRepositoryMock,
                dataSourceMock,
                configServiceMock,
            ],
        }).compile();

        controller = module.get<CardController>(CardController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
