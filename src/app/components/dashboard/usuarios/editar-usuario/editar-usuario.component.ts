import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  public editForm: FormGroup;
  userId: String;

  sexo: any[] = [
    { value: 'hombre-0', viewValue: 'Hombre' },
    { value: 'mujer-1', viewValue: 'Mujer' },
  ];

  area: any[] = [
    { value: '1', viewValue: 'Obras Publicas' },
    { value: '2', viewValue: 'Economia' },
    { value: '3', viewValue: 'Cementerio' },
    { value: '4', viewValue: 'Becas' },
  ];

  constructor(
    private _usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.editForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: [''],
      fechaNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      salario: [''],
      ocupacion: [''],
      estado: [''],
      area: [''],
    });
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params: Params) => {
      this.userId = params['id'];
    });

    this._usuarioService.getById(this.userId).subscribe((usuario) => {
      console.log('getById editcomponent ');
      console.log(usuario);
      /*
      this.editForm.patchValue({
        dni: [usuario.dni],
        nombre: [usuario.nombre],
        direccion: [usuario.direccion],
        telefono: [usuario.telefono],
        fechaNacimiento: [usuario.fechaNacimiento],
        sexo: [usuario.sexo],
        salario: [usuario.salario],
        ocupacion: [usuario.ocupacion],
        estado: [usuario.estado],
        area: [usuario.area],
      });
      */
      this.editForm.setValue({
        dni: '29418853',
        nombre: 'Belen Vaca',
        direccion: 'In my Heart',
        telefono: 4215987,
        fechaNacimiento: '01/01/1982',
        sexo: 'Feminino',
        salario: 85000,
        ocupacion: 'desocupado',
        estado: 'ausente',
        area: 'Cementerio',
      });
    });
  }

  editarUsuario() {
    console.log('salvando los datos del edit!');
  }
}
