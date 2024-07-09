import { FileHandle } from "./filehandel.model";


export interface Product{
  id: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  showImage: FileHandle;
}
