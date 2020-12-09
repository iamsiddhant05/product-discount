import {MigrationInterface, QueryRunner} from "typeorm";

export class dummyData1607481947291 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO "public"."discount" ("id", "discount_type", "created_at", "updated_at", "is_active", "value", "max_unit", "min_value") VALUES
        ('0ff841d9-3858-40cf-8384-0346aec25017', 'MIN_ORDER', '2020-12-08 11:45:29.231629+07', '2020-12-08 11:45:29.231629+07', 't', '50', NULL, '200'),
        ('2102d113-ea98-4846-a3bc-787715939b5a', 'MIN_ORDER', '2020-12-08 11:45:29.231629+07', '2020-12-08 11:45:29.231629+07', 't', '20', NULL, '150'),
        ('41d2bf69-5dc9-42fd-a58d-da027e9c108f', 'MULTIPLE_ITEM', '2020-12-08 23:35:15.210652+07', '2020-12-08 23:35:15.210652+07', 't', '15', NULL, '3'),
        ('725faa66-6f77-4bc8-b559-e1550027078b', 'MULTIPLE_ITEM', '2020-12-08 23:35:15.210652+07', '2020-12-08 23:35:15.210652+07', 't', '5', NULL, '2'),
        ('8ac7de79-94db-4eed-8670-88c929bbc329', 'NONE', '2020-12-08 23:33:33.855142+07', '2020-12-08 23:33:33.855142+07', 't', NULL, NULL, NULL),
        ('a18611ab-dc4a-43f6-8f2a-85889635c01e', 'ABSOLUTE', '2020-12-08 11:45:29.231629+07', '2020-12-08 11:45:29.231629+07', 't', '5', '2', NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "public"."products" ("id", "status", "created_at", "updated_at", "discountId", "name", "price") VALUES
        ('03d02acb-1d40-432d-b2b2-b062b0a4a7a7', 't', '2020-12-08 11:28:07.793495+07', '2020-12-08 11:28:07.793495+07', '725faa66-6f77-4bc8-b559-e1550027078b', 'B', '20'),
        ('4c8b795b-f166-4391-80b6-7a989c7cc860', 't', '2020-12-08 11:28:07.793495+07', '2020-12-08 12:52:06.062877+07', '8ac7de79-94db-4eed-8670-88c929bbc329', 'D', '15'),
        ('5cf755e9-7e06-4de9-beae-c1e221b3be9c', 't', '2020-12-08 11:28:07.793495+07', '2020-12-08 11:28:07.793495+07', '8ac7de79-94db-4eed-8670-88c929bbc329', 'C', '50'),
        ('f7a5f3f0-3eff-4a29-bb7d-35b620efb5ce', 't', '2020-12-08 11:28:07.793495+07', '2020-12-08 11:28:07.793495+07', '41d2bf69-5dc9-42fd-a58d-da027e9c108f', 'A', '30')`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
