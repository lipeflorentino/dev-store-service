import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { DatasourceModule } from '../datasource/datasource.module';
import { cardProviders } from './card.providers';

@Module({
    imports: [DatasourceModule],
    controllers: [CardController],
    providers: [CardService, ...cardProviders],
    exports: [CardService],
})
export class CardModule {}
