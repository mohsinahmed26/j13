// var a = new Date(); 
// document.write(a);

// var a = new Date();
// var b = a.getMonth();
// document.write(b);

// var a = "Janvary";
// alert(a);

// var date = new Date();
// switch(date.getDay())
// {
//     case 0: alert("sunday!"); break;
//     case 1: alert("monday!"); break;
//     case 2: alert("tuesday!"); break;
//     case 3: alert("wednesday!"); break;
//     case 4: alert("thusday!"); break;
//     case 5: alert("friday!"); break;
//     case 6: alert("saturday!"); break;
//     default: alert("any other week day");
// }





// var d = new Date();
//  var days = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
//  var day1 =days[d.getDay()] 
//  if(day1 ===["Sunday","Saturday"]){
//      alert("its a fun day")
    
//  }

//  else{
//      alert("its a working day")
//  }

// var a = new Date();
// var b = a.getDate();
// if(b<=15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// var text ="To be or not to be.";
// var segIndex = text.lastIndexOf("be");
// document.write(segIndex)



// var a = new Date()
// var b =a.getTime()
//  var c =(b/60000)
//  document.write(a,"<br/>",b)
//  document.write("<br/>",c)

// var a = new Date();
// var b =a.getHours()
// if(b<=24){
//     alert("its PM")
// }
// else if(b<=12){
//     alert("its AM")
// }

// var a = new Date("31 Dec 2020");

// alert(a)

// var b  = new Date();
// var a = new Date("June 18, 2015");

// var c = ((b-a)/600000/24 )
// var d = Math.round(c)

// document.write (d, " " ,"Days past since 1st Ramadan 2015" )


// var d = new Date ("5 dec 2015")
// var b  = new Date();
// var a = new Date("2015");

// var c = ((b - a)/6000 )
// document.write(d ,  " " ,c)


// var a = new Date()
// var b = new Date(1915)

// document.write(a,"<br/>",b)

// var a = prompt("enter your age")
// var b = new Date()

// var c = b.getFullYear();
// var d = ((c-a) ) 
// alert(d);


// // var a = prompt("enter your name")
// // document.write(a)
// var b = new Date();
//  var c = ["December" ,"January" ,"February" ,"March" ,"April", "May", "June", "July" ,"Auguest", "September" ,"November" ,]
//  var d = b[c.getmonth()]
//  document.write(d)


// function date(){
//    var a = new Date
//    document.write(a)
// }
//  date()

// function a(){
//     var b =prompt("first name")
//     var c =prompt("last name")

//     document.write("wellcome","<br/>",b," ",c)

// }
// a()
// function a()
// {
//     var b =+prompt("first num")
//     var c =+prompt("last num")
//     var d= b + c
//     document.write(d)
// }
// a()

// function uppercase(str){
//     var array1 = str.split(' ');
//     var array = [];
//     for(var x = 0 ; x < array1.length; x++ ){
//         array.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//     }
//    return array.join(' ');
// }
// document.write(uppercase("In general, you should capitalize the first word, all nouns, all verbs (even short ones, like is), all adjectives, and all proper nouns. That means you should lowercase articles, conjunctions, and prepositions—however, some style guides say to capitalize conjunctions and prepositions that are longer than five letters."));


// function longword(str){
//     var a =str.match(/\w[a-z]{0,}/gi);
//     var b = a[0];
//     for(x = 1 ; x < a.length ; x++ ){
//         if( b.length < a[x].length ){
//             b = a[x];
//         }
//     }
//     return b;

// }
// console.log(longword('Web Development Tutorial'))

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('JSResourceS.com', 'o'));


// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

// document.write(leapyear(prompt()))