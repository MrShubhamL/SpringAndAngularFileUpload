import { Product } from './../_model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ImageProccesService } from '../services/image-procces.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  constructor(
    private service:ProductService,
    private imageProcessingService:ImageProccesService
  ){}

  displayedColumns: string[] = ['position', 'productName', 'productDescription', 'showImage', 'productPrice'];
  dataSource: Product[] = [];

  ngOnInit(): void {
    this.service.getAllProducts()
    .pipe(
      map((x: Product[],i) => x.map((product:Product) => this.imageProcessingService.createImage(product)))
    )
    .subscribe(res=>{
      if(res!==null){
        this.dataSource = res;
      }
    }, err=>{
      console.log(err);
    })
  }


}
