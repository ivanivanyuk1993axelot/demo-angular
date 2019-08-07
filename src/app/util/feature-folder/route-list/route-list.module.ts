import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouteListComponent} from './route-list/route-list.component';
import {RouteListItemComponent} from './route-list-item/route-list-item.component';
import {GetChildrenPurePipe} from './get-children-pure/get-children-pure.pipe';
import {GetDisplayTextBsPurePipe} from './get-display-text-bs-pure/get-display-text-bs-pure.pipe';
import {RouterModule} from '@angular/router';
import { GetUrlPurePipe } from './get-url-pure/get-url-pure.pipe';
import {MatExpansionModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [RouteListComponent, RouteListItemComponent, GetChildrenPurePipe, GetDisplayTextBsPurePipe, GetUrlPurePipe],
  exports: [RouteListComponent],
  imports: [CommonModule, RouterModule, MatExpansionModule, MatListModule],
})
export class RouteListModule {
}
