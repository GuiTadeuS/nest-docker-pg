import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { RequestUserDto } from './dto/request-user.dto';
import { ResponseUserDto } from './dto/response-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('/create')
  create(@Body() createUserDto: RequestUserDto) {
    const createdUse = this.usersService.create(createUserDto);

    return new ResponseUserDto(createUserDto);
  }

  @Get()
  async findAll() {

    const allUsers = await this.usersService.findAll();

    return allUsers.map(user => new ResponseUserDto(user)); // Mapeia o valor como um ResponseUserDto
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const foundUser = await this.usersService.findOne(+id);
    return new ResponseUserDto(foundUser[0]);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<RequestUserDto>,
  ) {
    return await this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(+id);
  }
}
