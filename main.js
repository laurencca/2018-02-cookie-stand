var storeName = '';
var minCustomer = 0;
var maxCustomer = 0;
var avgCookiesPerCustomer = 0;
var hoursOpen = ['10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm'];

//function to get average number of cookies purchased per hour
function getCookiesPerHour(minCustomer, maxCustomer, avgCookiesPerCustomer) {
  return ((Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer) * avgCookiesPerCustomer);
}

//1. implement a constructor function
var Store = function(storeName, minCustomer, maxCustomer, avgCookiesPerCustomer, totalCookies) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalCookies = totalCookies
}

var stores = [];
stores.push(new Store('Pioneer Square', 17, 58, 5.2, 0))
stores.push(new Store('Portland Airport', 6, 24, 1.2, 0))
stores.push(new Store('Washington Square', 11, 38, 1.9, 0))
stores.push(new Store('Sellwood', 17, 48, 3.3, 0))
stores.push(new Store('Pearl District', 3, 24, 2.6, 0))

//2. present the store data in a table format
function makeTable() {
  var table = document.getElementById('store-container');
  table.innerHTML = "<tr><th>Store Name</th><th>Cookies Per Hour</th><tr>"

  for (var index = 0; index < stores.length; index++) {
    row = document.createElement("tr");
    cell = document.createElement("td");
    cell.innerHTML = stores[index].storeName;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerHTML = stores[index].avgCookiesPerCustomer;
    row.appendChild(cell);
    table.appendChild(row);
   }
}

makeTable();


  getAllCookies: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
      this.allCookiesPerHour.push(cookies);
      this.totalCookies += cookies;
    }
  },
  allCookiesPerHour: []


var stores = [pioneer, airport, washington, sellwood, pearl];

var storeContainer = document.getElementById('store-container');
for (var storeIndex = 0; storeIndex < stores.length; storeIndex++) {
  var store = stores[storeIndex];
  store.getAllCookies();
  var storeList = '<ul><h3>' + store.storeName + '</h3>';
  for(var hourIndex = 0; hourIndex < hoursOpen.length; hourIndex ++) {
    storeList += '<li>' + hoursOpen[hourIndex] + ': ' + store.allCookiesPerHour[hourIndex] + '</li>';
  }
  storeList += '<li>' + 'TOTAL: ' + store.totalCookies + '</li>';
  storeContainer.innerHTML += storeList + '</ul>';
}




//Old code below

// var pioneer = {
//   storeName: 'Pioneer Square',
//   minCustomer: 17,
//   maxCustomer: 58,
//   avgCookiesPerCustomer: 5.2,
//   totalCookies: 0,
//
//   getAllCookies: function() {
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
//       this.allCookiesPerHour.push(cookies);
//       this.totalCookies += cookies;
//     }
//   },
//   allCookiesPerHour: []
// }
//
// var airport = {
//   storeName: 'Portland Airport',
//   minCustomer: 6,
//   maxCustomer: 24,
//   avgCookiesPerCustomer: 1.2,
//   totalCookies: 0,
//
//   getAllCookies: function() {
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
//       this.allCookiesPerHour.push(cookies);
//       this.totalCookies += cookies;
//     }
//   },
//   allCookiesPerHour: []
// }
//
// var washington = {
//   storeName: 'Washington Square',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookiesPerCustomer: 1.9,
//   totalCookies: 0,
//
//   getAllCookies: function() {
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
//       this.allCookiesPerHour.push(cookies);
//       this.totalCookies += cookies;
//     }
//   },
//   allCookiesPerHour: []
// }
//
// var sellwood = {
//   storeName: 'Sellwood',
//   minCustomer: 17,
//   maxCustomer: 48,
//   avgCookiesPerCustomer: 3.3,
//   totalCookies: 0,
//
//   getAllCookies: function() {
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
//       this.allCookiesPerHour.push(cookies);
//       this.totalCookies += cookies;
//     }
//   },
//   allCookiesPerHour: []
// }
//
// var pearl = {
//   storeName: 'Pearl District',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookiesPerCustomer: 2.6,
//   totalCookies: 0,
//
//   getAllCookies: function() {
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
//       this.allCookiesPerHour.push(cookies);
//       this.totalCookies += cookies;
//     }
//   },
//   allCookiesPerHour: []
// }

//var stores = [pioneer, airport, washington, sellwood, pearl];

// var storeContainer = document.getElementById('store-container');
// for (var storeIndex = 0; storeIndex < stores.length; storeIndex++) {
//   var store = stores[storeIndex];
//   store.getAllCookies();
//   var storeList = '<ul><h3>' + store.storeName + '</h3>';
//   for(var hourIndex = 0; hourIndex < hoursOpen.length; hourIndex ++) {
//     storeList += '<li>' + hoursOpen[hourIndex] + ': ' + store.allCookiesPerHour[hourIndex] + '</li>';
//   }
//   storeList += '<li>' + 'TOTAL: ' + store.totalCookies + '</li>';
//   storeContainer.innerHTML += storeList + '</ul>';
// }
