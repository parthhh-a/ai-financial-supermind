import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { KeycloakAuthService } from './keycloak.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>AI Financial Supermind</h1>

    <div *ngIf="auth.isLoggedIn()">
      <p>Hello, {{ auth.getUsername() }}</p>
      <button (click)="callMe()">Call /me API</button>
      <pre>{{ me | json }}</pre>
      <button (click)="auth.logout()">Logout</button>
    </div>

    <div *ngIf="!auth.isLoggedIn()">
      <p>Not logged in</p>
      <button (click)="auth.login()">Login</button>
    </div>
  `,
})
export class AppComponent {
  me: any;

  constructor(public auth: KeycloakAuthService, private http: HttpClient) {}

  async callMe() {
    const token = await this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get('http://localhost:8081/me', { headers })
      .subscribe(data => (this.me = data));
  }
}
