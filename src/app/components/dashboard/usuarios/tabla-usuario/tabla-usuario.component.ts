import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {
  @Output()
  enviar: EventEmitter<any> = new EventEmitter<any>();
  textoHijo: string;
  constructor() { }

  ngOnInit(): void {
  }

  mandarAlPadre(value: string){
    const user: Usuario = {
       id: 177,
       dni: '29418853',
       nombre: value,
       direccion: 'siempre viva',
       telefono:'3735 659809',
       fechaNacimiento: 'null',
       sexo: 'dontknow',
      // importe: 77456,
       salario: 45000,
       area: 'arfea',
       ocupacion: 'ocupacionche',
       estado: 'status',
     }
   // console.log(user);
     this.enviar.emit(user);
      
  }
}
