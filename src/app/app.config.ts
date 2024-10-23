import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes), 
      provideFirebaseApp(() => initializeApp({"projectId":"apitestewk","appId":"1:843743757840:web:d6e8f6c4a3dc9ab19c6c95","databaseURL":"https://apitestewk-default-rtdb.firebaseio.com","storageBucket":"apitestewk.appspot.com","apiKey":"AIzaSyBeTXBwHkG8H-S01vcMLJ8fSelgi1mk32o","authDomain":"apitestewk.firebaseapp.com","messagingSenderId":"843743757840","measurementId":"G-CSYWFF6W3R"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideAnimationsAsync(),
      provideToastr()]
};
