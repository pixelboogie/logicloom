# Logic Loom

## Description
Logic Loom is a web application that demonstrates how to set up and create an OpenAI Chat Completion with a React.js front end. The user can enter a question, and the application will display a response generated by the OpenAI Chat Completions API. For example, you might ask, "What day is it?" and receive a response like, "Friday, but you should check the calendar."

## Table of Contents
- [Technologies Used](#Technologies-Used)
- [Installation](#installation)
- [Usage](#usage)
- [Helpful Resources](#helpful-resources)
- [Helpful Terminal Commands](#helpful-terminal-commands)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
- **OpenAI Chat Completions API**: For generating responses to user queries.
- **React.js**: Front-end framework for building the user interface.
- **Express**: Back-end framework for handling API requests.

## Installation
To set up this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/logic-loom.git

   cd logic-loom

2. **Install Dependencies:**
    Install the back-end dependencies:

        cd backend
        npm install

    Install the front-end dependencies:

        cd frontend
        npm install

3. **Create Environment Variables:**

    Create a .env file in the root of the backend directory and add your OpenAI API key:

        OPENAI_API_KEY=your_openai_api_key_here

4. **Run the Application:**

    Start the back-end server:

        cd backend
        npm start

    Start the front-end development server:

        cd frontend
        npm start


5. **Access the Application:**

    Open your web browser and navigate to http://localhost:3000 to interact with the app.

# Usage #
Once the application is running, you can type a question into the input field, and the OpenAI-generated response will be displayed on the page.

# Contributing #
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. You can also open issues to report bugs or suggest new features.

# License #
This project is licensed under the MIT License. See the LICENSE file for more information.
