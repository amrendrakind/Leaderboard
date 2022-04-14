import apiUrl from './url.js';

export default class postApiClientData {
    static addScore = async (score) => {
      const response = await fetch(apiUrl.SCORE_URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: score,
      });
      const responseData = await response.json();
      return responseData;
    }
}