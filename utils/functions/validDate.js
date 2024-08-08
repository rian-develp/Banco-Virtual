export function validDate(birthdate) {

    let booleanValid = false;
    let varAux = 99; 
    let day = parseInt(birthdate.split('/')[0]);
    let month = parseInt(birthdate.split('/')[1]);
    let year = parseInt(birthdate.split('/')[2]);
    month = month - 1;
    
    var date = new Date(Date.UTC(year, month, 1, 4, 0, 0));
    var days = [];
  
    while (date.getMonth() === month) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
  
    days.find((element) => {
        if(day === element){
          varAux = element;
        }
    });
  
    if(day === varAux){
      booleanValid = true;
    }
    return booleanValid;
  }  