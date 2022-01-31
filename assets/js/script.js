// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
// var city = document.getElementById("enter-city").value;

var city = $('#enter-city').val(); 

var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=12aee5ec80ede57ba0b91712e6a6f44d';

var fetchBtn = document.getElementById("fetch-button");
var dayOne = moment().format("MM/DD/YYYY")
var dayTwo = moment().add(1, 'days').format("MM/DD/YYYY")
var dayThree = moment().add(2, 'days').format("MM/DD/YYYY")
var dayFour = moment().add(3, 'days').format("MM/DD/YYYY")
var dayFive = moment().add(4, 'days').format("MM/DD/YYYY")
var daySix = moment().add(5, 'days').format("MM/DD/YYYY")

var displayCity = document.getElementById("city");
var displayTemp = document.getElementById("temp");
var displayWind = document.getElementById("wind");
var displayHumidity = document.getElementById("humid");
var displayDayOneDate = document.getElementById("dayOneDate");
var displayDayTwoDate = document.getElementById("dayTwoDate");
var displayDayThreeDate = document.getElementById("dayThreeDate");
var displayDayFourDate = document.getElementById("dayFourDate");
var displayDayFiveDate = document.getElementById("dayFiveDate");
var displayDaySixDate = document.getElementById("daySixDate");

var temp2 = document.getElementById("temp2");
var temp3 = document.getElementById("temp3");
var temp4 = document.getElementById("temp4");
var temp5 = document.getElementById("temp5");
var temp6 = document.getElementById("temp6");

var wind2 = document.getElementById("wind2");
var wind3 = document.getElementById("wind3");
var wind4 = document.getElementById("wind4");
var wind5 = document.getElementById("wind5");
var wind6 = document.getElementById("wind6");

var humid2 = document.getElementById("humid2");
var humid3 = document.getElementById("humid3");
var humid4 = document.getElementById("humid4");
var humid5 = document.getElementById("humid5");
var humid6 = document.getElementById("humid6");


// $('#fetch-button').on('click', function() {
//   console.log(data);
// });    


fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {  
  console.log(data);


  // SEARCH CITY FUNCTION  
  fetchBtn.onclick  = function() {

  displayCity.innerHTML = (data.city.name);

  displayHumidity.innerHTML = ("Humidty: " + data.list[0].main.humidity);
  displayTemp.innerHTML = ("Temp: " + data.list[0].main.temp);
  displayWind.innerHTML = ("Wind: " + data.list[0].wind.speed);
  $("#icon1").html("<img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  displayDayOneDate.innerHTML = dayOne;
  

  displayDayTwoDate.innerHTML = dayTwo;
  $("#icon2").html("<img src='http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  temp2.innerHTML= ("Temp: " + data.list[2].main.temp);
  wind2.innerHTML= ("Wind: " + data.list[2].wind.speed);
  humid2.innerHTML= ("Humidity: " + data.list[2].main.humidity);



  displayDayThreeDate.innerHTML = dayThree;
  $("#icon3").html("<img src='http://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  temp3.innerHTML= ("Temp: " + data.list[10].main.temp);
  wind3.innerHTML= ("Wind: " + data.list[10].wind.speed);
  humid3.innerHTML= ("Humidity: " + data.list[10].main.humidity);



  displayDayFourDate.innerHTML = dayFour;
  $("#icon4").html("<img src='http://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  temp4.innerHTML= ("Temp: " + data.list[18].main.temp);
  wind4.innerHTML= ("Wind: " + data.list[18].wind.speed);
  humid4.innerHTML= ("Humidity: " + data.list[18].main.humidity);


  displayDayFiveDate.innerHTML = dayFive;
  $("#icon5").html("<img src='http://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  temp5.innerHTML= ("Temp: " + data.list[26].main.temp);
  wind5.innerHTML= ("Wind: " + data.list[26].wind.speed);
  humid5.innerHTML= ("Humidity: " + data.list[26].main.humidity);

  
  displayDaySixDate.innerHTML = daySix;
  $("#icon6").html("<img src='http://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  temp6.innerHTML= ("Temp: " + data.list[34].main.temp);
  wind6.innerHTML= ("Wind: " + data.list[34].wind.speed);
  humid6.innerHTML= ("Humidity: " + data.list[34].main.humidity);

    }

});  
    







    // console.log(dayOne);
// console.log(dayTwo);
      // console.log(data.name);
      //console.log(data.wind);      
   
         // console.log(data.list[0].dt_txt); // DATE
    // console.log(data.list[0].main.humidity);
    // console.log(data.list[0].weather[0].icon);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // TODO: Loop through the response


    
    // TODO: Console log each issue's URL and each user's login






// var repoList = document.querySelector('ul');
// var fetchButton = document.getElementById('fetch-button');

// // `getApi` function is called when the `fetchButton` is clicked
// function getApi() {
//     let url = `api.openweathermap.org/data/2.5/weather?q={city}&appid=12aee5ec80ede57ba0b91712e6a6f44d`;

//   fetch(url)
//     .then(function(response) {
//       return response.json.parse();
//     })
//     .then(function(data) {
//       // Looping over the fetch response and inserting the URL of your repos into a list
//       for (var i = 0; i < data.length; i++) {
//         // Create a list element
//         var listItem = document.createElement('li');

//         // Set the text of the list element to the JSON response's .html_url property
//         listItem.textContent = data[i].html_url;

//         // Append the li element to the id associated with the ul element.
//         repoList.appendChild(listItem);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);