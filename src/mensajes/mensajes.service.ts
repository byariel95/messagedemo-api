import { Injectable } from '@nestjs/common';
import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MensajesDto } from './dto/mensajes-dto';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>,
      ) {};

      async getAll(): Promise<Mensaje[]>{
        return await this.mensajeRepository.find();
      };

      async newMensaje(mensaje:MensajesDto):Promise<Mensaje>{
          const nuevoMensaje = new Mensaje();
          nuevoMensaje.mensaje = mensaje.mensaje;
          nuevoMensaje.nick = mensaje.nick;
         return await this.mensajeRepository.save(nuevoMensaje);
      };

      async updateMensaje(idMensaje: number, mensaje:MensajesDto):Promise<Mensaje>{ 
        const mensajeUpdate = await this.mensajeRepository.findOne(idMensaje);
        mensajeUpdate.mensaje = mensaje.mensaje;
        mensajeUpdate.nick = mensaje.nick;
       return await this.mensajeRepository.save(mensajeUpdate);
    };

    async deleteMensaje(idMensaje: number):Promise<any>{
        return await this.mensajeRepository.delete(idMensaje);
      };
};
