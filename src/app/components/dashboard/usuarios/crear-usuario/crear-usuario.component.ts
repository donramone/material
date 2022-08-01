import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  form: FormGroup;

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

   constructor(private fb: FormBuilder, 
              private _usuarioService: UsuarioService,
              private router: Router,
              private _snackBar: MatSnackBar) { 
    
      this.form = this.fb.group({
      dni : ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: [''],
      fechaNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      salario:[''],
      ocupacion:[''],
      estado:[''],
      area: [''],
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    if(this.form.valid){
      const user: Usuario = {
        // id: this.form.value.usuario,
         //id: 78,
         dni: this.form.value.dni,
         nombre: this.form.value.nombre,
         direccion: this.form.value.direccion,
         telefono: this.form.value.telefono,
        // fechaNacimiento: this.form.value.fechaNacimiento,
        fechaNacimiento:'1982/10/10',
        //sexo: this.form.value.sexo,
         salario: this.form.value.importe,
         area: this.form.value.area,
         ocupacion: this.form.value.ocupacion,
       //  estado: this.form.value.estado,
       }
       this._usuarioService.agregarUsuario(user).subscribe((data) =>{
        console.log("success add", data);
      }) 

       this._snackBar.open('El usuario fue agregado con Exito','', {
         duration: 2000,
         horizontalPosition: 'center',
         verticalPosition: 'bottom',
       })
      }
   

    this.router.navigate(['/dashboard/usuarios']);

  }

}