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

$(document).ready(function() {
  $('#submitCondition').click(function(event) {
    event.preventDefault();
    let condition = $('#condition').val();
    resultsByCondition(condition);
  });

});
