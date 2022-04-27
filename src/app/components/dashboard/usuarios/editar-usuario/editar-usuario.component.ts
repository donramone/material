import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  public editForm: FormGroup;
  userId: String;

  
  sexo: any[] = [
    {value: 'hombre-0', viewValue: 'Hombre'},
    {value: 'mujer-1', viewValue: 'Mujer'},
   ];

  area: any[] = [
    {value: '1', viewValue: 'Obras Publicas'},
    {value: '2', viewValue: 'Economia'},
    {value: '3', viewValue: 'Cementerio'},
    {value: '4', viewValue: 'Becas'},
   ];

  constructor ( private _usuarioService: UsuarioService,
                private fb: FormBuilder,
                private router: Router,
                private activatedRouter: ActivatedRoute,
              ) {
                this.editForm = this.fb.group({
                  dni : ['', Validators.required],
                  nombre: ['', Validators.required],
                  direccion: ['', Validators.required],
                  telefono: [''],
                  fechaNacimiento: ['', Validators.required],
                  sexo: ['', Validators.required],
                  importe:[''],
                  ocupacion:[''],
                  estado:[''],
                  area: [''],
                })
               }

  ngOnInit(): void {
    /*
    this.activatedRouter.queryParams.subscribe(
      (params: Params) => {
        this.userId = params['id']
      }
    )*/
    this.activatedRouter.params.subscribe(
      (params: Params) => {
        this.userId = params['id'];
      }
    )
    
    const usuario = this._usuarioService.getById(this.userId);
    this.editForm = this.fb.group({
      dni : [usuario.dni],
      nombre: [usuario.nombre],
      direccion: [usuario.direccion],
      telefono: [usuario.telefono],
      fechaNacimiento: [usuario.fechaNacimiento],
      sexo: [usuario.sexo],
      importe:[usuario.importe],
      ocupacion:[usuario.ocupacion],
      estado:[usuario.estado],
      area: [usuario.area],
    
    })
    
  }

  editarUsuario(){
    console.log("salvando los datos del edit!");
    
  }

}
