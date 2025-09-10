import 'zone.js'; // ✅ required for Angular’s default change detection
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { KeycloakAuthService } from './app/keycloak.service';

async function main() {
  console.log('[Main] Starting Angular bootstrap…');
  const authService = new KeycloakAuthService();

  try {
    console.log('[Main] Calling Keycloak init…');
    const authenticated = await authService.init();
    console.log('[Main] Authenticated?', authenticated);

    await bootstrapApplication(AppComponent, {
      providers: [
        importProvidersFrom(HttpClientModule),
        { provide: KeycloakAuthService, useValue: authService },
      ],
    });
  } catch (err) {
    console.error('[Main] Keycloak init failed', err);
  }
}

main();
