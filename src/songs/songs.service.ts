import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs: string[] = [];

  create(song) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  // ? ======== VERSION 2 =========
  findAll() {
    // fetch the songs from the db
    throw new Error('Error in Db while fetching record');
    return this.songs;
  }
  //   findAll() {
  //     // Simulating DB error
  //     throw new HttpException(
  //       'Error while fetching songs from DB',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );

  //     return this.songs;
  //   }

  // ? ======== VERSION 1 =============
  //   findAll() {
  //     // fetch the songs from the db
  //     return this.songs;
  //   }
}
