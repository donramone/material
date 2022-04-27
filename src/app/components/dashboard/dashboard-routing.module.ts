import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
    { path:'', component: DashboardComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'areas', component: AreasComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: 'crear-usuario', component: CrearUsuarioComponent },
    { path: 'editar-usuario/:id', component: EditarUsuarioComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
