import axios from 'axios';

export const actionTypes = {
   COORRECT_GUESS: 'CORRECT_GUESS'
}

export function correctGuess() {
  return { type: actionTypes.COORRECT_GUESS }
}

export const getSecretWord = () => {
  // TODO: write actual action in Redux / context sections
  return axios.get('http://localhost:3030')
    .then(response => response.data);
}
