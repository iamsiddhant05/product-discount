import {MigrationInterface, QueryRunner} from "typeorm";

export class cartQty1607438642261 implements MigrationInterface {
    name = 'cartQty1607438642261'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" ADD "qty" character varying NOT NULL DEFAULT '1'`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "qty"`, undefined);
    }

}
