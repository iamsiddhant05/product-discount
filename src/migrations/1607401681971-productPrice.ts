import {MigrationInterface, QueryRunner} from "typeorm";

export class productPrice1607401681971 implements MigrationInterface {
    name = 'productPrice1607401681971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "price" character varying NOT NULL DEFAULT ''`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`, undefined);
    }

}
