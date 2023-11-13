import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';
import Utils from '../utils';
import { SORT_OPTIONS } from '../sorting-options';
import { Sorts } from "../sort"
import { Product } from '../product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(private productService:ProductService){}

  products:Product[]=[];
  categories?:string[];
  selectCat:string="";
  @Output() selectedCategory=new EventEmitter<string>();
  @Output() sortByChange = new EventEmitter<number>();
  sortList: Sorts[] = SORT_OPTIONS;
  selectSort: number =0;

  onSelect(){
    this.selectedCategory.emit(this.selectCat);
  }
  ngOnInit(){
    this.getProductsAndCats();
  }

  getProductsAndCats(): void {
    this.productService.getProducts(true)
        .subscribe(product => {
          this.products = product;
          this.categories=Object.keys(Utils.groupBy(this.products, 'category'));
        }) 
  }

  sortBy(){
    this.sortByChange.emit(this.selectSort);
  }

}

