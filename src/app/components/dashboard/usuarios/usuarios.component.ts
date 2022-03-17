import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../interfaces/usuario';






@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuario: Usuario[] = [
    {usuario: "Uno", nombre: 'luigi', apellido: 'lipreri', sexo: 'Hombre'},
    {usuario: "Dos", nombre: 'Diego Armando', apellido: 'Maradona', sexo: 'Hombre'},
    {usuario: "Tres", nombre: 'Marcela', apellido: 'Lopez', sexo: 'Mujer'},
    {usuario: "Cuatro", nombre: 'Diego ', apellido: 'Gonzalez', sexo: 'Hombre'},
    {usuario: "Admin", nombre: 'Jonh ', apellido: 'Doe', sexo: 'Hombre'},
  
  ];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuario);

  constructor() { }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
