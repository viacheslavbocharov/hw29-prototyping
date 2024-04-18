function showDrivers() {
  const parent = document.querySelector('.tbody');
  clearElement(parent);

  drivers.forEach(driver => {
      const driverIndex = drivers.findIndex(d => d.id === driver.id);
      const element = document.createElement('tr');
      element.setAttribute('data-id', driver.id)
      element.classList.add('driver_row');
      element.innerHTML = `
      <th scope="row">${driverIndex + 1}</th>
      <td>${driver.id}</td>
      <td>${driver.name}</td>
      <td>${driver.surname}</td>
      <td>
          <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#DetailsModal" data-btn="driver-info">Driver Info</button>
          <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#DetailsModal" data-btn="car-info">Car Info</button>
      </td>
      `
      parent.append(element);
  });
};




function createDriver() {
  const form = document.forms.form;
  let newVehicle = new Vehicle(form.brand.value, form.model.value, form.year.value)

  let newDriver = new Driver(generateId(), form.name.value, form.surname.value, form.age.value, newVehicle)
  // let newDriver = new Driver();
  // newDriver.id = generateId();
  // newDriver.name = form.name.value;
  // newDriver.surname = form.surname.value;
  // newDriver.age = form.age.value;
  // newDriver.vehicle = newVehicle;

  drivers.push(newDriver);

  const closeButton = document.getElementById('form-close');
  closeButton.click();
}

function clearFormFiels() {
  const inputFields = document.forms.form.querySelectorAll('input[type="text"]');
  inputFields.forEach(element => {
      element.value = ''
  });
}




function getDriverById(id) {
  return drivers.find(driver => driver.id === id);
}




function generateId() {
  const chars = '0123456789';
  let newId = '';

  for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newId += chars[randomIndex];
  }

  if (getDriverById(newId) === undefined) {
      return newId;
  } else {
      return generateId()
  }
};




function clearElement(element) {
  element.innerHTML = '';
}





function isFieldsFilledCorrect() {
  const inputFields = document.forms.form.querySelectorAll('input[type="text"]');

  let checks = [];
  inputFields.forEach(input => {

      let result;
      let pattern;
      let errorText;

      switch (input.name) {
          case 'name':
              pattern = /^[A-Z][a-z]{1,}$/;
              result = pattern.test(input.value);
              errorText = 'Wrong format'
              break;
          case 'surname':
              pattern = /^[A-Z][a-z]{1,}$/;
              result = pattern.test(input.value);
              errorText = 'Wrong format'
              break;

          case 'age':
              pattern = /^(1[8-9]|[2-9][0-9]|1[0-0][0-9]|110)$/;
              result = pattern.test(input.value);
              errorText = 'Only digits. You must be at least 18'
              break;
          case 'brand':
              pattern = /^[A-Z][a-z]{1,}$/;
              result = pattern.test(input.value);
              errorText = 'Wrong format'
              break;
          case 'model':
              pattern = /^[\w\d\s-]{1,20}$/;
              result = pattern.test(input.value);
              errorText = 'Wrong format.'
              break;
          case 'year':
              pattern = /^(19[5-9]\d|20[0-4]\d|2050)$/;
              result = pattern.test(input.value);
              errorText = 'Only digits.'
              break;

          default:
              break;
      }

      checks.push(result);
      
      if (!result) {

          if (input.nextElementSibling && input.nextElementSibling.className === 'error-message') {
              input.nextElementSibling.remove();
          }
          // Если поле не заполнено, добавляем div с сообщением об ошибке
          if (!input.nextElementSibling || input.nextElementSibling.className !== 'error-message') {
              const errorMessage = document.createElement('div');
              errorMessage.className = 'error-message';
              errorMessage.textContent = input.value === '' ? `This is a required field!` : `${errorText}`;
              input.parentNode.insertBefore(errorMessage, input.nextElementSibling);
          }
      } else {
          // Если поле заполнено, удаляем сообщение об ошибке (если оно было)
          if (input.nextElementSibling && input.nextElementSibling.className === 'error-message') {
              input.nextElementSibling.remove();
          }
      }
  })

  if (checks.includes(false)) {
      return false;
  } else {
      return true;
  }
};