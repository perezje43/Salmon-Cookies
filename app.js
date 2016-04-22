var times = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'TOTAL'];
var locations = [];

var newStore = document.getElementById('new-store');

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
  };

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

function createBody() {
  var bodyRow = document.getElementById('bodyRow');
  bodyRow.innerHTML = '';
  for(i = 0; i < locations.length; i++) {
    var tr = document.createElement('tr');
    bodyRow.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = locations[i].store;
    tr.appendChild(td);
    for(var x = 0; x < locations[i].cookies.length; x++) {
      var td2 = document.createElement('td');
      td2.textContent = locations[i].cookies[x];
      tr.appendChild(td2);
    }
    var td3 = document.createElement('td');
    td3.textContent = locations[i].dailyTotal;
    tr.appendChild(td3);
  }
}

function handleNewStoreSubmit(event) {
  event.preventDefault();
  var newStoreName = event.target.storeName.value;
  var newMinimumCustomers = event.target.minimumCustomers.value;
  var newMaximumCustomers = event.target.maximumCustomers.value;
  var newAverageCookiesPerHour = event.target.averageCookies.value;

  var j = 1;

  for(var x = 0; x < locations.length; x++) {
    if(newStoreName === locations[x].store) {
      locations[x].minimumCustomers = parseInt(newMinimumCustomers);
      locations[x].maximumCustomers = parseInt(newMaximumCustomers);
      locations[x].averageCookiesPerHour = parseInt(newAverageCookiesPerHour);
      locations[x].cookies = [];
      locations[x].customers = [];
      locations[x].dailyTotal = 0;
      locations[x].randomCookiesPerHour();
      locations[x].createArrays();
      createBody();
    }else{
      j++;
    }
  }
  console.log(locations.length);
  console.log(j);

  if(j > locations.length) {
    var newStore = new StoreLocations(newStoreName, newMinimumCustomers, newMaximumCustomers, newAverageCookiesPerHour);
    createBody();
  }

  event.target.storeName.value = null;
  event.target.minimumCustomers.value = null;
  event.target.maximumCustomers.value = null;
  event.target.averageCookies.value = null;
};

newStore.addEventListener('submit', handleNewStoreSubmit);

createHeader();
createBody();
