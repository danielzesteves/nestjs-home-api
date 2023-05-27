import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1685207426494 implements MigrationInterface {
    name = 'Migration1685207426494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP PRIMARY KEY
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`id\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`id\` varchar(36) NOT NULL PRIMARY KEY
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` CHANGE \`updatedAt\` \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` CHANGE \`updatedAt\` \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`id\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`id\` varchar(36) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD PRIMARY KEY (\`id\`)
        `);
    }

}
