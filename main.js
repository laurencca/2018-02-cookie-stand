var storeName = '';
var minCustomer = 0;
var maxCustomer = 0;
var avgCookiesPerCustomer = 0;
var hoursOpen = ['10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm'];

//2. Use a method to generate a random number of customers per hour.
//3. Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated.
function getCookiesPerHour(minCustomer, maxCustomer, avgCookiesPerCustomer) {
  return ((Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer) * avgCookiesPerCustomer);
}

//1. Create objects that store the min/max hourly customers, and the average cookies per customer, in object properties
var pioneer = {
  storeName: 'Pioneer Square',
  minCustomer: 17,
  maxCustomer: 58,
  avgCookiesPerCustomer: 5.2,
  totalCookies: 0,

  getAllCookies: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
      this.allCookiesPerHour.push(cookies);
      this.totalCookies += cookies;
    }
  },
//4. Store the results for each location in a separate array
  allCookiesPerHour: []
}

var airport = {
  storeName: 'Portland Airport',
  minCustomer: 6,
  maxCustomer: 24,
  avgCookiesPerCustomer: 1.2,
  totalCookies: 0,

  getAllCookies: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
      this.allCookiesPerHour.push(cookies);
      this.totalCookies += cookies;
    }
  },
//4. Store the results for each location in a separate array
  allCookiesPerHour: []
}

var washington = {
  storeName: 'Washington Square',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPerCustomer: 1.9,
  totalCookies: 0,

  getAllCookies: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
      this.allCookiesPerHour.push(cookies);
      this.totalCookies += cookies;
    }
  },
//4. Store the results for each location in a separate array
  allCookiesPerHour: []
}

var sellwood = {
  storeName: 'Sellwood',
  minCustomer: 17,
  maxCustomer: 48,
  avgCookiesPerCustomer: 3.3,
  totalCookies: 0,

  getAllCookies: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
      this.allCookiesPerHour.push(cookies);
      this.totalCookies += cookies;
    }
  },
//4. Store the results for each location in a separate array
  allCookiesPerHour: []
}

var pearl = {
  storeName: 'Pearl District',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiesPerCustomer: 2.6,
  totalCookies: 0,

  getAllCookies: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookies = Math.round(getCookiesPerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
      this.allCookiesPerHour.push(cookies);
      this.totalCookies += cookies;
    }
  },
//4. Store the results for each location in a separate array
  allCookiesPerHour: []
}

//5. Display the values of each array as unordered lists in the browser
//6. Calculate the sum of the hourly totals.
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





/*
var storeContainer = document.getElementById('pioneer');
var storeList = '<h3>' + pioneer.storeName + '</h3>';
pioneer.getAllCookies();
for (var i = 0; i < hoursOpen.length; i++) {
  storeList += '<li>' + hoursOpen[i] + ': ' + pioneer.allCookiesPerHour[i] + '</li>';
}
storeContainer.innerHTML = storeList;
*/
