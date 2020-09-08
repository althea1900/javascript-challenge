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
      
      // Clear table    
      tbody.html("");
      
      // Select the inputed date and get it's value
      var inputElement = d3.select("#datetime");
      var inputValue = inputElement.property("value");
      console.log(inputValue);

      // Get selected data with datetime equal to input 
      var selectedDate = data.filter(sightingReport => sightingReport.datetime === inputValue);
      // console.log filter values
      console.log(selectedDate);
          
      if (selectedDate.length == 0) {
          alert("No sightings on " + inputValue);
      }
});