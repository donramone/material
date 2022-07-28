import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dialog-importe',
  templateUrl: './dialog-importe.component.html',
  styleUrls: ['./dialog-importe.component.css']
})
export class DialogImporteComponent implements OnInit {
  form !: FormGroup;
  dialogTitle: string = ''
  id!: number 
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private usuarioService: UsuarioService,
    private dialogRef: MatDialogRef<DialogImporteComponent>,
    ) {}

  ngOnInit(): void {
    this.dialogTitle= this.editData.nombre;
    this.id= this.editData.id;
    this.form = this.fb.group({
      nombre: this.editData.nombre,
      importe: this.editData.importe,
    })
  }

  saveEdit(){
    console.log('salve ', this.form.value.importe, this.id);
    this.usuarioService.editarImporteUsuario(this.id,this.form.value.importe)
    this.dialogRef.close();
  //  this.form.reset();
  }
}
