import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  readonly artists: string[];

  @IsDateString()
  @IsNotEmpty()
  readonly releasedDate: string; // must be string, not Date

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: string;
}
