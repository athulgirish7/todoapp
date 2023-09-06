import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksRepository } from '../state/books.repository';

@Injectable({
  providedIn: 'root'
})
export class GenerateBookServiceService {

  constructor(private repo: BooksRepository) { }

  getBooks() {
    const books = [
    {
      id: 'M08-978-3-16-148410-0',
      volumeInfo: {
        title: 'Mary had a little lamb',
        authors: ['Author 1', 'Author 2']
      }
    },
    {
      id: 'HD-09-067-8-18-279010-0',
      volumeInfo: {
        title: 'Humpty Dumpty',
        authors: ['Author H', 'Author D']
      }
    }
  ]; 
  this.repo.setBooks(books);
}

}
