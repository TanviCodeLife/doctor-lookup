import { Doctor } from './doctor';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function resultsByCondition(condition) {
  let conditionPromise = Doctor.getByCondition(condition);
  conditionPromise.then((response) => {
    const parsedResponse = JSON.parse(response);
    console.log("parsedResponse ", parsedResponse);
  }, (error) => {
    console.log(error)
  });
}

function resultsByDoctorName(name) {
  let namePromise = Doctor.getByName(name);
  namePromise.then((response) => {
    const doctorList = Doctor.getDoctorsList(response);
    console.log(doctorList);
    showResultsUi();
    displayResults(doctorList);
}, (error) => {
  showResultsUi();
  displayError(error.message);
});
}

function displayResults(doctorsList) {
  if (doctorsList.length === 0){
    const doctorCard = `<div class='doctor-card'>
    <p><i class="fas fa-exclamation-triangle"></i> No results match your search criteria. Please try again.</p>
    </div>`;
    $('#results').append(doctorCard);
  } else {
    doctorsList.forEach((doctor, index) => {
      const doctorCard = `<div class='doctor-card'>
      <h2>${doctor.firstName} ${doctor.lastName}</h2>
      <p>${doctor.bio}</p>
      <ul id='${index}'>
      </ul>
      </div>`;
      $('#results').append(doctorCard);

      doctor.details.forEach((detail) => {
        let phoneNumber = parseNumber(detail.phone);
        let listItem = `<li class='detail-list-item'>
        <h5>${detail.name}</h5>
        ${detail.newPatients}<br/>
        <a href='tel:${phoneNumber}'>${phoneNumber}</a><br/>
        <a href='${detail.website}' target='_blank'>${detail.website}</a><br/>
        ${detail.address.street}<br/>
        ${detail.address.city}, ${detail.address.state} ${detail.address.zip}<br/>
        </li>`;
        $(`#${index}`).append(listItem);
      });
    });
  }
}

function showResultsUi() {
  $('#results').show();
}

function parseNumber(phone) {
  const numbers = phone.split('');
  numbers.splice(3,0,'-');
  numbers.splice(7,0,'-');
  const newPhone = numbers.join('');
  return newPhone;
}


function displayError(message) {
  const doctorCard = `<div class='doctor-card'>
  <p><i class="fas fa-exclamation-triangle"></i> There was an error processing your request: ${message}.</p>
  </div>`;
  $('#results').append(doctorCard);
}

$(document).ready(function() {
  $('#condition-form').submit(function(event) {
    event.preventDefault();
    let condition = $('#condition').val();
    resultsByCondition(condition);
  });

  $('#docName-form').submit(function(event) {
    event.preventDefault();
    let docName = $('#doctor-name').val();
    resultsByDoctorName(docName);
  });

});
