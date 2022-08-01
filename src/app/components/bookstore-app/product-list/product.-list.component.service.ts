import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Book";
import { Observable } from "rxjs";

@Injectable()

export class BooksService {
  
  mocBooks: Array<Book> = [
    {
      id: 1,
      name: 'Massacre da serra elétrica',
      category: 'Terror',
      price: 33.8,
      quantity: 7,
      img: ''
    }
  ]
  private url = 'https://localhost:44382/api/bookstore'
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getBook(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.url);
  }
}
