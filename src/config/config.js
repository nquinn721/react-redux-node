export default class Config {
  static baseUrl = "https://jsonplaceholder.typicode.com/";

  static serviceHeaders = {
    "Content-Type": "application/json"
  };

  static setAuthToken(token) {
    this.serviceHeaders.Authorization = "Token " + token;
  }
}
