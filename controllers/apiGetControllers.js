const vehicleController = require('./vehicleModelControllers');


const getAllVehicles = async (req, res) => {
    try {
        // let allVehicles = await vehicleController.getAll();
        let allVehicles =  [
            {
                make: 'Toyota',
                model: 'Corolla',
                year: '2020'
            },
            {
                make: 'Toyota',
                model: 'Corolla',
                year: '2019'
            },
            {
                make: 'Toyota',
                model: 'Camry',
                year: '2020'
            },
            {
                make: 'Honda',
                model: 'Civic',
                year: '2019'
            },
            {
                make: 'Honda',
                model: 'Accord',
                year: '2018'
            },
            {
                make: 'Ford',
                model: 'Mustang',
                year: '2018'
            },
            {
                make: 'Ford',
                model: 'Mustang',
                year: '2019'
            },
            {
                make: 'Chevrolet',
                model: 'Camaro',
                year: '2021'
            },
            {
                make: 'Dodge',
                model: 'Charger',
                year: '2022'
            }
        ]
        res.send(allVehicles);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllVehicles,
};
