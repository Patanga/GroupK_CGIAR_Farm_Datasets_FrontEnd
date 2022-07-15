
exports.getMapData = (data) => {
    const mapData = data.map(doc => {
        return {
            id_unique: doc.id_unique,
            id_country: doc.id_country,
            region: doc.region,
            id_proj: doc.id_proj,
            id_form: doc.id_form,
            gps_lat: parseFloat(doc.gps_lat),
            gps_lon: parseFloat(doc.gps_lon),
        }
    });
    return mapData;
}