import { GET_DATA , POST_DATE } from './types';

export function getData(date) {
    let newDate = formatDate(date);
    return function(dispatch){
        fetch("http://127.0.0.1:8080/report/reportValues/" + newDate)
        .then(res => res.json())
      .then(response => dispatch({
          type : GET_DATA,
          payload : response
      }));
    }
}

function formatDate(date) {
    console.log(date);
    let d = date,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
