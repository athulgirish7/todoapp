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
      id: '100',
      volumeInfo: {
        title: 'Mary had a little lamb',
        authors: ['Author 1', 'Author 2']
      }
    },
    {
      id: '101',
      volumeInfo: {
        title: 'Humpty Dumpty',
        authors: ['Author H', 'Author D']
      }
    }
  ]; 
  this.repo.setBooks(books);
}

}
