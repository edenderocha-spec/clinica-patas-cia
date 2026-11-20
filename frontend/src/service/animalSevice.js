import { requisicao } from './api';

export const animalService = {
  listar(tutorId = '') {
    const query = tutorId ? `?tutorId=${encodeURIComponent(tutorId)}` : '';
    return requisicao(`/animais${query}`);
  },

  buscaPorId(id) {
    return requisicao(`/animais/${id}`);
  },

  criar(dadosAnimal) {
    return requisicao('/animais', {
      method: 'POST',
      body: dadosAnimal,
    });
  },

  atualizar(id, dadosAnimal) {
    return requisicao(`/animais/${id}`, {
      method: 'PUT',
      body: dadosAnimal,
    });
  },

  excluir(id) {
    return requisicao(`/animais/${id}`, {
      method: 'DELETE',
    });
  },
};
