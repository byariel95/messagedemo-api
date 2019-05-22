import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { MensajesDto } from './dto/mensajes-dto';

@Controller('mensajes')
export class MensajesController {
    @Post()
    createMensaje(@Body() mensajesDto: MensajesDto ){
        return 'mensaje creado'
    }

    @Get()
    getAllMensajes(){
        return 'lista de  mensajes'
    }

    @Put(':id')
    UpdateMensajes(@Body() updateMensajeDto: MensajesDto){
        return 'Mensaje Actualizado'
    }

    @Delete(':id')
    DeleteMensajes(){
        return 'Mensaje Eliminado'
    }

}
