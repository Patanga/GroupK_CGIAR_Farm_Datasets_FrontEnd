import http from "../http-common";

class FullDataService {
    getByDataType(dataType) {
        return http.get(`/data/${dataType}`);
    }

    get(formID, dataType) {
        return http.get(`/data/${dataType}?formid=${formID}`);
    }

    getAllHFIASData() {
        return http.get("/data/food_security/hfias");
    }

    getHFIASDataByCondition(pro) {
        return http.get(`/data/food_security/hfias?projectid=${pro}`);
    }


}

export default new FullDataService();