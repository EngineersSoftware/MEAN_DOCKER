import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center; padding: 20px;">
    <h1>Productos de la Tienda Docker MEAN</h1>
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
    <p *ngIf="products.length === 0">No hay productos disponibles</p>
  </div>
  `
})
export class AppComponent implements OnInit {

  products: any[] = [];

  apiUrl = 'http://backend:3000/api/products';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data =>
      this.products = data,
    error => console.error('Error al obtener productos:', error)
    );
  }
}
