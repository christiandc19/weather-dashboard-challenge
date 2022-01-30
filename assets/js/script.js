// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var city = document.getElementById("enter-city").value;
var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=12aee5ec80ede57ba0b91712e6a6f44d';

//api.openweathermap.org/data/2.5/forecast?q= + city + &appid=12aee5ec80ede57ba0b91712e6a6f44d;

// 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=12aee5ec80ede57ba0b91712e6a6f44d';


var fetchBtn = document.getElementById("fetch-button");
var dayOne = moment().format("MM/DD/YYYY")
var dayTwo = moment().add(1, 'days').format("MM/DD/YYYY")
var dayThree = moment().add(2, 'days').format("MM/DD/YYYY")
var dayFour = moment().add(3, 'days').format("MM/DD/YYYY")
var dayFive = moment().add(4, 'days').format("MM/DD/YYYY")
var daySix = moment().add(5, 'days').format("MM/DD/YYYY")




// console.log(dayOne);
console.log(dayTwo);



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



fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })


  .then(function (data) {     
    
    console.log(data);
    // console.log(data.list[0].dt_txt); // DATE
    // console.log(data.list[0].main.humidity);
    // console.log(data.list[0].weather[0].icon);

    $("austin").on("click", function() {
      console.log(data)
    })




  fetchBtn.onclick  = function() {
  displayCity.innerHTML = city;

  displayHumidity.innerHTML = ("Humidty: " + data.list[0].main.humidity);
  displayTemp.innerHTML = ("Temp: " + data.list[0].main.temp);
  displayWind.innerHTML = ("Wind: " + data.list[0].wind.speed);

  displayDayOneDate.innerHTML = dayOne;
  displayDayTwoDate.innerHTML = dayTwo;
  displayDayThreeDate.innerHTML = dayThree;
  displayDayFourDate.innerHTML = dayFour;
  displayDayFiveDate.innerHTML = dayFive;
  displayDaySixDate.innerHTML = daySix;
  $("#icon").html("<img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

    }
});  
    



    
    
      // console.log(data.name);
      //console.log(data.wind);      
   
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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