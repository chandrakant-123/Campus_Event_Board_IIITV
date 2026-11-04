# Campus Event Board – IIIT Vadodara

A simple and responsive web-based platform for displaying and exploring campus events at **Indian Institute of Information Technology Vadodara (IIITV)**.

The Campus Event Board helps students discover upcoming college events, search events by title or category, check event details, and interact with event cards through a user-friendly interface.

## Features

- **Event Listing:** Displays campus events in an organized card layout.
- **Dynamic Event Loading:** Loads event information from a JSON file using JavaScript Fetch API.
- **Search Events:** Search for events by title or category.
- **Event Details:** Displays event information such as date, time, venue, category, and available seats.
- **Seat Availability:** Shows the availability status of event seats.
- **RSVP Interaction:** Provides a demo RSVP interaction for events.
- **Login Page:** Includes a basic login interface.
- **About Page:** Provides information about the project.
- **Responsive Design:** Designed to work on different screen sizes.
- **Dark Theme:** Includes dark theme styling.

## Technologies Used

- HTML5 – Structure of web pages
- CSS3 – Styling and responsive layout
- JavaScript – Dynamic functionality and user interactions
- JSON – Storage of event information
- Fetch API – Loading event data asynchronously
- Visual Studio Code – Development environment

## Project Structure

```text
Campus_Event_Board/
│
├── index.html
├── script.js
├── events.json
│
├── About.html
├── About.css
│
├── Loggin.html
├── login.css
│
├── theme-dark.css
│
└── images/
```

*Note: The project structure above shows the main application files. Additional assets may also be present in the repository.*

## How to Run the Project

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Install the **Live Server** extension if it is not already installed.
4. Open `index.html`.
5. Right-click and select **Open with Live Server**.
6. The project will open in your browser.

**Important:** Run the project using Live Server or another local HTTP server because the Fetch API is used to load `events.json`.

## How It Works

1. The homepage displays the available campus events.
2. JavaScript fetches event data from `events.json`.
3. Event information is dynamically displayed on the webpage.
4. Users can search for events using the search functionality.
5. Users can view event information and try the demo RSVP interaction.

## Project Limitations

- This project uses frontend technologies only.
- Event information is stored in a JSON file.
- No backend server or database is connected.
- Login functionality is a frontend interface and does not provide real authentication.
- RSVP interactions are for demonstration purposes and are not permanently stored.

## Future Improvements

- Add backend and database integration.
- Implement secure user authentication.
- Store event registrations permanently.
- Add an admin dashboard to manage events.
- Send event notifications and registration confirmations.

## Repository

GitHub: https://github.com/chandrakant-123/Campus_Event_Board_IIITV

---

**Campus Event Board – IIIT Vadodara**

A web development project built using HTML, CSS, JavaScript, and JSON.
