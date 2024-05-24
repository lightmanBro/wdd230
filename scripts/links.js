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
