
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

var uvIndex = document.getElementById("uvIndex");
var uvIndex2 = document.getElementById("uvIndex2");
var uvIndex3 = document.getElementById("uvIndex3");
var uvIndex4 = document.getElementById("uvIndex4");
var uvIndex5 = document.getElementById("uvIndex5");
var uvIndex6 = document.getElementById("uvIndex6");
var cityInput = document.getElementById("enter-city");

var displayUV = 0;


var searchedCity = "";


$('#fetch-button').on('click', function() {
  var city = $('#enter-city').val();
 
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=12aee5ec80ede57ba0b91712e6a6f44d';
  
  searchWeather(requestUrl);
  if (city != searchedCity) {
    let newBtn =  document.createElement("button");
    newBtn.classList.add("btn", "btn-secondary", "btn-lg", "btn-block", "d-block", "mt-3", "fav", "new-btn");
    newBtn.innerHTML = city;
    newBtn.setAttribute("id", city);
    newBtn.addEventListener("click", getNewCity);
    let container = document.getElementById("cities");
    container.appendChild(newBtn);
  }
});

$('.fav').on('click', function() {
  var city = $(this).text();
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=12aee5ec80ede57ba0b91712e6a6f44d';
  searchWeather(requestUrl);
});

function getNewCity(){
  var city = $(this).text();
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=12aee5ec80ede57ba0b91712e6a6f44d';
  searchWeather(requestUrl);
}

function oneCall(coord){
  var lat = coord.city.coord.lat;
  var lon = coord.city.coord.lon;
  console.log('lat', lat);

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=12aee5ec80ede57ba0b91712e6a6f44d`)
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    console.log(data.current);
    console.log(data);

    displayUV = data.current.uvi;
    uvIndex.innerHTML = ("UV Index: " + data.current.uvi);
    uvIndex2 = document.getElementById("uvIndex2");
    uvIndex.innerHTML = ("UV Index: " + data.current.uvi);


    if (displayUV <= 2) {
      uvIndex.classList.remove("uv-code-moderate", "uv-code-high", "uv-code-very-high");
      uvIndex.classList.add("uv-code-low");
    } else if (displayUV > 2 && displayUV < 6) {
      uvIndex.classList.remove("uv-code-low", "uv-code-high", "uv-code-very-high");
      uvIndex.classList.add("uv-code-moderate");
    } else if (displayUV >= 6 && displayUV < 8) {
      uvIndex.classList.remove("uv-code-low", "uv-code-moderate", "uv-code-very-high");
      uvIndex.classList.add("uv-code-high");
    } else if (displayUV >= 8 && displayUV <= 10) {
      uvIndex.classList.remove("uv-code-low", "uv-code-moderate", "uv-code-high");
      uvIndex.classList.add("uv-code-very-high");
    }

    // UV INDEX
    function setValUV() {
    localStorage.setItem("uv", displayUV); //set to local storage
    }
    setValUV();
  })
}



function searchWeather(requestUrl) {
  
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {  
  
  oneCall(data);

  // DISPLAYING DATAS
  displayCity.innerHTML = (data.city.name);
  displayHumidity.innerHTML = ("Humidty: " + data.list[0].main.humidity);
  displayTemp.innerHTML = ("Temp: " + data.list[0].main.temp + "??F");
  displayWind.innerHTML = ("Wind: " + data.list[0].wind.speed);
  $("#icon1").html("<img src='https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  displayDayOneDate.innerHTML = dayOne; 

  displayDayTwoDate.innerHTML = dayTwo;
  $("#icon2").html("<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  temp2.innerHTML= ("Temp: " + data.list[2].main.temp + "??F");
  wind2.innerHTML= ("Wind: " + data.list[2].wind.speed);
  humid2.innerHTML= ("Humidity: " + data.list[2].main.humidity);

  displayDayThreeDate.innerHTML = dayThree;
  $("#icon3").html("<img src='https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  temp3.innerHTML= ("Temp: " + data.list[10].main.temp + "??F");
  wind3.innerHTML= ("Wind: " + data.list[10].wind.speed);
  humid3.innerHTML= ("Humidity: " + data.list[10].main.humidity);

  displayDayFourDate.innerHTML = dayFour;
  $("#icon4").html("<img src='https://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  temp4.innerHTML= ("Temp: " + data.list[18].main.temp + "??F");
  wind4.innerHTML= ("Wind: " + data.list[18].wind.speed);
  humid4.innerHTML= ("Humidity: " + data.list[18].main.humidity);

  displayDayFiveDate.innerHTML = dayFive;
  $("#icon5").html("<img src='https://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  temp5.innerHTML= ("Temp: " + data.list[26].main.temp + "??F");
  wind5.innerHTML= ("Wind: " + data.list[26].wind.speed);
  humid5.innerHTML= ("Humidity: " + data.list[26].main.humidity);

  
  displayDaySixDate.innerHTML = daySix;
  $("#icon6").html("<img src='https://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  temp6.innerHTML= ("Temp: " + data.list[34].main.temp + "??F");
  wind6.innerHTML= ("Wind: " + data.list[34].wind.speed);
  humid6.innerHTML= ("Humidity: " + data.list[34].main.humidity);


  // SETTING ITEMS TO LOCAL STORAGE
  function setVal () {

    // WEATHER NOW
    localStorage.setItem("city1", data.city.name); //set to local storage
    localStorage.setItem("humid1", data.list[0].main.humidity); //set to local storage
    localStorage.setItem("temp1", data.list[0].main.temp + "??F"); //set to local storage
    localStorage.setItem("wind1", data.list[0].wind.speed); //set to local storage
    localStorage.setItem("date1", dayOne); //set to local storage
    localStorage.setItem("icon1", "<img src='https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png'>") //set to local storage

    // DAY 2
    localStorage.setItem("humid2", data.list[2].main.humidity); //set to local storage
    localStorage.setItem("temp2", data.list[2].main.temp+"??F"); //set to local storage
    localStorage.setItem("wind2", data.list[2].wind.speed); //set to local storage
    localStorage.setItem("date2", dayTwo); //set to local storage
    localStorage.setItem("icon2", "<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png'>") //set to local storage

    // DAY 3
    localStorage.setItem("humid3", data.list[10].main.humidity); //set to local storage
    localStorage.setItem("temp3", data.list[10].main.temp); //set to local storage
    localStorage.setItem("wind3", data.list[10].wind.speed); //set to local storage
    localStorage.setItem("date3", dayThree); //set to local storage
    localStorage.setItem("icon3", "<img src='https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png'>") //set to local storage

    // DAY 4
    localStorage.setItem("humid4", data.list[18].main.humidity); //set to local storage
    localStorage.setItem("temp4", data.list[18].main.temp); //set to local storage
    localStorage.setItem("wind4", data.list[18].wind.speed); //set to local storage
    localStorage.setItem("date4", dayFour); //set to local storage
    localStorage.setItem("icon4", "<img src='https://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png'>") //set to local storage

    // DAY 5
    localStorage.setItem("humid5", data.list[26].main.humidity); //set to local storage
    localStorage.setItem("temp5", data.list[26].main.temp+ "??F"); //set to local storage
    localStorage.setItem("wind5", data.list[26].wind.speed); //set to local storage
    localStorage.setItem("date5", dayFive); //set to local storage
    localStorage.setItem("icon5", "<img src='https://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png'>") //set to local storage

    // DAY 6
    localStorage.setItem("humid6", data.list[34].main.humidity); //set to local storage
    localStorage.setItem("temp6", data.list[34].main.temp); //set to local storage
    localStorage.setItem("wind6", data.list[34].wind.speed); //set to local storage
    localStorage.setItem("date6", daySix); //set to local storage
    localStorage.setItem("icon6", "<img src='https://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png'>") //set to local storage
  }
setVal();
});  
}

// LOCAL STORAGE RETRIEVAL
function getVal() {
  if (localStorage.length != 0){
    // DAY 1
    var cityDisplay = localStorage.getItem("city1");
    displayCity.innerHTML = cityDisplay;

    var displayHumid1 = localStorage.getItem("humid1");
    displayHumidity.innerHTML = "Humidty: " + displayHumid1;

    var displayTemp1 = localStorage.getItem("temp1");
    displayTemp.innerHTML = "Temp: " + displayTemp1;

    var displayWind1 = localStorage.getItem("wind1");
    displayWind.innerHTML = "Wind: " + displayWind1;

    var displayIcon1 = localStorage.getItem("icon1");
    $("#icon1").html(displayIcon1);

    var displayDay1 = localStorage.getItem("date1");
    displayDayOneDate.innerHTML = displayDay1;

    //DAY 2
    var displayHumid2 = localStorage.getItem("humid2");
    humid2.innerHTML = "Humidty: " + displayHumid2;

    var displayTemp2 = localStorage.getItem("temp2");
    temp2.innerHTML = "Temp: " + displayTemp2;

    var displayWind2 = localStorage.getItem("wind2");
    wind2.innerHTML = "Wind: " + displayWind2;

    var displayIcon2 = localStorage.getItem("icon2");
    $("#icon2").html(displayIcon2);

    var displayDay2 = localStorage.getItem("date2");
    displayDayTwoDate.innerHTML = displayDay2;

    //DAY 3
    var displayHumid3 = localStorage.getItem("humid3");
    humid3.innerHTML = "Humidty: " + displayHumid3;

    var displayTemp3 = localStorage.getItem("temp3");
    temp3.innerHTML = "Temp: " + displayTemp3;

    var displayWind3 = localStorage.getItem("wind3");
    wind3.innerHTML = "Wind: " + displayWind3;

    var displayIcon3 = localStorage.getItem("icon3");
    $("#icon3").html(displayIcon3);

    var displayDay3 = localStorage.getItem("date3");
    displayDayThreeDate.innerHTML = displayDay3;

    //DAY 4
    var displayHumid4 = localStorage.getItem("humid4");
    humid4.innerHTML = "Humidty: " + displayHumid4;

    var displayTemp4 = localStorage.getItem("temp4");
    temp4.innerHTML = "Temp: " + displayTemp4;

    var displayWind4 = localStorage.getItem("wind4");
    wind4.innerHTML = "Wind: " + displayWind4;

    var displayIcon4 = localStorage.getItem("icon4");
    $("#icon4").html(displayIcon4);

    var displayDay4 = localStorage.getItem("date4");
    displayDayFourDate.innerHTML = displayDay4;

    //DAY 5
    var displayHumid5 = localStorage.getItem("humid5");
    humid5.innerHTML = "Humidty: " + displayHumid5;

    var displayTemp5 = localStorage.getItem("temp5");
    temp5.innerHTML = "Temp: " + displayTemp5;

    var displayWind5 = localStorage.getItem("wind5");
    wind5.innerHTML = "Wind: " + displayWind5;

    var displayIcon5 = localStorage.getItem("icon5");
    $("#icon5").html(displayIcon5);

    var displayDay5 = localStorage.getItem("date5");
    displayDayFiveDate.innerHTML = displayDay5;

    //DAY 6
    var displayHumid6 = localStorage.getItem("humid6");
    humid6.innerHTML = "Humidty: " + displayHumid6;

    var displayTemp6 = localStorage.getItem("temp6");
    temp6.innerHTML = "Temp: " + displayTemp6;

    var displayWind6 = localStorage.getItem("wind6");
    wind6.innerHTML = "Wind: " + displayWind6;

    var displayIcon6 = localStorage.getItem("icon6");
    $("#icon6").html(displayIcon6);

    var displayDay6 = localStorage.getItem("date6");
    displayDaySixDate.innerHTML = displayDay6;

    var displayUV = localStorage.getItem("uv");
    uvIndex.innerHTML = "UV Index: " + displayUV;

    if (displayUV <= 2) {
      uvIndex.classList.remove("uv-code-moderate", "uv-code-high", "uv-code-very-high");
      uvIndex.classList.add("uv-code-low");
    } else if (displayUV > 2 && displayUV < 6) {
      uvIndex.classList.remove("uv-code-low", "uv-code-high", "uv-code-very-high");
      uvIndex.classList.add("uv-code-moderate");
    } else if (displayUV >= 6 && displayUV < 8) {
      uvIndex.classList.remove("uv-code-low", "uv-code-moderate", "uv-code-very-high");
      uvIndex.classList.add("uv-code-high");
    } else if (displayUV >= 8 && displayUV <= 10) {
      uvIndex.classList.remove("uv-code-low", "uv-code-moderate", "uv-code-high");
      uvIndex.classList.add("uv-code-very-high");
    }


  }
}

getVal();

