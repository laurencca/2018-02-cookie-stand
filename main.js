"use strict";

var storeName = '';
var minCustomer = 0;
var maxCustomer = 0;
var avgCookiesPerCustomer = 0;
var hoursOpen = ['10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm'];
var table = document.getElementById('store-container');

//function to get average number of cookies purchased per hour
function getAvgCookiesPerHour(minCustomer, maxCustomer, avgCookiesPerCustomer) {
  return ((Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer) * avgCookiesPerCustomer);
}

//constructor function for stores
var Store = function(storeName, minCustomer, maxCustomer, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalCookies = 0;
  this.allCookiesPerHour = [];

  //function to get total cookies for each hoursOpen
  this.getCookiesPerHour = function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookies = Math.round(getAvgCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
      this.allCookiesPerHour.push(cookies);
      this.totalCookies += cookies;
    }
  }
}

//store array
var stores = [];
stores.push(new Store('Pioneer Square', 17, 58, 5.2))
stores.push(new Store('Portland Airport', 6, 24, 1.2))
stores.push(new Store('Washington Square', 11, 38, 1.9))
stores.push(new Store('Sellwood', 17, 48, 3.3))
stores.push(new Store('Pearl District', 3, 24, 2.6))

//function to create table header
function makeTableHeader() {
  var row = document.createElement('tr'); //create table row
  var cell = document.createElement('td'); //create blank table cell
  row.appendChild(cell); //append blank cell to row

  //for loop to add new cell for each hour contained in hoursOpen array
  for(var hourIndex = 0; hourIndex < hoursOpen.length; hourIndex++) {
    var cell = document.createElement('td');
    cell.innerText = hoursOpen[hourIndex];
    row.appendChild(cell);
  }

  cell = document.createElement('td'); //create table cell for cookie totals
  cell.innerText = "TOTAL";
  row.appendChild(cell);

  table.appendChild(row); //append row to table
}

//function to present the store data in a table format
function makeTable() {
  table.innerHTML = '';
  makeTableHeader(); //call makeTableHeader function to create table header

  //for loop to add new table row for each store in storeName property
  for(var storeIndex = 0; storeIndex < stores.length; storeIndex++) {
    var store = stores[storeIndex];
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.innerText = store.storeName;
    row.appendChild(cell);

    store.allCookiesPerHour = [];
    store.getCookiesPerHour(); //call getAllCookies function to populate allCookiesPerHour array

    //for loop to add new table cells for allCookiesPerHour for each hoursOpen
    for(var cookiesIndex = 0; cookiesIndex < store.allCookiesPerHour.length; cookiesIndex++) {
      cell = document.createElement('td');
      cell.innerText = store.allCookiesPerHour[cookiesIndex];
      row.appendChild(cell);
    }

    //add total of allCookiesPerHour for each store in TOTAL column
    cell = document.createElement('td');
    cell.innerText = store.totalCookies;
    row.appendChild(cell);

    table.appendChild(row); //append rows to table
  }
}

//function to add store
function addStore() {
  storeName = prompt("Store Name:");
  minCustomer = prompt("Minimum Customers:");
  maxCustomer = prompt("Maximum Customers:");
  avgCookiesPerCustomer = prompt("Average Cookies per Customer:");
  stores.push(new Store(storeName, minCustomer, maxCustomer, avgCookiesPerCustomer));
  makeTable();
}

makeTable(); //call makeTable function to create table
