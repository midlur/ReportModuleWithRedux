import { GET_DATA , POST_DATA , UPDATE_DATA , DELETE_DATA } from './types';


export function getData(date) {
    let newDate = formatDate(date);
    console.log("ina action")
    return function(dispatch){
            fetch("http://127.0.0.1:8080/report/reportValues/" + newDate)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch({
              
                    type : GET_DATA,
                    payload : response
                })
            }
            
            );
            
        
        
    }
}

export function postData(code,qty){
    return function(dispatch){
        fetch('http://127.0.0.1:8080/report/items/add', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              itemCode: code,
              totalQty: qty,
            }),
          })
          dispatch({
            type : POST_DATA,
            payload : {
                code : code,
                qty : qty
            }
          })

    }
}

export function updateData(code,qty){
    return function(dispatch){
        fetch('http://127.0.0.1:8080/report/items/update', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              itemCode: code,
              totalQty: qty,
            }),
          })
          dispatch({
            type : UPDATE_DATA,
            payload : {
                code : code,
                qty : qty
            }
          })

    }
}

export function deleteData(code) {
    return function(dispatch){
        fetch("http://127.0.0.1:8080/report/items/delete/" + code)
      .then(response => dispatch({
          type : DELETE_DATA,
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
