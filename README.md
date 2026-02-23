# 🍺 Brewery Finder

Angular application for searching and viewing brewery information using [Open Brewery DB API](https://www.openbrewerydb.org/).

## About the Project

Test assignment demonstrating Angular development skills using modern approaches and best practices.

### Key Features

#### Smart Brewery Search
- City-based search
- Autocomplete with city suggestions
- Dynamic results loading
- Validation and error handling

#### Brewery List
- Cards with key information
- Adaptive grid (1-3 columns depending on screen size)
- Loading and empty state indicators
- Hover effects for interactivity

#### Detailed Information
- Modal window with complete brewery information
- Material Icons for visual data separation
- Brewery types, address, phone, website
- Clickable links and phone numbers

#### Custom UI Library
- **Button** 
- **Input**
- **Card**
- **Modal**
- **Loader**
- **Divider** 

### Technologies

- **Angular 21** 
- **TypeScript** 
- **SCSS** 
- **RxJS** 
- **Signals**
- **Standalone Components** 
- **Material Icons** 

### Performance Optimizations
- **ZoneLess** - zoneless approach
- **OnPush Change Detection** - minimizing change detection cycles
- **Standalone Components** - tree-shaking of unused code
- **Lazy loading potential** - ready structure for code splitting

### Design System
- **CSS Variables** - Colors, Typography, Spacing, Shadows & Transitions

### Architecture

```
Brewery/
├── src/
│   ├── app/
│   │   ├── core/          # API services, interfaces, enums
│   │   └── pages/         # Application pages
│   │       └── breweries/ # Breweries list page
│   └── styles/            # Global styles
├── libs/
│   └── ui/                # Reusable UI library
│       ├── common/        # Button, Input, Card, Loader, Divider
│       └── modal/         # Modal windows
```

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

Application will be available at `http://localhost:4200/`

### Production Build

```bash
npm run build
```

Built application will be in `dist/Brewery/` folder

