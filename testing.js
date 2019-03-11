// This page includes some of my thought process and things i tried and failed, no need to look over it



// Using the UFO dataset provided in the form of an array of JavaScript objects,
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and 
//comment at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen
// for events and search through the date/time column to find rows that match user input.
// // from data.js
var tableData = data;

// // YOUR CODE HERE!
// var submit = d3.select("#form-control");
 
//  submit.on("click", function() {
 
    
//     // Prevent the page from refreshing
//     d3.event.preventDefault();

//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#btn");

//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");

//     console.log(inputValue);

//     // Set the span tag in the h1 element to the text
//     // that was entered in the form
//     var newRow= d3.select("th>table-head").text(inputValue);

//     var newtable = d3.select("tr"). append("th");

// });

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
//console.log(tableData);

// Step 1: Loop Through `data` and console.log each weather report object
tableData.forEach(function(submit) {
    console.log(submit);
});
// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
tableData.forEach(function (submit){
    var row = tbody.append("tr")
    console.log(row);
});

// Step 3:  Use `Object.entries` to console.log each weather report value



tableData.forEach((submit) => {
    var row =tbody.append("tr");
        Object.data(submit).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
});


// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)

// // BONUS: Refactor to use Arrow Functions
