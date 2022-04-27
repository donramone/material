import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuario: Usuario[] = [
    {id: 1,  dni: "35257366", nombre: 'Luigo lipreri', direccion:'Colon 1235', importe:10000.00, estado:'Activo'},
    {id: 22, dni: "40100129", nombre: 'Diego Armando', direccion:'Barrio 34 Mz3', importe:1020000, estado:'Activo'},
    {id: 3,  dni: "27444511", nombre: 'Marcela Lopez', direccion:'Lavalle 154', importe:30000, estado:'Activo'},
    {id: 14, dni: "29865123", nombre: 'Diego Gonzalez', direccion:'Maipu 35', importe:40.000, estado:'Inactivo'},
    {id: 5,  dni: "15487368", nombre: 'Gabriela Gonzalez',direccion:'Colon 5000',  importe:12.000, estado:'Activo'},
    {id: 60, dni: "20453676", nombre: 'Joa Unknow', direccion:'Sin calle', importe:17.000, estado:'Activo'},
    {id: 7,  dni: "34487366", nombre: 'Jonh Doe',direccion:'25 de Mayto 343', importe:10.000, estado:'Activo'},
  
  ];

/*
  usuario: string;
  dni?: string;
  nombre: string;
  apellido?: string;
  direccion?: string;
  telefono?: string;
  fechaNacimiento?: string;
  sexo: string;
  // datos de su empleo
  importe?: number;
  ocupacion?: string;
  area?: string;
  estado?: string;
*/
  constructor() { }

  getUsuarios(){
    return this.listUsuario.slice();
  }

  getById(id) {
    for(let i=0;i < this.listUsuario.length ;i++){
      if(this.listUsuario[i].id ==id ){
        return this.listUsuario[i];
      } 
    }
  }

  eliminarUsuario(id: number) {
    this.listUsuario.splice(id,1)
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuario.unshift(usuario)
  }

  editarUsuario(id: number, usuario: any){

  }
}
