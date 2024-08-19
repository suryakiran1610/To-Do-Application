# To-Do List Web Application

This repository contains a To-Do List web application built using React for the frontend and Django REST Framework for the backend. The app allows users to register, log in, and manage their to-do tasks. Users can add, edit, delete, and filter their tasks based on their completion status.

## Features

- **User Registration and Login:** Users can register for a new account and log in using their credentials. Authentication tokens are stored in local storage.
- **Task Management:** Users can add new tasks, edit existing tasks, delete tasks, and mark tasks as completed or not completed.
- **Task Filtering:** Tasks can be filtered based on their completion status (e.g., completed, not completed).
- **API Integration:** The frontend communicates with the backend via RESTful API endpoints.
- **Database Management:** Tasks are stored in a database and are associated with the logged-in user.
- **Responsive UI:** The app has a responsive design, making it accessible on various devices.

## Technologies Used

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **React Router:** Used for routing between different pages in the application.
- **Axios:** A promise-based HTTP client for making API requests.
- **React Hook Form:** A library for managing forms in React.
- **React Toastify:** A library for displaying notifications.
- **CSS:** Used for styling the application.

### Backend

- **Django REST Framework:** A powerful and flexible toolkit for building Web APIs.
- **Django:** A high-level Python web framework that encourages rapid development and clean, pragmatic design.
- **SQLite3:** The database used for storing user data and tasks.

## Installation

### Prerequisites

- **Node.js and npm:** Ensure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).
- **Python and Django:** Ensure you have Python and Django installed. You can download Python from [here](https://www.python.org/) and install Django via pip.

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-webapp.git
   cd todo-webapp

2.Navigate to the frontend directory and install the dependencies:

```
cd frontend
npm install
```

3.Start the React development server:
```
npm start
```

Backend Setup

4.Navigate to the backend directory:

```
cd backend
```

5.Create a virtual environment and activate it:

```
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

6.Install the required Python packages:
```
pip install -r requirements.txt
```

7.Apply database migrations:

```
python manage.py migrate
```

8.Start the Django development server:
```
python manage.py runserver
```
Usage

1.Access the application by navigating to http://localhost:3000 in your web browser.

2.Register a new account or log in using your credentials.

3.Manage your tasks by adding, editing, deleting, and filtering them.

API Endpoints
The following API endpoints are used in the application:

-POST /myapp/register/ - Register a new user.
-POST /myapp/login/ - Log in a user.
-GET /search?user_id=<user_id> - Retrieve tasks for the logged-in user.
-POST /search/ - Add a new task.
-PATCH /search/<id>/ - Update a task.
-DELETE /search/<id>/ - Delete a task.

Folder Structure
frontend/: Contains the React frontend code.
    components/: Reusable UI components such as Todolist, Todosearch, and Todostatus.
    pages/: Page components such as Login, Register, and Todomain.
    App.js: Main application component.
    index.js: Entry point of the React application.
backend/: Contains the Django backend code.
    myapp/: Django app containing models, serializers, views, and URLs.