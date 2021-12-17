console.log("Welcome to covid app");

var x = document.getElementById("select");
var content = document.getElementById("container");
var child1 = document.getElementById("child1");
var child2 = document.getElementById("child2");
var child3 = document.getElementById("child3");
var child4 = document.getElementById("child4");

function getdata() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(xhttp.responseText);
      insertData_into_option(data);
      console.log(child1.firstChild);
    }
  };
  xhttp.open("GET", "https://api.covid19api.com/summary", true);
  xhttp.send();
}

// fetiching country data from api

function insertData_into_option(data) {
  //   var x = document.getElementById("select");

  for (var i = 0; i < data.Countries.length; i++) {
    var option = document.createElement("option");
    option.text = data.Countries[i].Country;

    x.add(option);
  }
}

getdata();
// on selecting country from select box

function onselectbox() {
  //   console.log(x.value);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(xhttp.responseText);
      // console.log(data.Countries);

      for (var i = 0; i < data.Countries.length; i++) {
        if (x.value == data.Countries[i].Country) {
          let final_data = data.Countries[i];

          child1.lastChild.innerText = `${final_data.Country}`;
          child2.lastChild.innerText = `${final_data.NewConfirmed}`;
          child3.lastChild.innerText = `${final_data.NewDeaths}`;
          child4.lastChild.innerText = `${final_data.NewRecovered}`;
        }
      }
    }
  };
  xhttp.open("GET", "https://api.covid19api.com/summary", true);
  xhttp.send();
}
