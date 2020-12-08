import {MigrationInterface, QueryRunner} from "typeorm";

export class discountStatus1607402767434 implements MigrationInterface {
    name = 'discountStatus1607402767434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" ADD "status" boolean NOT NULL DEFAULT true`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" DROP COLUMN "status"`, undefined);
    }

}
