let arr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  let date = new Date()
  let day = date.getDay()
  document.querySelector('.date-dayname').innerHTML = arr[day]
  
  let fullDate = document.querySelector('.date-day')
  
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  
  today = dd + '/' + mm + '/' + yyyy
  fullDate.innerHTML = today
  
  let myBtn = document.querySelector('.myBtn')
  
  myBtn.onclick = function () {
    let select = document.querySelector('#country')
    let value = select.options[select.selectedIndex].value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=4d8fb5b93d4af21d66a2948710284366`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        // location
        document.querySelector('.location').innerHTML =
          json.name + ',' + json.sys.country
        // Temprature
        document.querySelector('.weather-temp').innerHTML =
          Math.ceil(json.main.temp) + '°C'
        // state
        document.querySelector('.weather-desc').innerHTML = json.weather[0].main
        // precipitation
        document.querySelector('.precipitationV').innerHTML =
          json.main.pressure + ' %'
        // humidity
        document.querySelector('.humidityV').innerHTML = json.main.humidity + ' %'
        // windy
        document.querySelector('.windyV').innerHTML = json.wind.speed + ' km/h'
        if (document.querySelector('.weather-desc').innerHTML === 'Clear') {
          document.querySelector('.weather-side').style.cssText =
            'background-image: url("/imgs/sunny.jpg")'
        } else {
          document.querySelector('.weather-side').style.cssText =
            'background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80")'
        }
        console.log(json)
      })
  }
  