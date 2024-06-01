# 3D Room Scene with Randomly Placed Interior Objects

This project creates a 3D scene of a room with randomly placed interior objects within a 1000 sqft area using Three.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates how to create a 3D scene of a room with randomly placed interior objects using Three.js. The room is modeled within a 1000 sqft area, and various objects are placed randomly to simulate a realistic interior environment.

## Features

- 3D room modeled with Three.js
- Randomly placed interior objects
- Interactive camera controls
- Realistic lighting and shadows

## Technologies Used

- **Three.js**: A JavaScript 3D library that makes WebGL simpler
- **JavaScript**: The programming language used for the logic
- **HTML5**: Markup language for the web page structure
- **CSS3**: Style sheet language for styling the web page

## Project Setup

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/3d-room-scene.git
    ```

2. Navigate to the project directory:

    ```bash
    cd 3d-room-scene
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run start
    ```

The application will be available at `http://localhost:3000`.

## Project Structure


- **public/**: Contains the `index.html` file.
- **src/**: Source files for the project.
  - **assets/**: Contains textures and models.
  - **scripts/**: JavaScript files for setting up the scene, objects, and main logic.
  - **styles/**: CSS files for styling the application.
- **webpack.config.js**: Configuration file for Webpack.

## Usage

After setting up the project, you can start the development server and view the 3D room scene in your browser. Use the mouse to interact with the scene:

- **Left Click + Drag**: Rotate the camera
- **Scroll Wheel**: Zoom in/out
- **Right Click + Drag**: Pan the camera

## Contributing

Contributions are always welcome!

To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

