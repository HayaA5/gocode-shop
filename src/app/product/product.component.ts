import { Observable, of } from 'rxjs';
import { Component, Input } from '@angular/core';
// import { Product } from '../product';
import { MessageService } from '../message.service';
import { Product } from '../product';
//import { PRODUCTSLIST } from '../products-list';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()  product?: Product;
}





