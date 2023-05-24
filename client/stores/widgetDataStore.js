import { defineStore } from "pinia";
import GetSeneorDataListRequestDTO from "../model/dto/getSensorDataListRequestDTO";
import GetSensorDataRequestDTO from "../model/dto/getSensorDataRequestDTO";

import { getSensorData } from "../axios/dashboardListAxios";
import GetSensorDataListResponseDTO from "../model/dto/getSensorDataListResponseDTO";

export const useWidgetDataStore = defineStore("widgetDataStore", {
  state: () => {
    let getSeneorDataListRequestDTO = new GetSeneorDataListRequestDTO([
      new GetSensorDataRequestDTO(1, false),
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
      });
    },
  },
});
