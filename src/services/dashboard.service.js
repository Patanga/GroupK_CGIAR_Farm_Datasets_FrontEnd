import http from "../http-common";

class dashboardService {
  getDashboardData() {
    return http.get("/data/dashboard");
  }
}

export default new dashboardService();