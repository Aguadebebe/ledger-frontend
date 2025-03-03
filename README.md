# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Title

                    EXPENSE LEDGER APP

## Todo next Section

//Start Trello account to write sprints and set small tasks for your project.

//Start a draw.io account and learn to write flow charts from a readme file. By writing a flow chart for Ledger App.

//Start 1 codewars javascript kata and work on it everyday until it's solved. Don't ask chatgpt for help!

//Learn to use design templates for creating html - css layouts

//Work on next feature of ledger App which is to have the saved

//savefile icon be comprised of all the items sent to the db gathered as a saved file instead of just a single Expense item. Then have it displayed back to the screen if clicked on.

//take out the button beside the savedfile icon.

// reroute it's funtionality to the trash icon will be moved back to the top of the sidebar.

// Add css selector that highlights the background of the element that the saved file icon is encaplulated in.

//Connect the highlited element and file to the trash icon logic that allows the trash icon to delete the highlighted element thus it's saved file contents.

## Table of Contents

-[ProjectTitle](#project-title)

- [TodoSection](#todo-section)

- [Description](#description)

- [Installation](#installation)

- [Features](#features)

- [Usage](#usage)

- [Project Structure](#project-structure)

- [Technologies Used](#technologies-used)

- [Contributing](#Contributing)

- [License](#license)

## Description

This Expense Ledger App is a financial tracking application that allows users to log and categorize expenses. It features an input form that collects expense details such as title, description, amount, date, and category. The app processes and displays expenses grouped by category, providing a summary of total expenses, categorized totals, and the number of recorded expense items.

The app allows users to save their expense data to a database. Saved files are represented as entries in a sidebar. Users can hover over entries for selection or deletion, and clicking an entry loads the associated expense data into a designated display area. A delete option enables users to remove highlighted saved files from both the UI and database.

This project follows the Atomic Design methodology for structuring UI components.

## Installation

Clone the repository: git clone https://github.com/yourusername/expense-ledger-app.git

Navigate to the project directory: cd expense-ledger-app

Install dependencies: npm install

Run the application: npm run dev

Run the backend (Ensure MongoDB is set up and .env is configured): node backend/app.js

## Features

Expense form for adding new expense items

Categorization of expenses with predefined categories

Real-time calculation of total expenses and categorized expense totals

Save and retrieve expense data from a MongoDB database

Sidebar display of saved files with hover and selection interactions

Delete saved files from UI and database

## Usage

Fill out the expense form and submit.

View real-time grouped totals and overall total expenses.

Save the current expense list using the save file option.

Click sidebar entries to reload saved expense data.

Use the delete option to remove a selected saved file.

## Project Structure

/src
/components
/atoms
/molecules
/organisms
/templates
/pages
/utils
/styles
/backend
app.js
db.js
routes/
models/
controllers/

## Technologies Used

Frontend: React, Vite, CSS Modules

State Management: React Context API

Backend: Node.js, Nodemon, Express, MongoDB, Mongoose, Cors, Dotenv

Other: Axios for API requests

## Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch (feature-branch).

Commit your changes.

Push to the branch.

Open a pull request.

## License

This project is licensed under the MIT License.
