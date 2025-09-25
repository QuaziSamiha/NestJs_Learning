import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  // CREATED THE ROUTE TO FETCH ALL SONGS
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (e) {
      throw new HttpException(
        'server error', // error message for client
        HttpStatus.INTERNAL_SERVER_ERROR, // HTTP status code 500
        { cause: e }, // keep original error for debugging
      );
    }
  }

  // CREATED ROUTE TO FETCH SINGLE SONG DYNAMICALLY
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    id: number,
  ) {
    return `fetch song on the based on id ${typeof id}`;
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDto) {
    const results = this.songsService.create(createSongDTO);
    return results;
  }

  @Put(':id')
  update() {
    return 'update song on the based on id';
  }

  @Delete(':id')
  delete() {
    return 'delete song on the based on id';
  }
}

// ? ======================= VERSION 1 =====================
// import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
// import { SongsService } from './songs.service';

// @Controller('songs')
// export class SongsController {
//   constructor(private songsService: SongsService) {}

//   // CREATED THE ROUTE TO FETCH ALL SONGS
//   @Get()
//   findAll() {
//     return this.songsService.findAll();
//     // return 'find all songs endpoint';
//   }

//   // CREATED ROUTE TO FETCH SINGLE SONG DYNAMICALLY
//   @Get(':id')
//   findOne() {
//     return 'fetch song on the based on id';
//   }

//   @Post()
//   create() {
//     return this.songsService.create('Animals by Martin Garrix');
//     // return 'create a new song endpoint';
//   }

//   @Put(':id')
//   update() {
//     return 'update song on the based on id';
//   }

//   @Delete(':id')
//   delete() {
//     return 'delete song on the based on id';
//   }
// }
