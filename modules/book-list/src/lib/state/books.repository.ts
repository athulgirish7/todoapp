import { Injectable } from '@angular/core';
import { createState, Store } from '@ngneat/elf';
import {
  setEntities,
  selectAllEntities,
  withEntities,
} from '@ngneat/elf-entities';

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
  };
}

const { state, config } = createState(
  withEntities<Book>()
);

const store = new Store({ name: 'books', state, config });

@Injectable({ providedIn: 'root' })
export class BooksRepository {
  books$ = store.pipe(selectAllEntities());

  setBooks(books: Book[]) {
    store.update(setEntities(books));
  }
}