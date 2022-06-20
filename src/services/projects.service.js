import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.get("/project-data");
    }

    get(id) {
        return http.get(`/tutorials/${id}`);
    }

    create(data) {
        return http.post("/tutorials", data);
    }

    update(id, data) {
        return http.put(`/tutorials/${id}`, data);
    }

    findByProID(proid) {
        return http.get(`/project-data?projectid=${proid}`);
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {}
}

export default new TutorialDataService();