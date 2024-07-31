import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export class CreateTables1722367251372 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create User table
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'nickname',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'type',
                        type: 'enum',
                        enum: ['customer', 'vendor'],
                        default: "'customer'",
                    },
                    {
                        name: 'exp',
                        type: 'int',
                        default: 0,
                    },
                ],
            }),
            true,
        );

        // Create Card table
        await queryRunner.createTable(
            new Table({
                name: 'card',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'cost',
                        type: 'decimal',
                    },
                    {
                        name: 'type',
                        type: 'enum',
                        enum: ['creature', 'action', 'spell', 'item', 'land'],
                        default: "'land'",
                    },
                    {
                        name: 'color',
                        type: 'enum',
                        enum: ['green', 'black', 'red', 'blue', 'white'],
                        default: "'green'",
                    },
                    {
                        name: 'description',
                        type: 'text',
                    },
                    {
                        name: 'habilities',
                        type: 'text',
                        isArray: true,
                    },
                    {
                        name: 'stats',
                        type: 'jsonb',
                    },
                    {
                        name: 'owner',
                        type: 'varchar',
                        isNullable: false,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'card',
            new TableForeignKey({
                columnNames: ['owner'],
                referencedColumnNames: ['nickname'],
                referencedTableName: 'user',
                onDelete: 'SET DEFAULT',
            }),
        );

        // Create Order table
        await queryRunner.createTable(
            new Table({
                name: 'order',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'price',
                        type: 'decimal',
                    },
                    {
                        name: 'vendorEmail',
                        type: 'varchar',
                    },
                    {
                        name: 'costumerEmail',
                        type: 'varchar',
                    },
                    {
                        name: 'cardTitle',
                        type: 'varchar',
                    },
                    {
                        name: 'status',
                        type: 'enum',
                        enum: ['processing', 'paid', 'cancelled'],
                        default: "'processing'",
                    },
                    {
                        name: 'orderedAt',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'finishedAt',
                        type: 'timestamp',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'order',
            new TableForeignKey({
                columnNames: ['vendorEmail'],
                referencedColumnNames: ['email'],
                referencedTableName: 'user',
                onDelete: 'SET DEFAULT',
            }),
        );

        await queryRunner.createForeignKey(
            'order',
            new TableForeignKey({
                columnNames: ['costumerEmail'],
                referencedColumnNames: ['email'],
                referencedTableName: 'user',
                onDelete: 'SET DEFAULT',
            }),
        );

        await queryRunner.createForeignKey(
            'order',
            new TableForeignKey({
                columnNames: ['cardTitle'],
                referencedColumnNames: ['title'],
                referencedTableName: 'card',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order');
        await queryRunner.dropTable('card');
        await queryRunner.dropTable('user');
    }
}
