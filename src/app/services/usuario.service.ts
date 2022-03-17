import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuario: Usuario[] = [
    {usuario: "Uno", nombre: 'Luigo', apellido: 'lipreri', sexo: 'Hombre'},
    {usuario: "Dos", nombre: 'Diego Armando', apellido: 'Maradona', sexo: 'Hombre'},
    {usuario: "Tres", nombre: 'Marcela', apellido: 'Lopez', sexo: 'Mujer'},
    {usuario: "Cuatro", nombre: 'Diego ', apellido: 'Gonzalez', sexo: 'Hombre'},
    {usuario: "Cinco", nombre: 'Gabriela ', apellido: 'Gonzalez', sexo: 'Mujer'},
    {usuario: "Seis", nombre: 'Joa ', apellido: 'Unknow', sexo: 'Mujer'},
    {usuario: "Admin", nombre: 'Jonh ', apellido: 'Doe', sexo: 'Hombre'},
  
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuario.slice();
  }

  eliminarUsuario(id: number) {
    this.listUsuario.splice(id,1)
  }
}
