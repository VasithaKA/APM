import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ConvertToSpacesPipe } from '../shared/custom-pipes/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }