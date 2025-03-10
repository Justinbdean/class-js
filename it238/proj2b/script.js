// Justin Blackburn
//February 28, 2025
//Project 2b

//creating variable for parsed json data
var contents;

//function to read file
var readSingleFile = (event) => {
    // Obtain the single uploaded file.
    var f = event.target.files[0]; 

    if (f) {
        var r = new FileReader( );
        r.onload = function(e) { 
            contents = e.target.result;
        }
        r.readAsText(f);
    }
    else { 
        alert("Failed to load file");
    }
}

//function to getCities, setting values and creating a list to sort and then output string
var getCities = ( ) => {
    console.log(contents);
    var citiesObjects = JSON.parse(contents);
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
        outputString += `${city}\n`;
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
var getCountry = ( ) =>{
    var citiesObjects = JSON.parse(contents);
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
        outputString += `${cityName} is not found in dataset.`
    }
    output.innerHTML = outputString;
}

//dom load to call init when site loads
document.addEventListener("DOMContentLoaded", ( ) => {
    var file = document.querySelector("#file");
    file.addEventListener("change", readSingleFile, false);

    var button1 = document.getElementById("button-1");
    button1.addEventListener("click", getCities);

    var button2 = document.getElementById("button-2");
    button2.addEventListener("click", getCountry);
})