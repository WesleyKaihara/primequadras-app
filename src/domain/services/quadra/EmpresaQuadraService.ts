import {PRIME_QUADRAS_API} from '@env';
import axios from 'axios';
import {QuadraDTO} from 'src/domain/dtos';

export class EmpresaQuadraService {
  async adicionarNovaQuadra(quadra: QuadraDTO) {
    return await axios.post(`${PRIME_QUADRAS_API}/quadras`, {quadra});
  }
}

export default new EmpresaQuadraService();
