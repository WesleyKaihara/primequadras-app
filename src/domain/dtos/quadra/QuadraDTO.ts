export class QuadraDTO {
  nome: string;
  limitePessoas: null | number;
  empresaId: number;

  constructor(nome: string, limitePessoas: number, empresaId: number) {
    this.nome = nome;
    this.limitePessoas = limitePessoas;
    this.empresaId = empresaId;
  }
}
