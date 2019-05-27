import { Controller, Post, Body, Get, Put, Delete, Res, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { MensajesDto } from './dto/mensajes-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
     constructor(private mensajeService : MensajesService){

     }

    @Post()
    createMensaje(@Body() mensajesDto: MensajesDto,@Res() response ){
        this.mensajeService.newMensaje(mensajesDto).then(mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje);
        }).catch(() =>{
            response.status(HttpStatus.FORBIDDEN).json({Mensaje:"Error no se pudo obtener"});
        });
    };

    @Get()
    getAllMensajes(@Res() response){
        this.mensajeService.getAll().then(mensajesList =>{
            response.status(HttpStatus.OK).json(mensajesList);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({Mensaje:"Error no se pudo obtener los mensajes"});
        });
       
    };

    @Put(':id')
    UpdateMensajes(@Body() updateMensajeDto: MensajesDto,@Param('id') idMensaje,@Res() response ){
        this.mensajeService.updateMensaje(idMensaje,updateMensajeDto).then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch(() =>{
            response.status(HttpStatus.FORBIDDEN).json({Mensaje:"Error en la Edicion del mensaje"});
        });
    };

    @Delete(':id')
    DeleteMensajes(@Res() response,@Param('id') idMensaje){
        this.mensajeService.deleteMensaje(idMensaje).then(res =>{
            response.status(HttpStatus.OK).json(res)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({Mensaje:"Error al Eliminar el mensaje"});
        });
    
    };

}
