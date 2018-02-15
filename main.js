var name = 0;
var minCust = 0;
var maxCust = 0;
var avgSale = 0;

function getRandomIntInclusive(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

var pioneer = {name: 'Pioneer Square', minCust: 17, maxCust: 58, avgSale: 5.2,
  getCookiesPerHour: function(){
    return getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSale;
  }
}
var airport = {name: 'Portland Airport', minCust: 6, maxCust: 24, avgSale: 1.2}
var washington = {name: 'Washington Square', minCust: 11, maxCust: 38, avgSale: 1.9}
var sellwood = {name: 'Sellwood', minCust: 17, maxCust: 48, avgSale: 3.3}
var pearl = {name: 'Pearl District', minCust: 3, maxCust: 24, avgSale: 2.6}
