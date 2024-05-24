document.addEventListener('DOMContentLoaded', () => {
    const baseURL = 'https://yourgithubusername.github.io/chamber/';
    const membersURL = `${baseURL}data/members.json`;

    const directory = document.getElementById('directory');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    async function fetchMembers() {
        try {
            const response = await fetch(membersURL);
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
                <img src="${baseURL}images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
            `;
            directory.appendChild(card);
        });
    }

    gridViewButton.addEventListener('click', () => {
        directory.classList.remove('list');
        directory.classList.add('grid');
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
    });

    listViewButton.addEventListener('click', () => {
        directory.classList.remove('grid');
        directory.classList.add('list');
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
    });

    // Initial fetch and display
    fetchMembers();
});
