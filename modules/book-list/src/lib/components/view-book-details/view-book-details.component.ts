import { Component } from '@angular/core';
import { GenerateBookServiceService } from '../../services/generate-book-service.service';
import { BooksRepository } from '../../state/books.repository';

@Component({
  selector: 'lib-view-book-details',
  templateUrl: './view-book-details.component.html',
  styleUrls: ['./view-book-details.component.scss'],
})
export class ViewBookDetailsComponent {
  constructor(
    private booksService: GenerateBookServiceService,
    public repo: BooksRepository
  ) {}

  ngOnInit() {
    this.booksService.getBooks();
    this.repo.books$.subscribe((state)=>{
      console.log(state);
    })
  }

  addToLib(id: string){
    this.repo.addToLibrary(id);
  }
}
