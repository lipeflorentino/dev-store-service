import { Module } from '@nestjs/common';
import { DatasourceProviders } from './datasource.providers';

@Module({
    providers: [...DatasourceProviders],
    exports: [...DatasourceProviders],
})
export class DatasourceModule {}
