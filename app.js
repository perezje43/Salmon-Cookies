var pikePlace = {
  store: 'Pike Place Market',
  minimumCustomers: 17,
  maximumCustomers: 88,
  averageCookiesPerHour: 5.2,
  randomVisitorsPerHour: function getRandomIntInclusive () {
    return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
  },
  randomCookiesPerHour: function () {
    return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
  },
  cookies: [],
  customers: [],
  dailyTotal: 0
};

var seaTacAirport = {
  store:'SeaTac Airport',
  minimumCustomers: 6,
  maximumCustomers: 24,
  averageCookiesPerHour: 1.2,
  randomVisitorsPerHour: function getRandomIntInclusive () {
    return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
  },
  randomCookiesPerHour: function () {
    return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
  },
  cookies: [],
  customers: [],
  dailyTotal: 0
};

var southCenter = {
  store:'Southcenter',
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageCookiesPerHour: 1.9,
  randomVisitorsPerHour: function getRandomIntInclusive () {
    return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
  },
  randomCookiesPerHour: function () {
    return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
  },
  cookies: [],
  customers: [],
  dailyTotal: 0
};

var bellevueSquare = {
  store: 'Bellevue Square',
  minimumCustomers: 20,
  maximumCustomers: 48,
  averageCookiesPerHour: 3.3,
  randomVisitorsPerHour: function getRandomIntInclusive () {
    return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
  },
  randomCookiesPerHour: function () {
    return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
  },
  cookies: [],
  customers: [],
  dailyTotal: 0
};

var alki = {
  store:'Alki',
  minimumCustomers: 3,
  maximumCustomers: 24,
  averageCookiesPerHour: 2.6,
  randomVisitorsPerHour: function getRandomIntInclusive () {
    return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
  },
  randomCookiesPerHour: function() {
    return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
  },
  cookies: [],
  customers: [],
  dailyTotal: 0
};

var times = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var locations = [pikePlace, seaTacAirport, southCenter, bellevueSquare, alki];

var allStores = function () {
  for (var i = 0; i < locations.length; i++) {
    var storeLocations = document.createElement('ul');
    // storeLocations.id = this.storeHtmlId;
    //storeLocations.textContent = locations[i].store;
    // document.body.appendChild(storeLocations);
    storeLocations.textContent = locations[i].store;
    document.body.appendChild(storeLocations);
    for (var j = 0; j < times.length; j++) {
      locations[i].cookies.push(locations[i].randomCookiesPerHour());
      locations[i].customers.push(locations[i].randomVisitorsPerHour());
      var openingTimes = document.createElement('li');
      openingTimes.textContent = times[j] + ': ' + locations[i].randomCookiesPerHour() + ' cookies.';
      document.body.appendChild(openingTimes);
      locations[i].dailyTotal += locations[i].randomCookiesPerHour();
    };
    var cookiesPerStore = document.createElement('li');
    cookiesPerStore.textContent = locations[i].store + ' Total: ' + locations[i].dailyTotal + '.';
    document.body.appendChild(cookiesPerStore);
  };
};

allStores();
