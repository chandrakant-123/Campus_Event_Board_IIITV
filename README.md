# Campus Event Board - IIIT Vadodara

This is the existing Campus Event Board website updated for Lab Assignment 6. The original page layout, colours, navigation, campus images, event descriptions, registration form, student table, and other project pages have been kept. Only the changes needed for the Lab 6 tasks have been added.

## Team members

| Student name | Roll number | Role |
|---|---:|---|
| Hanvate Chandrakant Devidas | 40 | Team Leader |
| Muhammad Faizan | 56 | Team Member |
| Mohd Tahseen Raza | 55 | Team Member |
| Akash Chaman | 08 | Team Member |
| Ramesh Kumar Bhagat | 71 | Team Member |

## Files used for Lab 6

- `index.html` - the existing homepage with the event search area, event container, registration form, and `script.js` link.
- `style.css` - the original stylesheet with small changes for the new controls and mobile navigation state.
- `script.js` - JavaScript for event rendering, search filtering, hamburger navigation, event bubbling, and form validation.
- `events.json` - the event data file loaded by `fetch()`.
- `Notes6.pdf` - answers to all 10 Lab 6 questions, the team cover page, and the final `script.js` code appendix.
- `Lab6_Answers.docx` - the editable Word copy of the answers and code appendix.
- `Output Screenshort/LAB 6/` - screenshots taken while checking the Lab 6 features.
- `Output Screenshort/LAB 5/` - the screenshots from the earlier Lab 5 project.

## How to run

1. Open this project folder in Visual Studio Code.
2. Make sure the Live Server extension is installed.
3. Right-click `index.html` and select **Open with Live Server**.
4. Do not open `index.html` directly using `file://`. The `fetch('events.json')` request needs the page to run through a local server.
5. Press F12 in the browser and open the Console tab to see the event data and messages from the handlers.

## Lab 6 features

- Events are loaded from `events.json` using `fetch()` and `async/await`.
- Event cards are created in JavaScript from the event data. They are not written one by one in the HTML.
- Each event shows its seat status as `Full`, `Few Left`, or `Open`.
- The search box filters events by title or category while typing. Pressing Escape clears the search and shows the events again.
- The existing hamburger button opens and closes the navigation on smaller screens.
- The RSVP Interest buttons are used to demonstrate event bubbling with `event.target`. They only show a demo message; they do not submit a real registration.
- The registration form uses required fields, email validation, a 10-digit mobile number pattern, and a custom rule that checks the name length.
- The form checks the entered values in the browser and shows either an error message or a success message for the demonstration.

## Requirement map

| Requirement | Where it is shown |
|---|---|
| A1 | `index.html` links `script.js` before `</body>` with `defer`. |
| A2 | `script.js` uses `const` and `let`. The event data also uses string, number, and boolean values. |
| A3 | `events.json` stores the events as an array of objects. |
| A4 | `getSeatStatus()` returns `Full`, `Few Left`, or `Open` based on the seats left. |
| A5 | `renderEvents()` uses a `for...of` loop to go through the events. |
| A6 | `formatEvent(eventItem)` takes an event and returns a readable details string. |
| A7 | `filterEvents` is an arrow function that uses `filter()`. |
| A8 | `eventCount` is declared inside `renderEvents()`, so it is local to that function. The scope explanation is in `Notes6.pdf`. |
| B1 | `script.js` uses `querySelector()`, `querySelectorAll()`, and `getElementById()` to select page elements. |
| B2 | `renderEvents()` uses `createElement()`, `textContent`, and `appendChild()` to create the cards. |
| B3 | The code uses `textContent`, `classList`, `style`, and `setAttribute()` while rendering the cards and updating page messages. |
| B4 | The hamburger button uses a click listener and `classList.toggle()` to open and close the navigation. |
| B5 | The RSVP click handler reads `event.target` on the parent event grid. |
| B6 | The search input filters events while typing, and Escape clears the search. |
| B7 | `loadEvents()` uses `fetch()`, `async/await`, and `try/catch` to handle Loading, Success, and Error states. |
| B8 | The registration form uses required fields, `type="email"`, a mobile number pattern, `setCustomValidity()`, `checkValidity()`, and `preventDefault()`. |
| B9 | `console.log()` and `console.error()` show event data and messages from the handlers in DevTools. |

## Event data note

The original five event titles, descriptions, categories, and image references have been kept. The earlier project did not have seat counts or online/offline values, so the `seats` and `online` values in `events.json` are sample values for demonstrating the Lab 6 tasks. Dates that were not available are shown as `Not specified` instead of adding guessed dates.

## Checks and screenshots

The website was opened with Live Server and checked in the browser. The following checks were done:

- The page loaded the five events from `events.json` and displayed the event cards.
- Searching for `Technology` showed the matching event. Pressing Escape cleared the search.
- The Loading state was captured with Network throttling enabled. The Success state showed the `events.json` request with status `200`.
- The Error state was checked when the `events.json` request could not be found. The file was then restored and the events loaded successfully again.
- The form was checked with invalid and corrected details to show its validation error and success messages.
- The RSVP button was clicked and its message was checked in the DevTools Console.

The screenshots are saved in `Output Screenshort/LAB 6/`:

1. `01_Events_Rendered.png` - events displayed from `events.json`.
2. `02_Search_Filter.png` - the search result while typing.
3. `03_Fetch_Loading.png` - the Loading state.
4. `04_Fetch_Success.png` - successful fetch and rendered events.
5. `05_Fetch_Error.png` - the error message when event data could not be loaded.
6. `06_Form_Validation_Error.png` - the form with invalid details.
7. `07_Form_Validation_Success.png` - the form after correcting the details.
8. `08_RSVP_Handler.png` - the RSVP click message in the Console.

The folder `Output Screenshort/LAB 5/` contains the earlier Lab 5 screenshots.

## GitHub status

GitHub repository:

https://github.com/chandrakant-123/Campus_Event_Board_IIITV/

The updated Lab 6 files in this project folder have not yet been pushed to the public repository. The team leader still needs to upload the updated `index.html`, `style.css`, `script.js`, `events.json`, and `README.md`, and commit the changes with a clear commit message. The repository should be checked after the upload to make sure all the files are there.

GitHub Pages has not been enabled or checked for this Lab 6 update, so a live website link is not included. GitHub Pages is optional for this assignment.
