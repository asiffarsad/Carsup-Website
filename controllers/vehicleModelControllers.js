const Vehicles = require("../models/vehicle");
const Vehicle = {};

Vehicle.create = async (req) => {
    try {
        const newVehicle = await Vehicles.create({
            year: req.body.year,
            make: req.body.make,
            model: req.body.model,
            bodyStyle: req.body.bodyStyle,
            odometer: req.body.odometer,
            fuelType: req.body.fuelType,
            vin: req.body.vin,
            transmission: req.body.transmission,
            drivetrain: req.body.drivetrain,
            exteriorColor: req.body.exteriorColor,
            interiorColor: req.body.interiorColor,
            engine: req.body.engine,
            engineSize: req.body.engineSize,
            description: req.body.description,
            feature: req.body.feature,
        });

        newVehicle.save();
        
        return { result: true, newVehicle };
    } catch (error) {
        return { result: false, error };
    }
};

Vehicle.getAll = async () => {
    try {
        const vehicles = await Vehicles.find({});
        return { result: true, vehicles };
    } catch (error) {
        return { result: false, error };
    }
};

Vehicle.getOne = async (id) => {
    try {
        const vehicle = await Vehicles.findById(id);
        return { result: true, vehicle };
    } catch (error) {
        return { result: false, error };
    }
};

Vehicle.getMake = async (make) => {
    try {
        const vehicle = await Vehicles.find({make: make});
        return { result: true, vehicle };
    } catch (error) {
        return { result: false, error };
    }
};

Vehicle.update = async (req) => {
    try {
        const vehicle = await Vehicles.findById(req.params.id);
        vehicle.year = req.body.year;
        vehicle.make = req.body.make;
        vehicle.model = req.body.model;
        vehicle.bodyStyle = req.body.bodyStyle;
        vehicle.odometer = req.body.odometer;
        vehicle.fuelType = req.body.fuelType;
        vehicle.vin = req.body.vin;
        vehicle.transmission = req.body.transmission;
        vehicle.drivetrain = req.body.drivetrain;
        vehicle.exteriorColor = req.body.exteriorColor;
        vehicle.interiorColor = req.body.interiorColor;
        vehicle.engine = req.body.engine;
        vehicle.engineSize = req.body.engineSize;
        vehicle.description = req.body.description;
        vehicle.feature = req.body.feature;
        vehicle.save();
        return { result: true, vehicle };
    } catch (error) {
        result = false;
        return { result: false, error };
    }
};

Vehicle.delete = async (id) => {
    try {
        const vehicle = await Vehicles.findByIdAndDelete(id);
        return { result: true, vehicle };
    } catch (error) {
        result = false;
        return { result: false, error };
    }
};


module.exports = Vehicle;

