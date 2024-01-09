const showHomePage = (req, res) => {
    res.render("general/homepage", {
        headerTitle: "Homepage",
        pageType: "general",
        vehicles: [
            {
                make: 'Toyota',
                model: 'Corolla',
                year: '2020'
            },
            {
                make: 'Honda',
                model: 'Civic',
                year: '2019'
            },
            {
                make: 'Ford',
                model: 'Mustang',
                year: '2018'
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
        
    });
};

module.exports = {
    showHomePage,
};
