import { defineStore } from "pinia";
import GetSeneorDataListRequestDTO from "../model/dto/getSensorDataListRequestDTO";
import GetSensorDataRequestDTO from "../model/dto/getSensorDataRequestDTO";

import { getSensorData } from "../axios/dashboardListAxios";
import GetSensorDataListResponseDTO from "../model/dto/getSensorDataListResponseDTO";

export const useWidgetDataStore = defineStore("widgetDataStore", {
  state: () => {
    let getSeneorDataListRequestDTO = new GetSeneorDataListRequestDTO([
      new GetSensorDataRequestDTO(1, true),
    ]);
    let getSensorDataListResponseDTO = new GetSensorDataListResponseDTO([]);
    return {
      getSeneorDataListRequestDTO,
      getSensorDataListResponseDTO,
    };
  },
  getters: {},
  actions: {
    getSensorDataList() {
      getSensorData(this.getSeneorDataListRequestDTO).then((response) => {
        this.getSensorDataListResponseDTO =
          GetSensorDataListResponseDTO.fromJson(response.data);
        console.log(this.getSensorDataListResponseDTO);
      });
    },
    setSensorList(sensorList){
      let seneorDataRequestDTOList = []
      for(let sensor of sensorList){
        seneorDataRequestDTOList.push(new GetSensorDataRequestDTO(sensor.sensorId, sensor.graph))
      }
      this.getSeneorDataListRequestDTO = new GetSeneorDataListRequestDTO(seneorDataRequestDTOList);
    }
  },
});
