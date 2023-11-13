import { Injectable , Output, EventEmitter} from '@angular/core';
import { MessageService } from './message.service';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = 'https://fakestoreapi.com';
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  constructor(private messageService: MessageService, private http: HttpClient) {}

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };

  getProducts(addMsg:boolean): Observable<Product[]> {
    addMsg?this.messageService.addMessage('Products imported from DB/File'):'';
    return  this.http
      .get<Product[]>(this.apiURL + '/products');
  }
  
getProductById(id:number):Observable<Product>{
  this.messageService.addMessage(`ProductService: fetched Product id=${id}`);
  return   this.http.get<Product>(this.apiURL + `/products/${id}`);

}
}


