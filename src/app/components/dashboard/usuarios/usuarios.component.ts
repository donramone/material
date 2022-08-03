import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogImporteComponent } from './dialog-importe/dialog-importe.component';
import { Router } from '@angular/router';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  area: any[] = [
    { id: '1', viewValue: 'Obras Publicas' },
    { id: '2', viewValue: 'Economia' },
    { id: '3', viewValue: 'Cementerio' },
    { id: '14', viewValue: 'Becas' },
  ];
  employee: any = [];
  selectedRow: Number;
  selectedArea: string;
  isEditing: Boolean = false;
  listUsuario: Usuario[] = [];
  myUser: Usuario;
  displayedColumns: string[] = [
    'id',
    'dni',
    'nombre',
    'salario',
    'estado',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Usuario>();
  //private dataSource = new MatTableDataSource<Usuario>();
  selectedRowIndex: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _usuarioService: UsuarioService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router
  ) {}

  recibirHijo(mensaje: any){
    console.log('en el padre');
    console.log(mensaje);
    
    
  }
  testEdit(ele) {
    //this.isEditing = !this.isEditing;

    this.dialog.open(DialogImporteComponent, {
      width: '30%',
      data: ele,
    });
  }
  rowClick(rowId) {
    console.log('ROW CLICK ', rowId);
    this.selectedRow = rowId;
  }

  public getTotalCost() {
    // return this.players.reduce((accum, curr) => accum + curr.goals, 0);
    return 9839;
  }

  buscar(id){
    console.log('Voy buscando tu mirada de gato con el index ', id);
    this.findUserByArea(id);
    
  }
  ngOnInit(): void {
     this.cargarUsuario();

  }

  cargarUsuario() {
    return this._usuarioService.getUsuarios().subscribe((empleados) => {
      this.employee = empleados;
      this.dataSource.data = this.employee;
    });
  }

  findUserByArea(id: number) {
    this._usuarioService.getByArea(id).subscribe((empleados) => {
      this.employee = empleados;
      console.log(this.employee);
      this.dataSource.data = this.employee;
    });
  }
  eliminarUsuario(id: number) {
    this._usuarioService.eliminarUsuario(id).subscribe((data)=>{
         console.log("success delete");
    });
    this.cargarUsuario().unsubscribe();
    this._snackBar.open('El usuario fue eliminado cone exito', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
   }

  editarUsuario(myUser: any) {
    // this.router.navigate(['dashboard/editar-usuario'], { queryParams:{id: myUser.id}})
    this.router.navigate(['dashboard/editar-usuario', myUser.id]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  highlight(index: number) {
    console.log('EVENTO highlight hiciste click', index);
    //this.selectedRowIndex = index;
    if (index >= 0 && index < this.listUsuario.length)
      this.selectedRowIndex = index;
    //console.log(this.selectedRowIndex);
  }

  arrowUpEvent(index: number) {
    this.highlight(index - 1);
  }

  arrowDownEvent(index: number) {
    console.log(index);
    this.highlight(index + 1);
  }
  editWithEnter(index: number) {
    this.isEditing = !this.isEditing;
    console.log('Enter en ', index, 'el valor de editing es:', this.isEditing);
  }
  editRowId: number = -1;
  @ViewChildren(MatInput, { read: ElementRef }) inputs: QueryList<ElementRef>;
  edit(row, element) {
    console.log('en la funcion edit', row, 'element ', element);

    this.editRowId = 2;
    /*
    setTimeout(() => {
      this.inputs
        .find((x) => x.nativeElement.getAttribute('nombre') == element)
        .nativeElement.focus();
    });
    */
  }
  selectArea(event) {
    console.log(`en el event del selectArea`);
    const areaId = event.value;
    console.log(`el id area es ${areaId}`);
    this.findUserByArea(areaId);
    /*     this.products = this.dataService.fetchProducts(event.value);
    this.form.patchValue({ productId: null }); this.employee = empleados;
  */
  }
}
