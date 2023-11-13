import { Component} from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product?:Product;
  id?: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }
  ngOnInit(){
    this.getProductDetails();
  }

  getProductDetails(){
    this.id= Number(this.route.snapshot.params['productId']);
    this.productService.getProductById(this.id).subscribe(prod=>this.product= prod);
  }

  goBack(): void {
    this.location.back();
  }

}

   


