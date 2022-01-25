

const submit = document.querySelector('#click');

const counter = document.querySelector('.counter');


submit.addEventListener('click',function(){
    

    let date = document.querySelector('input[type="date"]').value;

    
    if(date == '' ){
        counter.innerHTML= `<p style="color:red;"> Please Fill all feild </p>`;   
    }else{
        


    let currnet_date = new Date();
    let bdate = new Date(date);

        let time_diff = Math.floor(Math.abs(currnet_date.getTime() - bdate.getTime()));

        let total_sec = Math.floor(time_diff/1000);
        let total_min = Math.floor(total_sec/60);
        let total_hours = Math.floor(total_min/60);
        let total_days = Math.floor(total_hours/24);
        let total_months = Math.floor(total_days/30);
        let total_years = Math.floor(total_months/12);
    
        let months = total_months - (total_years*12); 
        let days = total_days - (total_years*12*30) - (months*30);
       
         
        counter.innerHTML=`${total_years} Years ${months} months ${days} Days`;


    };





});