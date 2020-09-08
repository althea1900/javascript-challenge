// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// The Filter button
var submit = d3.select("filter-btn");

// Console.log the data from data.js
console.log(tableData);

//
data.forEach(function(sightingReport) {
    console.log(sightingReport);
    var row = tbody.append("tr");
     Object.entries(sightingReport).forEach(function([key, value]) {
       console.log(key, value);
       var cell = tbody.append("td");
       cell.text(value);
     });
   });