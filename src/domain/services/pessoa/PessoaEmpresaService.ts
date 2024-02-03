import {PRIME_QUADRAS_API} from '@env';
import axios from 'axios';

export class PessoaEmpresaService {
  async listarPessoaEmpresas(userId: number | undefined) {
    return await axios.get(`${PRIME_QUADRAS_API}/pessoa-empresa/${userId}`);
  }
}

export default new PessoaEmpresaService();
