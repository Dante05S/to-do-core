import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm'

export class AddColumnUserIdTask1706678752272 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'task',
      new TableColumn({
        name: 'user_id',
        type: 'varchar',
        isNullable: false
      })
    )
    await queryRunner.createForeignKey(
      'task',
      new TableForeignKey({
        name: 'task_user_id_fk',
        columnNames: ['user_id'],
        referencedTableName: 'user',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('task', 'task_user_id_fk')
    await queryRunner.dropColumn('task', 'user_id')
  }
}
