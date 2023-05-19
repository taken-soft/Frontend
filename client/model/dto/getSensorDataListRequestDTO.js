export default class GetSeneorDataListRequestDTO {
  sensorDataList;
  constructor(sensorDataList) {
    this.sensorDataList = sensorDataList;
  }

  toJson = () => {
    return {
      "sensorDataList" : sensorDataList.map(e => e.toJson())
    }
  }
}