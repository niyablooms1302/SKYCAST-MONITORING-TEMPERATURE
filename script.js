const cities = {
    mumbai: {
        name: "Mumbai, India",
        temp: 28,
        feels: 30,
        condition: "Mostly Sunny",
        icon: "☀️",
        humidity: "72%",
        wind: "14 km/h",
        visibility: "10 km",
        pressure: "1012 hPa"
    },

    delhi: {
        name: "New Delhi, India",
        temp: 31,
        feels: 33,
        condition: "Sunny",
        icon: "☀️",
        humidity: "58%",
        wind: "11 km/h",
        visibility: "8 km",
        pressure: "1008 hPa"
    },

    london: {
        name: "London, UK",
        temp: 16,
        feels: 15,
        condition: "Cloudy",
        icon: "☁️",
        humidity: "79%",
        wind: "18 km/h",
        visibility: "9 km",
        pressure: "1015 hPa"
    },

    tokyo: {
        name: "Tokyo, Japan",
        temp: 22,
        feels: 23,
        condition: "Partly Cloudy",
        icon: "🌤️",
        humidity: "65%",
        wind: "10 km/h",
        visibility: "12 km",
        pressure: "1011 hPa"
    }
};

function searchCity() {

    const input = document
        .getElementById("cityInput")
        .value
        .trim()
        .toLowerCase();

    if (!input) {
        return;
    }

    const data = cities[input];

    if (!data) {
        alert("Demo data available for: Mumbai, Delhi, London and Tokyo.");
        return;
    }

    document.getElementById("city").textContent = data.name;
    document.getElementById("temperature").textContent = data.temp;
    document.getElementById("feelsLike").textContent = data.feels;
    document.getElementById("condition").textContent = data.condition;
    document.getElementById("weatherIcon").textContent = data.icon;
    document.getElementById("humidity").textContent = data.humidity;
    document.getElementById("wind").textContent = data.wind;
    document.getElementById("visibility").textContent = data.visibility;
    document.getElementById("pressure").textContent = data.pressure;
}

document
    .getElementById("cityInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            searchCity();
        }

    });

const today = new Date();

document.getElementById("date").textContent =
    today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });