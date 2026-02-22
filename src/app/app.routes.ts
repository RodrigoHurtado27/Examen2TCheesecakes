// Importamos el tipo Routes para definir el array de rutas
import { Routes } from '@angular/router';

// Importamos los componentes que vamos a asociar a cada ruta
import { Main } from './main/main';
import { Clasica } from './clasica/clasica';
import { Lotus } from './lotus/lotus';
import { Pistacho } from './pistacho/pistacho';

// Importamos provideRouter porque estamos usando Angular en modo standalone
import { provideRouter } from '@angular/router';

// Definimos las rutas de la aplicación
export const routes: Routes = [

  // Ruta principal
  { path: '', component: Main },
  // Ruta de las cheesecakes
  { path: 'clasica', component: Clasica },
  { path: 'lotus', component: Lotus },
  { path: 'pistacho', component: Pistacho },
];

// Configuramos el router con las rutas definidas
// Esto se importa en main.ts al arrancar la aplicación
export const routerProviders = provideRouter(routes);