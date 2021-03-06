import { Doctor } from './doctor';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function resultsByCondition(condition) {
  let conditionPromise = Doctor.getByCondition(condition);
  conditionPromise.then((response) => {
    const doctorList = Doctor.getDoctorsList(response);
    showResultsUi();
    checkAndDisplayResults(doctorList);
  }, (error) => {
    showResultsUi();
    displayError(error.message);
  });
}

function resultsByDoctorName(name) {
  let namePromise = Doctor.getByName(name);
  namePromise.then((response) => {
    const doctorList = Doctor.getDoctorsList(response);
    console.log(doctorList);
    showResultsUi();
    checkAndDisplayResults(doctorList);
}, (error) => {
  showResultsUi();
  displayError(error.message);
});
}


function parseNumber(phone) {
  const numbers = phone.split('');
  numbers.splice(3,0,'-');
  numbers.splice(7,0,'-');
  const newPhone = numbers.join('');
  return newPhone;
}

function displayNoResults(){
  const doctorCard = `<div class='doctor-card'>
  <p><i class="fas fa-exclamation-triangle"></i> No results match your search criteria. Please try again.</p>
  </div>`;
  $('#results').append(doctorCard);
}

function displayDoctor(doctor, index){
  const doctorCard = `<div class='doctor-card'>
  <h2>${index + 1}.Doctor Name: ${doctor.firstName} ${doctor.lastName}</h2>
  <p>Bio: ${doctor.bio}</p>
  <ul id='${index}'>
  </ul>
  </div>`;
  $('#results').append(doctorCard);
}

function displayPracticeDetails(doctor, index){
  doctor.details.forEach((detail) => {
    let phoneNumber = parseNumber(detail.phone);
    let listItem = `<li class='detail-list-item'>
    <h5>Name: ${detail.name}</h5>
    Accepting New Patients: ${detail.newPatients}<br/>
    Phone: ${phoneNumber}<br/>
    Address: ${detail.address.street}<br/>
    ${detail.address.city}, ${detail.address.state} ${detail.address.zip}<br/>
    </li>`;
    $(`#${index}`).append(listItem);
  });
}


function checkAndDisplayResults(doctorsList) {
  if (doctorsList.length === 0)
    return displayNoResults();
  doctorsList.forEach((doctor, index) => {
    displayDoctor(doctor, index);
    displayPracticeDetails(doctor, index);
    });
  }

  function displayError(message) {
    const doctorCard = `<div class='doctor-card'>
    <p></i> There was an error processing your request: ${message}.</p>
    </div>`;
    $('#results').append(doctorCard);
  }


function showResultsUi() {
  $('#results').show();
}

function showByDoctorForm() {
  $('.search-container').hide();
  $('#docName-form').show();
}

function showByConditionForm() {
  $('.search-container').hide();
  $('#condition-form').show();
}

function showHome() {
  $('#docName-form').hide();
  $('#condition-form').hide();
  $('#results').hide();
  $('.search-container').show();
}


$(document).ready(function() {

  $('#search-by-docName').click(function() {
    showByDoctorForm();
  });

  $('#search-by-condition').click(function() {
    showByConditionForm();
  });


  $('#condition-form').submit(function(event) {
    event.preventDefault();
    $('.doctor-card').empty();
    let condition = $('#condition').val();
    resultsByCondition(condition);
  });

  $('#home').click(function() {
    $('.doctor-card').empty();
    showHome();
  });

  $('#docName-form').submit(function(event) {
    event.preventDefault();
    $('.doctor-card').empty();
    let docName = $('#doctor-name').val();
    resultsByDoctorName(docName);
  });

  $('#homeName').click(function() {
    $('.doctor-card').empty();
    showHome();
  });

});
