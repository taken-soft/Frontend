export default class GetSensorDataRequestDTO {
  sensorId;
  graph;

  constructor(sensorId, graph) {
    this.sensorId = sensorId;
    this.graph = graph;
  }

  toJson = () => {
    return {
      "sensorId": this.sensorId,
      "graph": this.graph,
    };
  };
}
