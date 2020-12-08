import {
  EntityRepository,
  Repository,
} from 'typeorm';

import { Users } from './user.entity';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  async findById(id: string) {
    return this.find({
      where: {
        id,
      },
    });
  }
}