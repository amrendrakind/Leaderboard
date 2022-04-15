import apiUrl from './url.js';

export default class getApiClientData {
  static getScores = async () => {
    const response = await fetch(apiUrl.SCORE_URI, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const responseData = await response.json();
    return responseData;
  }
}