import axios from "axios";

import { API_SERVER_HOST } from "../../Global";

export async function getDashboardList() {
    return axios.get("http://" + API_SERVER_HOST + "/dashboards/all");
}
