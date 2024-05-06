// app.js

// This function will fetch our CSV data from the server
function fetchCSVData() {
  fetch('Data/Threats & Vulnerabilities.csv')
    .then(response => response.text()) // Convert the response to text
    .then(text => {
      const data = parseCSV(text); // Parse the CSV data
      displayData(data); // Display the data on the webpage
    })
    .catch(error => console.error('Error fetching CSV:', error)); // Log any errors
}

// This function takes raw CSV text and converts it into a 2D array
function parseCSV(text) {
  const lines = text.split('\\n'); // Split the text into lines
  return lines.map(line => line.split(',')); // Split each line into columns
}

// This function takes the parsed CSV data and adds it to our HTML table
function displayData(data) {
  const table = document.getElementById('csvDataTable'); // Find the table in our HTML
  data.forEach((row, index) => {
    const tr = document.createElement('tr'); // Create a new table row
    row.forEach(cell => {
      const td = document.createElement('td'); // Create a new table cell
      td.textContent = cell.trim().replace(/^"|"$/g, ''); // Remove quotes and trim whitespace
      tr.appendChild(td); // Add the cell to the row
    });
    if (index === 0) {
      table.querySelector('thead').appendChild(tr); // Add the first row to the table header
    } else {
      table.querySelector('tbody').appendChild(tr); // Add subsequent rows to the table body
    }
  });
}

// Call our `fetchCSVData` function when the page loads
window.addEventListener('DOMContentLoaded', fetchCSVData);
