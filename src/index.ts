// src/index.ts
import readlinesync = require('readline-sync')

class ArraySimples {
  private dados: string[];

  constructor(dados: string[]) {
    this.dados = dados;
  }

  public removeDuplicados(): string[] {
    return Array.from(new Set(this.dados));
  }
}

// Entrada do usuário
const entrada = readlinesync.question('Digite os elementos separados por virgula: ');
const elementos = entrada.split(',').map(item => item.trim());

const array = new ArraySimples(elementos);
const resultado = array.removeDuplicados();

console.log('Array sem duplicados:', resultado);
