let drivers = []

let testCar = new Vehicle('Lexus', 'RX', '2017');
let testDriver = new Driver('111111', 'Jhon', 'Smith', '35', testCar);
drivers.push(testDriver);


showDrivers()


document.getElementById('submit').addEventListener('click', (event) => {
    if (isFieldsFilledCorrect()) {
        createDriver()
        clearFormFiels()
        showDrivers()
    }
})


document.querySelector('tbody').addEventListener('click', (event) => {
    const id = event.target.closest('.driver_row').getAttribute('data-id');
    const btn = event.target.getAttribute('data-btn');
    const driver = drivers.find(driver => driver.id === id);

    switch (btn) {
        case 'driver-info':
            driver.showDriverDetails();
            break;
        case 'car-info':
            driver.vehicle.showVehicleDetails();
            break;
        default:
            break;
    }
});

