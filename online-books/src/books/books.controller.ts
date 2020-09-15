import { CreateBooksDto } from './../dto/create_books';
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

@Controller('books')
export class BooksController {

    @Post()
    createBook(@Body() createBooksDto: CreateBooksDto): string {
        return `BookTitle: ${createBooksDto.bookTitle} AuthorName: ${createBooksDto.authorName} BookPrice: ${createBooksDto.bookCost}`;
    }

    @Get()
    findAll(): string {
        return 'Get all Books';
    }

    @Get(':id')
    findOne(@Param() param): string {
        return `Book ${param.id}`;
    }

    @Delete(':id')
    delete(@Param('id') id) {
        return id;
    }

    @Put()
    update(@Body() updateBookDetails: CreateBooksDto, @Param('id') id): string{
        return `UpdateBook Details: ${updateBookDetails.bookCost}`;

    }
}
