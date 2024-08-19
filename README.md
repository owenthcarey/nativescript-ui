# NativeScript UI Example

This repository demonstrates how to create a simple, high-quality NativeScript app using the `CollectionView` and `MaterialBottomNavigation` plugins. The app showcases a multi-tab navigation structure with dynamically generated color grids, offering a visually engaging and responsive UI experience.

## Features

- **CollectionView Integration**: Efficiently displays a grid of colors in both vertical and horizontal orientations. The `CollectionView` plugin allows for smooth scrolling and easy management of large data sets.
- **MaterialBottomNavigation Integration**: Implements a modern bottom navigation bar using the `MaterialBottomNavigation` plugin, providing a user-friendly tab-based navigation across different sections of the app.
- **Dynamic Color Generation**: Utilizes a service to generate random colors on the fly, ensuring a unique and dynamic UI for each user session.

## Project Structure

- **Models**: Contains the `Color` class, which represents individual colors and their sub-colors.
- **Services**: Includes the `ColorService`, responsible for generating random color arrays used throughout the app.
- **Components**:
    - `ExploreComponent`: Displays a vertically oriented `CollectionView` with nested horizontal `CollectionView` instances, showcasing sub-colors.
    - `HomeComponent`: Presents a simple `CollectionView` grid of randomly generated colors.
    - `NotificationsComponent`: Similar to `HomeComponent`, but with a smaller `CollectionView` grid layout.
    - `ProfileComponent`: Features a `CollectionView` grid layout with a full-width header and smaller cells, adapting dynamically to screen size.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/owenthcarey/nativescript-ui.git
   cd nativescript-ui
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Run the App**:
   ```sh
   ns run android
   ns run ios
   ```
