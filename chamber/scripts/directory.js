const baseURL = "https://lightmanbro.github.io/wdd230/chamber";
const linksURL = `${baseURL}/data/members.json`;

document.addEventListener('DOMContentLoaded', () => {
    const directory = document.getElementById('directory');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    async function fetchMembers() {
        try {
            const response = await fetch(linksURL);
            if (!response.ok) throw new Error('Network response was not ok');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Failed to fetch members:', error);
        }
    }

    function displayMembers(members) {
        directory.innerHTML = '';
        members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card');
            card.innerHTML = `
                <img src="${baseURL}/images/${member.image}" alt="${member.name}">
                <br>
                <span>${member.membership}</span>
                <h2>${member.name} </h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
            `;
            directory.appendChild(card);
            console.log(member.image)
        });
    }

    gridViewButton.addEventListener('click', () => {
        document.querySelectorAll('.member-card').forEach(card=>{card.classList.remove('flex')
        card.querySelector('img').style.display="block"
        });
        directory.classList.remove('list');
        directory.classList.add('grid');
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
    });
    
    listViewButton.addEventListener('click', () => {
        document.querySelectorAll('.member-card').forEach(card=>{card.classList.add('flex')
        card.querySelector('img').style.display="none"
        });
        directory.classList.remove('grid');
        directory.classList.add('list');
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
    });

    // Initial fetch and display
    fetchMembers();
});
