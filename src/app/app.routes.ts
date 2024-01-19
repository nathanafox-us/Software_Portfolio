import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { InquiriesPageComponent } from './inquiries-page/inquiries-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'mission', component: MissionPageComponent},
    { path: 'inquiries', component: InquiriesPageComponent},
    { path: 'products', component: ProductsPageComponent}
];
