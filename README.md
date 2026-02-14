# Tydii Digital Landing Website

A modern, responsive landing website built with the MERN stack (MongoDB, Express, React, Node.js) featuring a custom 3D dithered waves background.

## Features

- **Landing Page** with animated 3D dithered waves background
- **Products Page** showcasing upcoming products
- **About Page** with company information and social links
- **Responsive Design** optimized for all devices
- **Dark Theme** with lime green accents
- **React Router** for seamless navigation

## Tech Stack

- **Frontend**: React 18, React Router DOM, Three.js, React Three Fiber
- **Backend**: Express.js, Node.js
- **Styling**: CSS3 with CSS Variables
- **Build Tool**: Create React App

## Installation

1. Install root dependencies:
```bash
npm install
```

2. Install client dependencies:
```bash
cd client
npm install
```

3. Install server dependencies:
```bash
cd server
npm install
```

## Running the Application

### Development Mode

Run both client and server concurrently:
```bash
npm run dev
```

Or run them separately:

**Client (runs on http://localhost:3000):**
```bash
cd client
npm start
```

**Server (runs on http://localhost:5000):**
```bash
cd server
npm run dev
```

### Production Mode

1. Build the React app:
```bash
cd client
npm run build
```

2. Start the server:
```bash
cd server
npm start
```

## Project Structure

```
tydii-digital/
├── client/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── Dither.js          # 3D dithered waves background
│       │   ├── Dither.css
│       │   ├── Navbar.js
│       │   ├── Navbar.css
│       │   ├── ProductCard.js
│       │   └── ProductCard.css
│       ├── pages/
│       │   ├── Landing.js
│       │   ├── Landing.css
│       │   ├── Products.js
│       │   ├── Products.css
│       │   ├── About.js
│       │   └── About.css
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       └── index.css
├── server/
│   ├── index.js
│   └── package.json
├── package.json
└── README.md
```

## Pages

- **/** - Landing page with hero section and animated background
- **/products** - Products showcase page
- **/about** - About page with company information

## Customization

### Colors

Edit CSS variables in `client/src/index.css`:
- `--bg-primary`: Main background color
- `--accent-lime`: Lime green accent color
- `--text-primary`: Primary text color

### Dither Background

Modify the Dither component props in `client/src/pages/Landing.js`:
- `waveSpeed`: Animation speed
- `waveFrequency`: Wave frequency
- `waveAmplitude`: Wave amplitude
- `waveColor`: RGB color array [r, g, b]
- `colorNum`: Number of colors for dithering
- `pixelSize`: Pixel size for dithering effect

## License

ISC
