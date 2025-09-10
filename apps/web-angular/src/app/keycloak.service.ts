import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

interface KeycloakTokenParsed {
  preferred_username?: string;
  email?: string;
  name?: string;
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class KeycloakAuthService {
  private keycloak: Keycloak;

  constructor() {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'Supermind',
      clientId: 'web-angular',
    });
  }

  async init(): Promise<boolean> {
    // keycloak.init() returns Promise<boolean> on modern versions
    const authenticated = await this.keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
    });
    return authenticated;
  }

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout();
  }

  async getToken(): Promise<string> {
    await this.keycloak.updateToken(5);
    return this.keycloak.token!;
  }

  getUsername(): string | undefined {
    const parsed = this.keycloak.tokenParsed as KeycloakTokenParsed | undefined;
    return parsed?.preferred_username;
  }

  isLoggedIn(): boolean {
    return !!this.keycloak.token;
  }
}
