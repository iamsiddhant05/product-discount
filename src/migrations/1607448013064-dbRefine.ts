import {MigrationInterface, QueryRunner} from "typeorm";

export class dbRefine1607448013064 implements MigrationInterface {
    name = 'dbRefine1607448013064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "status"`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" ADD "is_active" boolean NOT NULL DEFAULT true`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "value"`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" ADD "value" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "max_unit"`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" ADD "max_unit" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "min_value"`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" ADD "min_value" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`, undefined);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL DEFAULT '0'`, undefined);
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "qty"`, undefined);
        await queryRunner.query(`ALTER TABLE "cart" ADD "qty" integer NOT NULL DEFAULT '1'`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "qty"`, undefined);
        await queryRunner.query(`ALTER TABLE "cart" ADD "qty" character varying NOT NULL DEFAULT '1'`, undefined);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`, undefined);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" character varying NOT NULL DEFAULT ''`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "min_value"`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" ADD "min_value" character varying NOT NULL DEFAULT ''`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "max_unit"`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" ADD "max_unit" character varying NOT NULL DEFAULT ''`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "value"`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" ADD "value" character varying NOT NULL DEFAULT ''`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "is_active"`, undefined);
        await queryRunner.query(`ALTER TABLE "discount" ADD "status" boolean NOT NULL DEFAULT true`, undefined);
    }

}
