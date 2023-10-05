const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index');

class AirportService extends CrudService {
    constructor() {
        const airportRespository = new AirportRepository();
        super(airportRespository);
    }
}

module.exports = AirportService;