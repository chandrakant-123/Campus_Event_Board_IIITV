// Lab Assignment 6 - Campus Event Board

// B1: Select the HTML elements needed by the JavaScript.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
const navigationLinks = document.querySelectorAll('.nav-links a');
const eventGrid = document.querySelector('.event-grid');
const eventSearch = document.getElementById('event-search');
const eventStatus = document.querySelector('#event-status');
const registrationForm = document.querySelector('.registration form');
const nameInput = document.getElementById('name');
const formMessage = document.querySelector('#form-message');

// A3 + B7: The events array is loaded from events.json and is the single source of event data.
// A2: let is used because this array receives its value after fetch().
let events = [];

// A4: if / else decides the availability label from the number of seats.
function getSeatStatus(eventItem) {
    if (eventItem.seats === 0) {
        return 'Full';
    } else if (eventItem.seats < 5) {
        return 'Few Left';
    } else {
        return 'Open';
    }
}

// A6: This function accepts one event and returns a readable line.
function formatEvent(eventItem) {
    const mode = eventItem.online ? 'Online' : 'On campus';
    return `${eventItem.date} | ${eventItem.seats} seats left | ${mode}`;
}

// A7: Arrow function + filter() searches the event title and category.
const filterEvents = (eventList, searchText) => {
    const searchValue = searchText.toLowerCase().trim();

    return eventList.filter((eventItem) => {
        return eventItem.title.toLowerCase().includes(searchValue) ||
            eventItem.category.toLowerCase().includes(searchValue);
    });
};

// B2 + B3 + A5: Create the cards from the data using createElement() and a for...of loop.
function renderEvents(eventList) {
    // A8: eventCount is local to this function and cannot be used outside it.
    const eventCount = eventList.length;
    eventGrid.textContent = '';

    if (eventCount === 0) {
        eventStatus.textContent = 'No events match your search.';
        return;
    }

    // A5: Visit each event in the list once while building the visible cards.
    for (const eventItem of eventList) {
        const card = document.createElement('article');
        card.classList.add('event-card');
        card.classList.toggle('event-card--online', eventItem.online);
        card.classList.toggle('full', eventItem.seats === 0);
        card.setAttribute('aria-label', eventItem.title);

        const image = document.createElement('img');
        image.classList.add('event-card__image');
        image.setAttribute('src', eventItem.image);
        image.setAttribute('alt', eventItem.imageAlt);
        image.setAttribute('loading', 'lazy');

        const body = document.createElement('div');
        body.classList.add('event-card__body');

        const category = document.createElement('p');
        category.classList.add('event-card__tag');
        category.textContent = eventItem.category;

        const title = document.createElement('h3');
        title.textContent = eventItem.title;

        const description = document.createElement('p');
        description.classList.add('event-card__text');
        description.textContent = eventItem.description;

        const details = document.createElement('p');
        details.classList.add('event-card__details');
        details.textContent = formatEvent(eventItem); // A6: Use the function's returned string.

        const seatStatus = document.createElement('p');
        const statusText = getSeatStatus(eventItem);
        seatStatus.classList.add('event-card__status');
        seatStatus.classList.add(`status-${statusText.toLowerCase().replace(' ', '-')}`);
        seatStatus.textContent = statusText;
        seatStatus.style.fontWeight = '700'; // B3: Use the style property to highlight availability.

        // B5: This button lets the click handler demonstrate event bubbling.
        const rsvpButton = document.createElement('button');
        rsvpButton.classList.add('rsvp-button');
        rsvpButton.setAttribute('type', 'button');
        rsvpButton.setAttribute('aria-label', `RSVP interest for ${eventItem.title}`);
        rsvpButton.dataset.eventTitle = eventItem.title;
        rsvpButton.textContent = eventItem.seats === 0 ? 'Full' : 'RSVP Interest';
        rsvpButton.disabled = eventItem.seats === 0;

        body.appendChild(category);
        body.appendChild(title);
        body.appendChild(description);
        body.appendChild(details);
        body.appendChild(seatStatus);
        body.appendChild(rsvpButton);
        card.appendChild(image);
        card.appendChild(body);
        eventGrid.appendChild(card);
    }

    eventStatus.textContent = `${eventCount} event(s) displayed.`;
}

// B7: Fetch the event data with async/await and handle Loading, Success and Error states.
async function loadEvents() {
    eventStatus.textContent = 'Loading events...';

    try {
        const response = await fetch('events.json');

        if (!response.ok) {
            throw new Error('Could not load events.json.');
        }

        const eventData = await response.json();

        if (!Array.isArray(eventData)) {
            throw new Error('The event data must be an array.');
        }

        events = eventData;
        console.log('Events loaded successfully:', events); // B9: Inspect event data in DevTools Console.
        renderEvents(events);
        eventStatus.textContent = `Events loaded successfully. ${events.length} event(s) displayed.`;
    } catch (error) {
        console.error('Event loading error:', error); // B9: Inspect fetch errors in DevTools Console.
        eventGrid.textContent = '';
        eventStatus.textContent = 'Sorry, events could not be loaded. Please check events.json and refresh the page.';
    }
}

// B4: The hamburger button opens and closes the existing navigation list.
menuButton.addEventListener('click', () => {
    const menuIsOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', menuIsOpen);
    menuButton.setAttribute('aria-label', menuIsOpen ? 'Close navigation menu' : 'Open navigation menu');
});

// B4: Close the mobile menu after a navigation link is selected.
for (const link of navigationLinks) {
    link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation menu');
    });
}

// B5: The click bubbles from an RSVP button up to the eventGrid container.
eventGrid.addEventListener('click', (event) => {
    // event.target identifies the exact element that was clicked.
    if (event.target.classList.contains('rsvp-button')) {
        const eventTitle = event.target.dataset.eventTitle;
        eventStatus.textContent = `Interest noted for: ${eventTitle}. (Demo only)`;
        console.log('RSVP button clicked:', eventTitle);
    }
});

// B6: Filter the events whenever the user types in the search box.
eventSearch.addEventListener('input', () => {
    const matchingEvents = filterEvents(events, eventSearch.value);
    renderEvents(matchingEvents);
});

// B6: Pressing Escape clears the search and displays all events again.
eventSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        eventSearch.value = '';
        renderEvents(events);
    }
});

// B8: Custom validation rule - the name must contain at least 2 non-space characters.
function checkName() {
    if (nameInput.value.trim().length < 2) {
        nameInput.setCustomValidity('Please enter a name with at least 2 characters.');
    } else {
        nameInput.setCustomValidity('');
    }
}

nameInput.addEventListener('input', checkName);

// B8: Stop the demo form submission, check all fields, and display the result.
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    checkName();

    if (!registrationForm.checkValidity()) {
        formMessage.textContent = 'Please correct the highlighted fields and try again.';
        registrationForm.reportValidity();
        console.log('Form validation: invalid'); // B9: Check the handler in DevTools Console.
        return;
    }

    formMessage.textContent = 'Your details passed the form validation (demo only).';
    console.log('Form validation: successful');
});

// B8: Clear the custom validation message when the user resets the form.
registrationForm.addEventListener('reset', () => {
    nameInput.setCustomValidity('');
    formMessage.textContent = '';
});

// Start loading the event data after the page elements and handlers are ready.
loadEvents();
