import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { AuthGuardService } from "./shared/services/auth.guard.service";
import { SearchPipe } from "./shared/search.pipe";
import { QuillModule } from "ngx-quill";

@NgModule({
    declarations: [
        AdminLayoutComponent,
        LoginPageComponent,
        DashboardPageComponent,
        CreatePageComponent,
        EditPageComponent,
        SearchPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild([
            {path: '', component: AdminLayoutComponent, children: [
                {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                {path: 'login', component: LoginPageComponent},
                {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuardService]},
                {path: 'create', component: CreatePageComponent},
                {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuardService]}
            ]}
        ]),
        QuillModule.forRoot()
    ],
    exports: [RouterModule],
    providers: [AuthGuardService]
})

export class AdminModule {}