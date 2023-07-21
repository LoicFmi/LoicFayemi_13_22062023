export class mainDataModel {
  constructor(status, message, body) {
    this.status = status;
    this.message = message;
    this.body = body;
  }

  static fromApiData(apiData) {
    return new mainDataModel(apiData.status, apiData.message, apiData.body);
  }
}
