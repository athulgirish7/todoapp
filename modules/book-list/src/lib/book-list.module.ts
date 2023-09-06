import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { bookListRoutes } from './lib.routes';
import { GenerateBookServiceService } from './services/generate-book-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewBookDetailsComponent } from './components/view-book-details/view-book-details.component';
import { AddEditBookDetailsComponent } from './components/add-edit-book-details/add-edit-book-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bookListRoutes),
    RouterModule,
    HttpClientModule,
  ],
  declarations: [ViewBookDetailsComponent, AddEditBookDetailsComponent],
  providers: [GenerateBookServiceService],
  exports: [],
})
export class BookListModule {}
