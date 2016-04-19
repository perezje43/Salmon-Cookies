var times = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'TOTAL'];
var locations = [];

function StoreLocations(store, min, max, avgCookies) {
  this.store = store;
  this.minimumCustomers = min;
  this.maximumCustomers = max;
  this.averageCookiesPerHour = avgCookies;

  this.randomVisitorsPerHour = function() {
    return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
  };
  this.randomCookiesPerHour = function() {
    return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
  },

  this.cookies = [];
  this.customers = [];
  this.dailyTotal = 0;

  this.createArrays = function() {
    for (var j = 0; j < times.length - 1; j++) {
      this.cookies.push(this.randomCookiesPerHour());
      this.customers.push(this.randomVisitorsPerHour());
      this.dailyTotal += this.randomCookiesPerHour();
    }

  };
  this.randomVisitorsPerHour();
  this.randomCookiesPerHour();
  this.createArrays();
  locations.push(this);
}

var pikePlace = new StoreLocations('Pikes Place Market', 17, 88, 5.2);
var seaTac = new StoreLocations('SeaTac Airport', 6, 24, 1.2);
var southCenter = new StoreLocations('Southcenter', 11, 38, 1.9);
var bellevue = new StoreLocations('Bellevue Square', 20, 48, 3.3);
var alki = new StoreLocations('Alki', 3, 24, 2.6);

function createHeader() {
  var header = document.getElementById('firstRow');
  for (i = 0; i < times.length; i++) {
    var th = document.createElement('th');
    th.textContent = times[i];
    header.appendChild(th);
  }
}
createHeader();

function createBody() {
  var bodyRow = document.getElementById('bodyRow');
  for(i = 0; i < locations.length; i++) {
    var tr = document.createElement('tr');
    bodyRow.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = locations[i].store;
    tr.appendChild(td);
    for(x = 0; x < locations[i].cookies.length; x++) {
      var td2 = document.createElement('td');
      td2.textContent = locations[i].cookies[x];
      tr.appendChild(td2);
    }
    var td3 = document.createElement('td');
    td3.textContent = locations[i].dailyTotal;
    tr.appendChild(td3);
  }
}
createBody();
// var pikePlace = {
//   store: 'Pike Place Market',
//   minimumCustomers: 17,
//   maximumCustomers: 88,
//   averageCookiesPerHour: 5.2,
//
//
//   cookies: [],
//   customers: [],
//   dailyTotal: 0
// };
//
// var seaTacAirport = {
//   store:'SeaTac Airport',
//   minimumCustomers: 6,
//   maximumCustomers: 24,
//   averageCookiesPerHour: 1.2,
//   randomVisitorsPerHour: function getRandomIntInclusive () {
//     return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
//   },
//   randomCookiesPerHour: function () {
//     return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
//   },
//   cookies: [],
//   customers: [],
//   dailyTotal: 0
// };
//
// var southCenter = {
//   store:'Southcenter',
//   minimumCustomers: 11,
//   maximumCustomers: 38,
//   averageCookiesPerHour: 1.9,
//   randomVisitorsPerHour: function getRandomIntInclusive () {
//     return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
//   },
//   randomCookiesPerHour: function () {
//     return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
//   },
//   cookies: [],
//   customers: [],
//   dailyTotal: 0
// };
//
// var bellevueSquare = {
//   store: 'Bellevue Square',
//   minimumCustomers: 20,
//   maximumCustomers: 48,
//   averageCookiesPerHour: 3.3,
//   randomVisitorsPerHour: function getRandomIntInclusive () {
//     return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
//   },
//   randomCookiesPerHour: function () {
//     return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
//   },
//   cookies: [],
//   customers: [],
//   dailyTotal: 0
// };
//
// var alki = {
//   store:'Alki',
//   minimumCustomers: 3,
//   maximumCustomers: 24,
//   averageCookiesPerHour: 2.6,
//   randomVisitorsPerHour: function getRandomIntInclusive () {
//     return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
//   },
//   randomCookiesPerHour: function() {
//     return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
//   },
//   cookies: [],
//   customers: [],
//   dailyTotal: 0
// };



// var allStores = function () {
//   for (var i = 0; i < locations.length; i++) {
//     var storeLocations = document.createElement('ul');
//     storeLocations.id = 'storeLocations';
//     storeLocations.textContent = locations[i].store;
//     document.body.appendChild(storeLocations);
//     for (var j = 0; j < times.length; j++) {
//       locations[i].cookies.push(locations[i].randomCookiesPerHour());
//       locations[i].customers.push(locations[i].randomVisitorsPerHour());
//       var openingTimes = document.createElement('li');
//       openingTimes.textContent = times[j] + ': ' + locations[i].randomCookiesPerHour() + ' cookies.';
//       storeLocations.appendChild(openingTimes);
//       locations[i].dailyTotal += locations[i].randomCookiesPerHour();
//     };
//     var cookiesPerStore = document.createElement('li');
//     cookiesPerStore.textContent = locations[i].store + ' Total: ' + locations[i].dailyTotal + '.';
//     storeLocations.appendChild(cookiesPerStore);
//   };
// };
//
// allStores();
