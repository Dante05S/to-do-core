import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTableUser1706677132675 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            default: "''"
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            default: "''",
            isUnique: true
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
            default: "''"
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
            default: null
          }
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user', true)
  }
}
