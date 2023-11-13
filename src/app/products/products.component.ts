import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';
import Utils from '../utils';
import { Sorts } from '../sort';
import { SORT_OPTIONS } from '../sorting-options';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnChanges {
  constructor(private productService:ProductService, private messageService:MessageService, 
              private router:Router, private location:Location){}

  products:Product[]=[];
  @Input() category?:string;
  filteredProds:Product[]=[];
  sortList: Sorts[] = SORT_OPTIONS;
  private _sortBy: number = 0;
  cat?:any;

  @Input() set sortBy(value: number) {
    this._sortBy = value;
    this.sortProduct(value);
  }

  getProducts(): void {
    this.productService.getProducts(true)
        .subscribe(product => {
          this.products = product;
          this.filteredProds=product;
        })  
  }

  ngOnInit(){
      this.getProducts();
      if(this.cat && this.cat["category"]){
        this.category=this.cat["category"];
      }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['category']){
      this.filteredProds= changes['category'].currentValue==""?this.products:this.products?.filter(product=>product.category==changes['category'].currentValue);
      if(this._sortBy>0){
        this.filteredProds=this.sortProduct(this._sortBy);
      }
    }
  }

  private sortProduct(sortIndex : number):Product[]{
    let sortObj = this.sortList[sortIndex];
    // if (sortObj.type == "number"){
    //   return Utils.sortNumber(this.filteredProds, sortObj.key, sortObj.desc);
    // }else if(sortObj.type=="string"){
    //   return Utils.sortString(this.filteredProds, sortObj.key, sortObj.desc);
    // }

    if(sortObj.type){
      return Utils.sortGal(this.filteredProds, sortObj.key, sortObj.desc);   
    }
    return this.filteredProds;
  }

}
