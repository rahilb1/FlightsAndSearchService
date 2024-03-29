const { CityService } = require("../services/index");
const { SuccessCodes } = require('../utils/error-codes');
const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        });  
    }
}

const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: "City deleted successfully",
            err: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            err: error
        }); 
    }
}

const get = async (req,res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: "City fetched successfully",
            err: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            err: error
        }); 
    }
}

const getAll = async (req,res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(SuccessCodes.OK).json({
            data: cities,
            success: true,
            message: "Cities fetched successfully",
            err: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the cities",
            err: error
        });
    }
}

const update = async (req,res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: "City fetched successfully",
            err: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            err: error
        }); 
    }
}

module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
}