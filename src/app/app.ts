// Importamos Component para poder crear el componente
// Importamos signal (característica moderna de Angular para estado reactivo)
import { Component, signal } from '@angular/core';
// Importamos RouterOutlet para que funcione el sistema de rutas
import { RouterOutlet } from '@angular/router';
// Importamos los componentes Header y Footer
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,       // Indicamos que es un componente standalone
  // En standalone debemos importar aquí los componentes y directivas que usemos
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],

  // Plantilla principal de la aplicación
  template: `
    <!-- d-flex y flex-column organizan el contenido en vertical -->
    <!-- min-vh-100 hace que ocupe el 100% de la altura de la pantalla -->
    <div class="d-flex flex-column min-vh-100">

      <!-- Componente Header -->
      <app-header></app-header>

      <!-- Main donde se cargan dinámicamente las rutas -->
      <!-- flex-grow-1 hace que el main ocupe el espacio disponible -->
      <main class="container mt-4 flex-grow-1">

        <!-- Aquí Angular carga el componente según la ruta -->
        <router-outlet></router-outlet>

      </main>

      <app-footer></app-footer>

    </div>
  `,

  // Hoja de estilos propia del componente
  styleUrls: ['./app.css']
})
export class App {

  // Título de la aplicación
  protected readonly title = signal('Pasteleria');

}