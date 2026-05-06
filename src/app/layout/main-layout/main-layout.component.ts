// src/app/layout/main-layout/main-layout.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="layout">
      <app-sidebar />
      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .layout { display: flex; }
    .main-content {
      margin-left: 240px;
      padding: 32px;
      width: 100%;
      min-height: 100vh;
      background: #f8f9fc;
    }
  `]
})
export class MainLayoutComponent {}