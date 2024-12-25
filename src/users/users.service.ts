import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'User',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      role: 'Admin',
    },
    {
      id: 4,
      name: 'Diana Evans',
      email: 'diana.evans@example.com',
      role: 'User',
    },
    {
      id: 5,
      name: 'Ethan Wright',
      email: 'ethan.wright@example.com',
      role: 'Admin',
    },
  ];

  findAll(role?: 'ADMIN' | 'USER') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);

      if(rolesArray.length === 0) throw new NotFoundException("User Role Not Found");

      return rolesArray;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('User Not Found');

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    // console.log(usersByHighestId);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    // console.log(newUser);

    this.users.push(newUser);
    return newUser;

    // console.log(newUser); //{ id: 6,name: 'kaungkaung',email: 'kaungkaung@gmail.com',role: 'Admin' }
  }

  update( id: number, updateUserDto: UpdateUserDto, ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
        // console.log({...user});
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removeUser;
  }
}
