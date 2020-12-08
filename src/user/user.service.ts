import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NewUserDto } from "./dto/new-user.dto";
import { Users } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) { }

  async getById(id: string): Promise<Users> {
    return this.userRepository.findById(id);
  }

  async addNewUser(newUser: NewUserDto): Promise<Users> {
    const addUser = new Users();

    addUser.name = newUser.name;

    return await addUser.save();
  }
}