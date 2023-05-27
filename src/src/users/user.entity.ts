import { Entity, Column } from 'typeorm';
import Base from 'src/database/base.entity';
@Entity()
export class User extends Base {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  email: string;
}
