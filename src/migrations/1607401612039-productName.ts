import {MigrationInterface, QueryRunner} from "typeorm";

export class productName1607401612039 implements MigrationInterface {
    name = 'productName1607401612039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "name" character varying NOT NULL DEFAULT ''`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "name"`, undefined);
    }

}
