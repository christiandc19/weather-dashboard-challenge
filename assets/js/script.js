// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var city = document.getElementById("enter-city").value;
var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=12aee5ec80ede57ba0b91712e6a6f44d';
var fetchBtn = document.getElementById("fetch-button");

var displayCity = document.querySelector("h1");
var displayTemp = document.getElementById("temp");
var displayWind = document.getElementById("wind");
var displayHumidity = document.getElementById("humidity");

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })


  .then(function (data) {      

      function getData() {
      displayCity.innerHTML = city;
      displayTemp.innerHTML = ("Temp: " + data.main.temp);
      displayWind.innerHTML = ("Wind: " + data.wind.speed);
      displayHumidity.innerHTML = ("Humidty: " + data.main.humidity);

}

fetchBtn.addEventListener("click", getData);

getData();
});  
    
    
    
       // console.log(data);
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