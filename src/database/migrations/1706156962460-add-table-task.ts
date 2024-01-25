import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class AddTableTask1706156962460 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'task',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
            default: "''"
          },
          {
            name: 'description',
            type: 'text',
            isNullable: false
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['PENDING', 'IN_PROGRESS', 'DONE'],
            default: "'PENDING'"
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
    await queryRunner.dropTable('task', true)
  }
}
