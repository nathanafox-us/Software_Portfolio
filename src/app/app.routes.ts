import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InquiriesPageComponent } from './inquiries-page/inquiries-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'inquiries', component: InquiriesPageComponent},
];
