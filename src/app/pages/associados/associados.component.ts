// src/app/pages/associados/associados.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AssociadoService, Associado } from '../../services/associado.service';

@Component({
  selector: 'app-associados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './associados.component.html',
  styleUrl: './associados.component.css'
})
export class AssociadosComponent implements OnInit {

  associados: Associado[] = [];
  filtrados: Associado[] = [];
  busca = '';
  carregando = true;

  constructor(
    private service: AssociadoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.listar().subscribe({
      next: (data) => {
        this.associados = data;
        this.filtrados = data;
        this.carregando = false;
      },
      error: () => this.carregando = false
    });
  }

  filtrar() {
    const termo = this.busca.toLowerCase();
    this.filtrados = this.associados.filter(a =>
      a.nome.toLowerCase().includes(termo) ||
      a.email.toLowerCase().includes(termo) ||
      a.telefone.includes(termo)
    );
  }

  novo() {
    this.router.navigate(['/associados/novo']);
  }

  editar(id: number) {
    this.router.navigate(['/associados/editar', id]);
  }

  formatarTelefone(tel: string) {
    return tel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  formatarData(data: string) {
    return new Date(data).toLocaleDateString('pt-BR');
  }
}