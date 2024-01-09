const navbarMobileButton = document.querySelector('.navbar-mobile-menu-button');
const navbarMobileMenuLinks = document.querySelector('.navbar-mobile-links');
navbarMobileButton.addEventListener('click', () => {
    navbarMobileButton.classList.toggle('active');
    navbarMobileMenuLinks.classList.toggle('active');
});

let makeSelect = document.getElementById('make');
if (makeSelect) {
    let modelSelect = document.getElementById('model');
    let yearSelect = document.getElementById('year');

    let allVehicles;

    fetch('/api/vehicles')
    .then(response => response.json())
    .then(data => {
        allVehicles = data;
    });

    function addOption(selectElement, optionText, optionValue) {
        let option = document.createElement('option');
        option.text = optionText;
        option.value = optionValue;
        selectElement.add(option);
    }

    function updateOption(selectElement, optionText, optionValue) {
        let option = document.getElementByValue(optionValue);
        option.text = optionText;
        option.value = optionValue;
        selectElement.add(option);
    }

    modelSelect.addEventListener('change', function() {
        yearSelect.innerHTML = ''; // Clear existing options

        allVehicles.forEach(function(vehicle) {
            if (vehicle.make === makeSelect.value && vehicle.model === modelSelect.value) {
                addOption(yearSelect, vehicle.year, vehicle.year);
            }
        });

        // Trigger the 'change' event manually if there's only one year
        if (yearSelect.length === 1) {
            yearSelect.dispatchEvent(new Event('change'));
        }
    });

    makeSelect.addEventListener('change', function() {
        modelSelect.innerHTML = ''; // Clear existing options
        yearSelect.innerHTML = ''; // Clear existing options
        let allSimilarModels = [];

        allVehicles.forEach(function(vehicle) {
            if (vehicle.make === makeSelect.value) {
                if (!allSimilarModels.includes(vehicle.model)) {
                    addOption(modelSelect, vehicle.model, vehicle.model);
                    addOption(yearSelect, vehicle.year, vehicle.year);
                    allSimilarModels.push(vehicle.model);
                }else{
                    updateOption(modelSelect, vehicle.model, vehicle.model);
                }
            }
        });

        // Trigger the 'change' event manually if there's only one model
        if (modelSelect.length === 2) {
            modelSelect.selectedIndex = 0;
            modelSelect.dispatchEvent(new Event('change'));
        }
    });
}
