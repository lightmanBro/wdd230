const baseURL = "https://lightmanbro.github.io/wdd230/";
const linksURL = "https://lightmanbro.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      console.log(data);
      displayLinks(data);
    } catch (error) {
      console.error("Failed to fetch links:", error);
    }
  }
  
  getLinks();

  function displayLinks(weeks) {
    const weeksContainer = document.getElementById("weeksContainer"); // Assuming you have an element with id="weeksContainer" to hold the links
  
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
  