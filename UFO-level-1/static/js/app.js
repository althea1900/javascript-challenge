// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// The Filter button
var submit = d3.select("#filter-btn");

// The Filter button
var searchDate = d3.select("#datetime");

// Console.log the data from data.js
console.log(tableData);

// Display data
data.forEach(function(sightingReport) {
    console.log(sightingReport);
    var row = tbody.append("tr");
     Object.entries(sightingReport).forEach(function([key, value]) {
       console.log(key, value);
       var cell = tbody.append("td");
       cell.text(value);
     });
   });

// Display data by search date
submit.on("click", function(){
  tbody.html("");
  // renderTable();

      // Select the input date get the raw HTML nodes
      var inputElement = d3.select("#datetime");
      // Get the value property of the input date, state, shape
      var inputValue = inputElement.property("value");
      // console.log input value
      console.log(inputValue);
      // Filter Data with datetime equal to input value
      var filteredDate = data.filter(sightingReport => sightingReport.datetime === inputValue);
      // console.log filter values
      console.log(filteredDate);
});