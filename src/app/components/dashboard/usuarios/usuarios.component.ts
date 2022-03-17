import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
    {usuario: "Cinco", nombre: 'Gabriela ', apellido: 'Gonzalez', sexo: 'Mujer'},
    {usuario: "Seis", nombre: 'Joa ', apellido: 'Unknow', sexo: 'Mujer'},
    {usuario: "Admin", nombre: 'Jonh ', apellido: 'Doe', sexo: 'Hombre'},
  
  ];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuario);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }
  
 
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
