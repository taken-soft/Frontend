export default class GetSeneorDataListRequestDTO {
  sensorDataList;
  constructor(sensorDataList) {
    this.sensorDataList = sensorDataList;
  }

  toJson = () => {
    return {
      "sensorDataList" : this.sensorDataList.map(e => e.toJson())
    }
  }
}