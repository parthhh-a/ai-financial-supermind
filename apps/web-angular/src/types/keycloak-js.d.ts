declare module 'keycloak-js' {
  export interface KeycloakInitOptions {
    onLoad?: 'login-required' | 'check-sso';
    checkLoginIframe?: boolean;
  }

  export interface KeycloakTokenParsed {
    preferred_username?: string;
    email?: string;
    name?: string;
    [key: string]: any;
  }

  export default class Keycloak {
    token?: string;
    tokenParsed?: KeycloakTokenParsed;

    constructor(config: {
      url: string;
      realm: string;
      clientId: string;
    });

    init(options: KeycloakInitOptions): Promise<boolean>;
    login(): void;
    logout(): void;
    updateToken(minValidity: number): Promise<boolean>;
  }
}
