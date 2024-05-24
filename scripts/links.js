const baseURL = "https://lightmanbro.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Failed to fetch links:", error);
  }
}

function displayLinks(weeks) {
  if (!Array.isArray(weeks)) {
    console.error("Expected an array but got:", weeks);
    return;
  }

  const weeksContainer = document.getElementById("weeksContainer");
  if (!weeksContainer) {
    console.error("Element with id 'weeksContainer' not found");
    return;
  }

  weeks.forEach(week => {
    const weekItem = document.createElement("li");
    weekItem.textContent = `Week ${week.week}`;

    week.links.forEach(link => {
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.textContent = link.title;
      weekItem.appendChild(linkElement);
    });

    weeksContainer.appendChild(weekItem);
  });
}

getLinks();

// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const apiKey = '38468ba944f232ca60c55c5b55943ed4';
const city = 'Lagos'; // Specify the city
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

async function apiFetch(){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayResults(data);
        }
        else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    let desc = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg;F - ${ desc.includes("sunshine") ? "🌞" : "☔"} ${desc}`;
}
