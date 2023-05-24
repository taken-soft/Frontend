import axios from "axios";

import { API_SERVER_HOST } from "../../Global";

export async function getDashboardList() {
    return axios.get("http://" + API_SERVER_HOST + "/dashboards/all");
}

export async function createDashboard(createDashboardRequestDTO) {
  return axios.post("http://" + API_SERVER_HOST + "/dashboards/new", createDashboardRequestDTO.toJson());
}

export async function getDashboard(dashboardId) {
  return axios.get("http://" + API_SERVER_HOST + `/dashboards/${dashboardId}`);
}

export async function saveDashboard(saveDashboardRequestDTO) {
  console.log(saveDashboardRequestDTO);
  return axios.post("http://" + API_SERVER_HOST + `/dashboards/save`, saveDashboardRequestDTO.toJson());
}

export async function deleteDashboard(dashboardId) {
  return axios.delete("http://" + API_SERVER_HOST + `/dashboards/${dashboardId}`);
}

export async function getSensorData(getSeneorDataListRequestDTO) {
  return axios.post("http://" + API_SERVER_HOST + `/sensor/data`, getSeneorDataListRequestDTO.toJson());
}