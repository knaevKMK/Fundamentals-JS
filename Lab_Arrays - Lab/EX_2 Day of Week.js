function solve (number){
    number-=1;
    var days= ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',
    'Sunday'];
   let  result= number>=0 && number < days.length ? days[number] :'Invalid day!';
    console.log(result)
  }
 

  solve (2);