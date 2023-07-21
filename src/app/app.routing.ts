import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { UsuarioComponent } from "./components/usuario/usuario.component";
import { VehiculoComponent } from "./components/vehiculo/vehiculo.component";
import { ErrorComponent } from "./components/error/error.component";
import { LoginComponent } from "./components/login/login.component";
import { ChoferComponent } from "./components/chofer/chofer.component";
import { KilometrajeComponent } from "./components/kilometraje/kilometraje.component";
import { CombustibleComponent } from "./components/combustible/combustible.component";

const appRoutes:Routes=[
    {path: 'login', component: LoginComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'vehiculo', component: VehiculoComponent},
    {path: 'chofer', component: ChoferComponent},
    {path: 'kilometraje', component: KilometrajeComponent},
    {path: 'combustible', component: CombustibleComponent},
    {path: '**', component: ErrorComponent},
];

export const routing: ModuleWithProviders<Object>=RouterModule.forRoot(appRoutes);