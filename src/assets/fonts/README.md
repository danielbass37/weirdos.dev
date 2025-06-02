# Fonts Directory

This directory contains custom font files for the Weirdos.dev project.

## Structure

- **`titles/`** - Font files specifically for headings and titles
- **`body/`** - Font files for body text and general content

## Current Font Setup

- **Primary Font**: Inter (loaded from Google Fonts)
  - Used for all text throughout the application
  - Available weights: 100, 200, 300, 400, 500, 600, 700, 800, 900

## Usage

### Adding Custom Title Fonts

1. Place your custom title font files (.woff2, .woff, .ttf) in the `titles/` folder
2. Import them in your CSS using `@font-face` declarations
3. Update the CSS custom property `--font-titles` in `src/styles/index.css`

### Adding Custom Body Fonts

1. Place your custom body font files in the `body/` folder
2. Import them in your CSS using `@font-face` declarations
3. Update the CSS custom property `--font-sans` in `src/styles/index.css`

## Example Font Import

```css
@font-face {
  font-family: 'CustomTitle';
  src: url('./assets/fonts/titles/CustomTitle.woff2') format('woff2'),
       url('./assets/fonts/titles/CustomTitle.woff') format('woff');
  font-weight: 700;
  font-display: swap;
}
``` 