import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  currentCategoryId: number = 1;
  searchMode: boolean = false;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }
  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProduct();
    }
  }
  
  handleSearchProducts() {
    const thekeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    //now Search for the products using the keyword
    this.productService.searchProducts(thekeyword).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  handleListProduct() {
    //check if "id" params is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId) {
      //get the "id" param string. And convert it to a number using the "+" symbol
      this.currentCategoryId =+ this.route.snapshot.paramMap.get('id')!;
    }

    // now get the products for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    );
  }

}
