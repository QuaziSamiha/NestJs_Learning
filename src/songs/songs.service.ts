import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}

  create(createSongDto: Prisma.SongCreateInput) {
    return this.prisma.song.create({
      data: createSongDto,
    });
  }

  findAll() {
    return this.prisma.song.findMany();
  }

  findOne(id: number) {
    return this.prisma.song.findUnique({
      where: { id },
    });
  }
}

// ? =============== CHAPTER 1-5 ==============
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class SongsService {
//   // local db
//   // local array

//   private readonly songs: string[] = [];

//   create(song) {
//     // Save the song in the database
//     this.songs.push(song);
//     return this.songs;
//   }

//   // ? ======== VERSION 2 =========
//   findAll() {
//     // fetch the songs from the db
//     throw new Error('Error in Db while fetching record');
//     return this.songs;
//   }
//   //   findAll() {
//   //     // Simulating DB error
//   //     throw new HttpException(
//   //       'Error while fetching songs from DB',
//   //       HttpStatus.INTERNAL_SERVER_ERROR,
//   //     );

//   //     return this.songs;
//   //   }

//   // ? ======== VERSION 1 =============
//   //   findAll() {
//   //     // fetch the songs from the db
//   //     return this.songs;
//   //   }
// }
