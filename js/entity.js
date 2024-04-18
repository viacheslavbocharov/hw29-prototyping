function Vehicle(vBrand, vModel, vYear) {
    this.brand = vBrand;
    this.model = vModel;
    this.year = vYear;
}

function Driver(dId, dName, dSurname, dAge, dVehicle) {
    this.id = dId;
    this.name = dName;
    this.surname = dSurname;
    this.age = dAge;
    this.vehicle = dVehicle;
}

Driver.prototype.showDriverDetails = function () {
    const modalTitle = document.getElementById('ModalDeteilsTitle');
    modalTitle.textContent = `Driver Details`;
    const modalBody = document.getElementById('ModalDeteilsBody');
    modalBody.innerHTML = `
    <div>Driver ID: ${this.id}</div>
    <div>Name: ${this.name}</div>
    <div>Surname: ${this.surname}</div>
    <div>Age: ${this.age}</div>
    <div>Own car: ${this.vehicle.brand} ${this.vehicle.model}, year ${this.vehicle.year}</div>`;
};

Vehicle.prototype.showVehicleDetails = function () {
    const modalTitle = document.getElementById('ModalDeteilsTitle');
    modalTitle.textContent = `Car Details`;
    const modalBody = document.getElementById('ModalDeteilsBody');
    modalBody.innerHTML = `
    <div>Brand: ${this.brand}</div>
    <div>Model: ${this.model}</div>
    <div>Year: ${this.year}</div>
    `;
};

