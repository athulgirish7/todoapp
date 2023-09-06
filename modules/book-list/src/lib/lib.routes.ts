import { Route } from '@angular/router';
import { ViewBookDetailsComponent } from './components/view-book-details/view-book-details.component';
import { AddEditBookDetailsComponent } from './components/add-edit-book-details/add-edit-book-details.component';

export const bookListRoutes: Route[] = [
    { path: 'view', component: ViewBookDetailsComponent },
    { path: 'add', component: AddEditBookDetailsComponent }
];
