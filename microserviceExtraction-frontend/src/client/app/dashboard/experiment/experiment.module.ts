import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExperimentComponent } from './experiment.component';
import { DecomposeRoutes } from '../decompose/decompose.routes';

@NgModule({
    imports: [FormsModule,CommonModule,RouterModule.forRoot(DecomposeRoutes)],
    declarations: [ExperimentComponent],
    exports: [ExperimentComponent]
})

export class ExperimentModule { }
