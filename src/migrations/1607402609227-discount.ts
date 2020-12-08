import {MigrationInterface, QueryRunner} from "typeorm";

export class discount1607402609227 implements MigrationInterface {
    name = 'discount1607402609227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ae727d0d48a7b2cafdc5df388c2"`, undefined);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "productIdId" TO "discountId"`, undefined);
        await queryRunner.query(`CREATE TABLE "discount" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying(30) NOT NULL DEFAULT 'NONE', "value" character varying NOT NULL DEFAULT '', "max_unit" character varying NOT NULL DEFAULT '', "min_value" character varying NOT NULL DEFAULT '', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_d05d8712e429673e459e7f1cddb" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_7fbbfed5cc7852606c3193bf40a" FOREIGN KEY ("discountId") REFERENCES "discount"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_7fbbfed5cc7852606c3193bf40a"`, undefined);
        await queryRunner.query(`DROP TABLE "discount"`, undefined);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "discountId" TO "productIdId"`, undefined);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ae727d0d48a7b2cafdc5df388c2" FOREIGN KEY ("productIdId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
