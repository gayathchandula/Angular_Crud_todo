import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import SharedModule from "../shared.module";
import { LoginComponent } from "./login/login.component";


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
]

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    declarations: [LoginComponent],
    exports: [RouterModule]
})
export default class AuthModule { }