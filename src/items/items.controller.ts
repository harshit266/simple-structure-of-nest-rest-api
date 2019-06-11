import { Controller, Get, Post , Body , Req , Res , Param, Delete, Put} from '@nestjs/common';
import {Request , Response} from 'express' ;
import {CreateItemDto} from './dto/create-item.dto';
@Controller('items')
export class ItemsController {

    @Get()
    findAll(@Req() req:Request , @Res() res:Response) : Response  {
        return res.send("Hello world");
    }

    @Get(':id')
    findOne(@Param('id') id ): string{
        return `Item ${id}`
    }

    // for talking data in nest we use dto - data transfer objects
    @Post()
    create(@Body() x : CreateItemDto):string {
        return `Name : ${x.name} desc : ${x.description}`
    }

    @Delete(':id')
    deleteone(@Param('id')id):string {
        return `delete : ${id}`
    }

    @Put(':id')
    update(@Body() updateItem : CreateItemDto , @Param('id') id) : string {
        return ` update ${id} - name : ${updateItem.name}`;
    }

}
