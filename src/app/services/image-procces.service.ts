import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { FileHandle } from '../_model/filehandel.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProccesService {
  constructor(private sanitizer: DomSanitizer) { }

  public createImage(product: Product): Product {
    if(typeof window !== 'undefined'){
      const productImage: any = product.showImage;
    const imageBlob = this.dataURIToBlob(productImage, "image/jpeg");
    const imageFile = new File([imageBlob], product.productName, {type: "image/jpeg"});
    const productImageToFileHandle: FileHandle = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    };
    product.showImage = productImageToFileHandle;
    return product;
    }
    return product;
  }

  public dataURIToBlob(picBytes: any, imageType: any) {
    const byteString = atob(picBytes);
    const mimeString = imageType;
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], { type: mimeString });
    return blob;
  }
}

