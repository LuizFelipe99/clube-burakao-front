// src/app/layout/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  menuItems = [
    { label: 'Dashboard',   icon: '⊞',  route: '/dashboard' },
    // { label: 'Usuarios',    icon: '👥', route: '/usuarios' },
    { label: 'Associados', icon: '🪪', route: '/associados' },
    { label: 'Financeiro',  icon: '💰', route: '/financeiro' },
    { label: 'Relatórios',  icon: '📊', route: '/relatorios' },
    // sidebar.component.ts - adicione no menuItems:
  ];

  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    });
  }
}