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
    doctorList.forEach(function(doctor){
      $("#doctor-list").append(`<li>${doctor.firstName} ${doctor.lastName}</li>`);
    });
    }, (error) => {
      console.log(error)
    });
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
