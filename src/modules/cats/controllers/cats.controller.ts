import { Controller, Get, Req, Post, Body, HttpStatus, Res, Put, UseFilters } from '@nestjs/common';

import { HttpExceptionFilter } from '../../../filters/http-exception.filter';
import { ForbiddenException } from '../exceptions/forbidden.exception';

import { CreateCatDto } from '../dto/create-cat.dto';
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
    @UseFilters(new HttpExceptionFilter())
    async update( @Body() createCatDto: CreateCatDto) {
        // can override response body by passing an object instead of the string 'Forbidden'
        throw new ForbiddenException();
    }

}