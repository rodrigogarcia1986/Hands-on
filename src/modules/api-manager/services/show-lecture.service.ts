import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma.service';

@Injectable()
export class ShowLectureService {
  constructor(private prisma: PrismaService) {}

  async execute(meetId: string, statusLecture?: string) {
    try {
      let meet = await this.prisma.meet.findUnique({
        where: { id: meetId },
        select: { lecture: true },
      });

      if (!meet) {
        return new HttpException('meet not found.', HttpStatus.NOT_FOUND);
      }

      if (statusLecture) {
        meet = await this.prisma.meet.findUnique({
          where: { id: meetId },
          select: { lecture: { where: { status_lecture: 'CONFIRMED' } } },
        });
      }

      return meet;
    } catch (error) {
      console.log(error);
      return new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
