import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";


@NgModule({
    imports: [FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatIconModule,
        MatGridListModule,
        MatInputModule,],
    exports: [FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatIconModule,
        MatGridListModule,
        MatInputModule,]
})
export default class SharedModule { };