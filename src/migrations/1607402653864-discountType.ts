import {MigrationInterface, QueryRunner} from "typeorm";

export class discountType1607402653864 implements MigrationInterface {
    name = 'discountType1607402653864'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" RENAME COLUMN "status" TO "discount_type"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discount" RENAME COLUMN "discount_type" TO "status"`, undefined);
    }

}
