import { Controller, Get, Req, Post, Body, HttpStatus, Res, Put } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from '../interfaces/cat.interface';
import { CatsService } from '../components/cats.service';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {
    }

    @Get()
    async findAll( @Req() request, @Res() response): Promise<any[]> {
        return response.status(HttpStatus.OK).json(this.catsService.findAll());
    }

    @Post()
    async create( @Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Put()
    async update( @Body() createCatDto: CreateCatDto) {
        // can override response body by passing an object instead of the string 'Forbidden'
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

}