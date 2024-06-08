# Customize Umbrella

This project is an umbrella customization tool designed for an umbrella seller. It allows users to preview their custom umbrellas by selecting a color and uploading a logo. The tool provides an instant preview of the umbrella with the selected color and logo.

## Features

- Choose from three different umbrella colors: Pink, Blue, and Yellow.
- Upload a logo to preview on the umbrella.
- Real-time display of the customized umbrella.
- Display loading icon during logo upload and show the logo file name once uploaded.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You will need a web browser and a basic code editor.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Ronakpiraka/StarAppsStudioProjects.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd customize-umbrella
    ```

3. **Open the `index.html` file in your web browser:**

    - If you are using a code editor like VSCode, right-click on the `index.html` file and select "Open with Live Server".
    - Alternatively, you can open the `index.html` file directly in your web browser.


### Explanation of Files

- **index.html:** The main HTML file containing the structure of the webpage.
- **styles.css:** The CSS file for styling the webpage.
- **script.js:** The JavaScript file for handling interactions and functionality.
- **images/**: Folder containing the umbrella images and icons used in the project.

## How It Works

1. **HTML Structure:**

    The HTML file contains two main sections:
    - The left section (`.left-section`) displays the umbrella preview.
    - The right section (`.right-section`) contains the customization options, including color selection, instructions, and the upload button.

2. **CSS Styling:**

    The CSS file styles the layout and appearance of the customization tool. It includes styling for the container, sections, buttons, and the logo upload button.

3. **JavaScript Functionality:**

    - **Color Selection:** 
        The script adds event listeners to the color buttons. When a button is clicked, it updates the umbrella image based on the selected color.

    - **Logo Upload:**
        The script handles the file upload process. When the upload button is clicked, it triggers the file input. When a file is selected, it displays a loading icon and simulates an upload delay. Once the upload is complete, it displays the uploaded logo on the umbrella and updates the button text with the file name.

## Usage

1. **Select an Umbrella Color:**
    Click on one of the color buttons to change the umbrella color.

2. **Upload a Logo:**
    Click the "Upload Logo" button and select a logo file (.png or .jpg, max 5MB). The logo will be displayed on the umbrella for a preview.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

