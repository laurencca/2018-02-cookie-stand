"use strict";

var storeName = '';
var minCustomer = 0;
var maxCustomer = 0;
var avgCookiesPerCustomer = 0;
var hoursOpen = ['10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm'];
var table = document.getElementById('store-container');

//function to get average number of cookies purchased per hour
function getCookiesPerHour(minCustomer, maxCustomer, avgCookiesPerCustomer) {
  return ((Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer) * avgCookiesPerCustomer);
}

//1. implement a constructor function
var Store = function(storeName, minCustomer, maxCustomer, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalCookies = 0;
  this.allCookiesPerHour = [];

  this.getAllCookies = function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
      this.allCookiesPerHour.push(cookies);
      this.totalCookies += cookies;
    }
  }
}

var stores = [];
stores.push(new Store('Pioneer Square', 17, 58, 5.2))
stores.push(new Store('Portland Airport', 6, 24, 1.2))
stores.push(new Store('Washington Square', 11, 38, 1.9))
stores.push(new Store('Sellwood', 17, 48, 3.3))
stores.push(new Store('Pearl District', 3, 24, 2.6))

//function to create table header
function makeTableHeader() {
  var row = document.createElement('tr');
  var cell = document.createElement('td');
  row.appendChild(cell);

  for(var hourIndex = 0; hourIndex < hoursOpen.length; hourIndex++) {
    var cell = document.createElement('td');
    cell.innerText = hoursOpen[hourIndex];
    row.appendChild(cell);
  }

  table.appendChild(row);
}

//2. function to present the store data in a table format
function makeTable() {
  makeTableHeader();

  for(var storeIndex = 0; storeIndex < stores.length; storeIndex++) {
    var store = stores[storeIndex];
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.innerText = store.storeName;
    row.appendChild(cell);

    store.getAllCookies();

    for(var cookiesIndex = 0; cookiesIndex < store.allCookiesPerHour.length; cookiesIndex++) {
      cell = document.createElement('td')
      cell.innerText = store.allCookiesPerHour[cookiesIndex];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

}

makeTable();
