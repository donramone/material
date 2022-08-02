import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   // Define API
   apiURL = 'http://localhost:3000';
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private http: HttpClient) { }

  listUsuario: Usuario[] = [
    {id: 1,  dni: "35257366", nombre: 'Pepe Perez', direccion:'Colon 1235', salario:10000.00, estado:'Activo'},
    {id: 22, dni: "40100129", nombre: 'Diego Armando', direccion:'Barrio 34 Mz3', salario:1020000, estado:'Activo'},
    {id: 3,  dni: "27444511", nombre: 'Marcela Lopez', direccion:'Lavalle 154', salario:30000, estado:'Activo'},
    {id: 14, dni: "29865123", nombre: 'Diego Gonzalez', direccion:'Maipu 35', salario:40.000, estado:'Inactivo'},
    {id: 5,  dni: "15487368", nombre: 'Gabriela Gonzalez',direccion:'Colon 5000',  salario:12.000, estado:'Activo'},
    {id: 60, dni: "20453676", nombre: 'Joa Unknow', direccion:'Sin calle', salario:17.000, estado:'Activo'},
    {id: 7,  dni: "34487366", nombre: 'Jonh Doe',direccion:'25 de Mayto 343', salario:10.000, estado:'Activo'},
  
  ];



// updateEmpUrl = 'http://localhost:4200/emppleados/updateEmployee';

  getUsuarios(): Observable<Usuario> {
    return this.http
    .get<Usuario>(this.apiURL + '/empleados')
    .pipe(retry(1), catchError(this.handleError));
  }
  getByArea(id: number): Observable<Usuario> {
    return this.http
    .get<Usuario>(this.apiURL + `/empleados/${id}`)
   //.get<Usuario>(this.apiURL + "/empleados/2") // No quiero empleado 2 quiero todos los del area 2
  
  }
  agregarUsuario(usuario: Usuario):Observable<Usuario> {
    let data = usuario;
    console.log(data);
    return this.http.post<Usuario>(`${this.apiURL}/empleados`, data, {headers: {skip: 'true'}});

/*
    return this.http
    .post<Usuario>(this.apiURL + '/empleados', 
    JSON.stringify(usuario), this.httpOptions
    )
    .pipe(
      catchError(this.handleError)
    )
    */
  }
  handleError(error: any) {
    console.log("Entro en handle error");
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  getById(id):Observable<Usuario> {
    return this.http
    .get<Usuario>(`${this.apiURL}/empleados/${id}`)
  }

  eliminarUsuario(id: number):Observable<any> {
    return this.http
    .delete(`${this.apiURL}/empleados/${id}`,  {responseType: 'text'})
    .pipe(retry(1), catchError(this.handleError));
  }



  editarImporteUsuario(id: number, importe: number){
    //  let fila = this.getById(id);
    // fila.salario = importe;
    // this.agregarUsuario(fila);
    //console.log('vas a ediar el user: ' + id + "new importe ", + importe);
  }
  // cambiar usuario por empleado
  /*
  updateEmployee(emp :Usuario) : Observable<Usuario>{
    return this.http.put<Usuario>(this.updateEmpUrl, emp);
  }
  */
}



  /*

    create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
*/
