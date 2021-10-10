import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from '../services/animal-service.service';
import { animal } from '../models/animal.dto';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {
  public animais: animal[];

  constructor(private AnimalService: AnimalServiceService) { }


  ngOnInit(): void {
    this.getAnimais();
  }

  public getAnimais(): void{
    this.AnimalService.getAnimais().subscribe(
      (response: animal[]) =>{
        this.animais = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
