import { Component, OnInit } from '@angular/core';
import { BooksRepository } from '../../state/books.repository';

@Component({
  selector: 'lib-add-edit-book-details',
  templateUrl: './add-edit-book-details.component.html',
  styleUrls: ['./add-edit-book-details.component.scss'],
})
export class AddEditBookDetailsComponent implements OnInit{
  isCartEmpty = true;
  constructor(
    public repo: BooksRepository
  ) {}
 
  ngOnInit(){
    this.repo.ownBooks$.subscribe(books =>{
      this.isCartEmpty = books.length === 0;
    })
  }
  removeFromLib(id: string){
    this.repo.removeFromLibrary(id);
  }
}
