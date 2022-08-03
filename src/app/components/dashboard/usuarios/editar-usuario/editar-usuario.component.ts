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
  selectedArea: String;

  sexo: any[] = [
    { value: 'hombre-0', viewValue: 'Hombre' },
    { value: 'mujer-1', viewValue: 'Mujer' },
  ];

  area: any[] = [
    { id: '1', nombre: 'Obras Publicas' },
    { id: '2', nombre: 'Economia' },
    { id: '3', nombre: 'Cementerio' },
    { id: '4', nombre: 'Becas' },
    { id: '8', nombre: 'Other' },
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
      // Controlar si no tiene Area no trae datos
      const idArea = this.getIndexArea(usuario.area['id'])
      /*
      this.editForm.setValue({
        dni:  [usuario.dni],
        nombre: [usuario.nombre],
        direccion: [usuario.nombre],
        telefono: [usuario.telefono],
        fechaNacimiento: '1994-05-16',
        sexo: [usuario.sexo],
        salario: [usuario.salario],
        ocupacion: [usuario.ocupacion],
        estado: [usuario.estado],
        area: this.area[idArea],

      });
    */
      this.editForm.controls['dni'].setValue(usuario.dni);
      this.editForm.controls['nombre'].setValue(usuario.nombre);
      this.editForm.controls['direccion'].setValue(usuario.direccion);
      this.editForm.controls['telefono'].setValue(usuario.telefono);
      this.editForm.controls['fechaNacimiento'].setValue(usuario.fechaNacimiento);
      this.editForm.controls['sexo'].setValue(usuario.sexo);
      this.editForm.controls['salario'].setValue(usuario.salario);
      this.editForm.controls['ocupacion'].setValue(usuario.ocupacion);
      this.editForm.controls['estado'].setValue(usuario.estado);
      this.editForm.controls['area'].setValue(this.area[idArea]);
    });
  }

  getIndexArea(idArea){
    console.log(idArea);
    
    for(let i= 0; i < this.area.length ; i++){
      if(idArea == this.area[i].id ){
        return i
      }
    }
    return 0;
  }

  editarUsuario() {
    console.log('salvando los datos del edit!');
  }

  volver(){
    this.router.navigate(['/dashboard/usuarios']);
  }
}
