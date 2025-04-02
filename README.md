# Vite Tailwind Starter Kit

Vite Tailwind Starter Kit is a CLI tool that quickly sets up a Vite + React + Tailwind CSS project with just one command. It automates the installation of dependencies, configures Tailwind CSS, and updates the necessary files.

## Features

- Installs the latest version of Vite
- Configures Tailwind CSS with PostCSS and Autoprefixer
- Updates `tailwind.config.js` and `index.css` automatically
- Generates a default `App.jsx` template with Tailwind styling
- Provides a seamless development experience with minimal setup

## Installation

To install the CLI globally, run:

```sh
npm i vite-tailwind-starter-kit
```

## Usage

Create a new Vite + Tailwind project using:

```sh
vite-tailwind
```

This will:

1. Create a new Vite project with the latest version.
2. Install Tailwind CSS along with PostCSS and Autoprefixer.
3. Configure `tailwind.config.js` with the correct content paths.
4. Add Tailwind directives to `src/index.css`.
5. Generate a styled `App.jsx` component.

## Commands

- `vite-tailwind <project-name>` – Initializes a new project with Vite and Tailwind CSS.

## Example

```sh
vite-tailwind my-app
cd my-app
npm install
npm run dev
```

## Generated Files

### `src/index.css`

```css
@import "tailwindcss
```

### `src/App.jsx`

```jsx
function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-4xl font-bold mb-6">
          🚀 Welcome to Vite + Tailwind!
        </h1>
        <div className="flex justify-center">
          <p className="text-lg text-gray-300 mb-4 text-center">
            This setup was automatically generated. <br />
            <span className="font-bold text-amber-400">
              Ab toh hogi na coding??
            </span>
          </p>
        </div>

        <a
          href="https://x.com/megh_bari"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 inline-flex items-center gap-2 px-4 cursor-pointer py-2 rounded-md bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md"
        >
          Follow Megh Bari
        </a>
      </div>
    </>
  );
}

export default App;
```

## License

This project is licensed under the MIT License.


## Happy Coding 🎈