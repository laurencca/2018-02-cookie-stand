var name = '';
var minCust = 0;
var maxCust = 0;
var avgSale = 0;
var hours = ['10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm'];

function getRandomCustomer(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

var pioneer = {
  name: 'Pioneer Square',
  minCust: 17,
  maxCust: 58,
  avgSale: 5.2,

  getCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.allCookiesPerHour.push(
        Math.round(getRandomCustomer(this.minCust, this.maxCust) * this.avgSale)
      )
    }
  },

  allCookiesPerHour: []

}



var airport = {
  name: 'Portland Airport',
  minCust: 6,
  maxCust: 24,
  avgSale: 1.2,
  getCookiesPerHour: function() {
    return getRandomCustomer(this.minCust, this.maxCust) * this.avgSale;
  }
}

var washington = {
  name: 'Washington Square',
  minCust: 11,
  maxCust: 38,
  avgSale: 1.9,
  getCookiesPerHour: function() {
    return getRandomCustomer(this.minCust, this.maxCust) * this.avgSale;
  }
}

var sellwood = {
  name: 'Sellwood',
  minCust: 17,
  maxCust: 48,
  avgSale: 3.3,
  getCookiesPerHour: function() {
    return getRandomCustomer(this.minCust, this.maxCust) * this.avgSale;
  }
}

var pearl = {
  name: 'Pearl District',
  minCust: 3,
  maxCust: 24,
  avgSale: 2.6,
  getCookiesPerHour: function() {
    return getRandomCustomer(this.minCust, this.maxCust) * this.avgSale;
  }
}
