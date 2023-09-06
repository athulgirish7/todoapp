import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'books',
        loadChildren: () =>
          import('modules/book-list').then((m) => m.BookListModule),
    }
];
