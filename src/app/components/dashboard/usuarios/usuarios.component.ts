import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario';




const ELEMENT_DATA: Usuario[] = [
  {usuario: "Uno", nombre: 'luigi', apellido: 'lipreri', sexo: 'H'},

];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
