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

static resultsByDoctorName(name) {
  let namePromise = Doctor.getByName(name);
  namePromise.then((response) => {
    const doctorList = Doctor.getDoctorList(response);
    showResultsUi();
    displayResults(doctorList);
  });
}, (error) => {
  showResultsUi();
  displayError(error.message);
});
}

function displayResults(doctors) {
  if (doctors.length === 0){
    const doctorCard = `<div class='doctor-card'>
    <p><i class="fas fa-exclamation-triangle"></i> No results match your search criteria. Please try again.</p>
    </div>`;
    $('#results').append(doctorCard);
  } else {
    doctors.forEach((doctor, index) => {
      const doctorCard = `<div class='doctor-card'>
      <h2>${doctor.firstName} ${doctor.lastName}</h2>
      <ul id='${index}'>
      </ul>
      </div>`;
      $('#results').append(doctorCard);

      doctor.details.forEach((detail) => {
        let phoneNumber = formatNumber(detail.phone);
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

function displayError(message) {
  const doctorCard = `<div class='doctor-card'>
  <p><i class="fas fa-exclamation-triangle"></i> There was an error processing your request: ${message}.</p>
  </div>`;
  $('.results-box').append(doctorCard);
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
