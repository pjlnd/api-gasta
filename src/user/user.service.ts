import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
    @Inject()
    private readonly prisma: PrismaService;

    async createUser(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({
          data,
        });
      }

      async updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
      }): Promise<User> {
        const { where, data } = params;
        return this.prisma.user.update({
          data,
          where,
        });
      }
    
      async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
          where,
        });
      }
}
