import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
 
  listUsuario: Usuario[] = []; 
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }
  
 cargarUsuario(){
   this.listUsuario = this._usuarioService.getUsuarios();
   this.dataSource = new MatTableDataSource( this.listUsuario);
 }

 eliminarUsuario(id: number) {
   console.log("DELETE", id);
   this._usuarioService.eliminarUsuario(id)
   this.cargarUsuario();
   this._snackBar.open('El usuario fue eliminado cone exito','', {
    duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  })
   
 }
  ngOnInit(): void {
    this.cargarUsuario();
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
