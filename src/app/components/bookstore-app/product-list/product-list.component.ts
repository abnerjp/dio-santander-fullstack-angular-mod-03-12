import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BooksService } from './product.-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: Array<Book> = [];

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.booksService.getBook().subscribe({
      next: response => this.books = response
    });
  }

}
