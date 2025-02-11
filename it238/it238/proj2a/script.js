// Justin Blackburn
//February 11, 2025
//Project 2a

//creating variable for parsed json data
var citiesObjects = JSON.parse(data);

//function to getCities, setting values and creating a list to sort and then output string
function getCities( ){
    var countryInput = document.getElementById("input-country");
    var countryName = countryInput.value;
    var subcountryInput = document.getElementById("input-subcountry");
    var subcountryName = subcountryInput.value;
    var output = document.getElementById("output1");
    var outputString = "";
    var outList = [];

    //looping through all of the cities and adding them to the list
    for(var city of citiesObjects){
        if(
            city.country == countryName && city.subcountry == subcountryName
        ){
            outList.push(city.name);
        }
    }
    //sorting the list
    //adding the cities to the output string to be displayed in textbox
    outList.sort();
    for(var city of outList){
        outputString += `${city}, `;
    }
    //if no results printing different statement
    if(outputString == ""){
        output.value = "There are no results for your search."
    }
    else{
        output.value = outputString;
    }
}

//function to get the country and subcountry
//variables for values and outputs
function getCountry( ){
    var cityInput = document.getElementById("input-city");
    var cityName = cityInput.value;
    console.log(cityName);
    var output = document.getElementById("output2");
    var outputString = "";
    var cityCount = 0;

    //looping through all of the cities to find city name matches
    //adding to output string
    for(var city of citiesObjects){
        if(
            city.name == cityName
        ){
            outputString += `There is a ${cityName} in ${city.subcountry}, ${city.country}. ${"<br></br>"}`;
            cityCount += 1;
        }
    }
    //if no cities printing no result
    if(cityCount == 0){
        outputString += "There are no results for your search."
    }
    output.innerHTML = outputString;
}

//init function to call other functions on clicks
function init() {
    var button1 = document.getElementById("button-1");
    button1.addEventListener("click", getCities);

    var button2 = document.getElementById("button-2");
    button2.addEventListener("click", getCountry);
}

//window load to call init when site loads
window.addEventListener("load", init)