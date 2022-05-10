import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAccountsTable1650436810884 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "accounts",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "text" },
          { name: "username", type: "text" },
          { name: "password", type: "text" },
          { name: "created_at", type: "datetime" },
          { name: "updated_at", type: "datetime" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("accounts");
  }
}
