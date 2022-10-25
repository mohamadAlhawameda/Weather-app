function MyWeahter() {
    let sel = document.getElementById("men").value;
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + sel + "&units=metric&appid=86de1d4ee4dd12e3bcfe36542183215a")
      .then(response => response.json())
      .then(data => MyJson(data))
      .catch(message => alert(message));;
  }

  function UsingXHR(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {

    };
    xhttp.open("GET", url, true);
    xhttp.get();
  }

  function MyJson(json) {
    document.getElementById("city").innerHTML = json.name;
    document.getElementById("temp").innerHTML = "Tempature : " + json.main.temp + "°";
    document.getElementById("feels").innerHTML = "Feels like : " + json.main.feels_like + "°";
    document.getElementById("wind").innerHTML = "Wind speed : " + json.wind.speed;
    document.getElementById("hum").innerHTML = "Humidity: " + json.main.humidity
    document.getElementById("cuName").innerHTML = "Country : " + json.sys.country;
  }