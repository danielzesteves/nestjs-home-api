import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
export const HomeTypeOrm = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '0.0.0.0',
  port: 3307,
  username: 'root',
  password: 'homePass',
  database: 'home',
  entities: ['dist/**/**/**/*entity.js'],
  synchronize: false,
  migrations: ['src/database/migrations'],
});

export default new DataSource({
  type: 'mysql',
  host: '0.0.0.0',
  port: 3307,
  username: 'root',
  password: 'homePass',
  database: 'home',
  entities: ['dist/**/**/**/*entity.js'],
  migrations: ['dist/database/migrations/*migration.js'],
});
