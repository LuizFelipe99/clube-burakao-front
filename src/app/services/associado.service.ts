// src/app/services/associado.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Associado {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  ativo: boolean;
  created_at: string;
}

@Injectable({ providedIn: 'root' })
export class AssociadoService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Associado[]>(`${this.apiUrl}/associados`);
  }

  buscar(id: number) {
    return this.http.get<Associado>(`${this.apiUrl}/associados/${id}`);
  }

  criar(data: Partial<Associado>) {
    return this.http.post<Associado>(`${this.apiUrl}/associados`, data);
  }

  atualizar(id: number, data: Partial<Associado>) {
    return this.http.put<Associado>(`${this.apiUrl}/associados/${id}`, data);
  }
}