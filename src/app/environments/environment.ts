// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAxQKIHSb5OtQbQb6RjKrcdzpf-f_y1pLY',
    authDomain: 'guglecrocks.firebaseapp.com',
    projectId: 'guglecrocks',
    storageBucket: 'guglecrocks.firebasestorage.app',
    messagingSenderId: '903041251542',
    appId: '1:903041251542:web:141949063a77275a1a3177',
    measurementId: 'G-13XGB6K28R',
  },
};

// Initialize Firebase
export const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
