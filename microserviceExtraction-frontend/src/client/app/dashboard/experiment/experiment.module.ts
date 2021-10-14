import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExperimentComponent } from './experiment.component';
import { ExperimentRoutes } from './experiment.routes';

@NgModule({
    imports: [FormsModule,CommonModule,RouterModule.forRoot(ExperimentRoutes)],
    declarations: [ExperimentComponent],
    exports: [ExperimentComponent]
})

export class ExperimentModule { }
