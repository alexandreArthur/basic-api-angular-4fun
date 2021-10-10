import { InitialPageComponent } from './initial-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule } from '@angular/router';
import{ FormsModule } from '@angular/forms';

import { AnimalServiceService } from '../services/animal-service.service';

@NgModule({
    declarations: [
        InitialPageComponent
      
    ],
    imports: [
      CommonModule, RouterModule, FormsModule
    ],
    providers:[
        AnimalServiceService
    ]
  })
  export class AnimaisModule { }