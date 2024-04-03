## Todo Task Manager

This is a Beginner Friendly Todo Task Manager built using React and Redux. It allows users to add, edit,View and delete tasks. The state management is handled using Redux, and the application also utilizes local storage to persist the tasks.

### Features

- Add new tasks
- View Tasks
- Edit existing tasks
- Delete tasks
- Local storage persistence

### Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/hemant7581/Todo-Task-Manager.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Todo-Task-Manager
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm start
    ```

### Usage

Once the development server is running, you can access the Todo Task Manager application by visiting `http://localhost:3000` in your web browser.

### Code Overview

- `src/components/TodoList.js`: This file contains the main TodoList component, responsible for rendering the list of todos, handling user interactions, and dispatching Redux actions.
- `src/store/todoSlice.js`: This file contains Redux slice for managing todos, including actions and reducers.
- `src/index.js`: Entry point of the application where Redux store is configured and the App component is rendered.
- `src/App.js`: Main component where TodoList component is rendered.

### Dependencies

- React
- Redux
- React-Redux
- React Icons
- React Toastify
- Bootstrap

### Repository

You can find the code for this project on [GitHub](https://github.com/hemant7581/Todo-Task-Manager).

### Credits

This Todo Task Manager application is created by [Hemant Srivastav](https://github.com/hemant7581).

### License

This project is licensed under the MIT License.
