import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  selectCat?:string;
  sort:number=0;

  onSelect(msg:string){
   this.selectCat=msg;
  }

  sortBy(type:number){
    this.sort=type
  }
}
