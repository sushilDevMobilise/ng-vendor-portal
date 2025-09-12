import { bootstrapApplication } from '@angular/platform-browser';
import '../src/assets/js/bootstrap.min.js';
import '../src/assets/js/script.js';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
console.clear();