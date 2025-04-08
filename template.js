export const vite_config_template = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})

`;
export const index_css_template = `@import "tailwindcss";`

export const app_component_template = (isRouter, isIcon) => {
  if (!isRouter && !isIcon) {
    return `const App = ()=> {
    return (
        <>
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6">
                <h1 className="text-4xl font-bold mb-6">
                    🚀 Welcome to Vite + Tailwind!
                </h1>
                <div className="flex justify-center">
                    <p className="text-lg text-gray-300 mb-4 text-center">
                        This setup was automatically generated. <br />
                        <span className="font-bold text-amber-400">Ab toh hogi na coding??</span>
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

export default App;`
  }

  if (isRouter && !isIcon) {
    return `import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {

    const Home = () => {
        return (<>
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6">
                <h1 className="text-4xl font-bold mb-6">
                    🚀 Welcome to Vite + Tailwind! + React Router Dom
                </h1>
                <div className="flex justify-center flex-col items-center">
                    <p className="text-lg text-gray-300 mb-4 text-center">
                        This setup was automatically generated. <br />
                        <span className="font-bold text-amber-400">Ab toh hogi na coding??</span>
                    </p>
                    <p className="text-lg text-gray-300 mb-4 text-center underline">
                        <Link to="/about">Go to About</Link>
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
        </>)
    }
   const About = () => {
    return (
        <div className='min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 text-2xl'>
            <h2 className="mb-4">About Page</h2>
            <Link
                to="/"
                className="text-lg underline text-amber-400 hover:text-amber-300 transition"
            >
                ← Back to Home
            </Link>
        </div>
    )
}
    const NotFound = () => {
        return (<div>404 error</div>)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App`;
  }

  if (!isRouter && isIcon) {
    return `import { House } from "lucide-react";
const App = () => {
    return (
        <>
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6">
                <h1 className="text-4xl font-bold mb-6">
                    🚀 Welcome to Vite + Tailwind! + Lucide React Icons
                </h1>
                <div className="flex justify-center flex-col items-center">
                    <p className="text-lg text-gray-300 mb-4 text-center">
                        This setup was automatically generated. <br />
                        <span className="font-bold text-amber-400">Ab toh hogi na coding??</span>
                    </p>
                    <p className="flex gap-x-4 my-4">
                        <House />
                        <span>Home</span>
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

export default App;`
  }

  if (isRouter && isIcon) {
    return `import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { House } from "lucide-react";

const App = () => {

    const Home = () => {
        return (<>
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6">
                <h1 className="text-4xl font-bold mb-6">
                    🚀 Welcome to Vite + Tailwind! + React Router Dom + Lucide
                </h1>
                <div className="flex justify-center flex-col items-center">
                    <p className="text-lg text-gray-300 mb-4 text-center">
                        This setup was automatically generated. <br />
                        <span className="font-bold text-amber-400">Ab toh hogi na coding??</span>
                    </p>
                    <p className="text-lg text-gray-300 mb-4 text-center underline">
                        <Link to="/about">Go to About</Link>
                    </p>
                    <p className="flex gap-x-4 my-4">
                        <House />
                        <span>Home</span>
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
        </>)
    }
   const About = () => {
    return (
        <div className='min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 text-2xl'>
            <h2 className="mb-4">About Page</h2>
            <Link
                to="/"
                className="text-lg underline text-amber-400 hover:text-amber-300 transition"
            >
                ← Back to Home
            </Link>
        </div>
    )
}

    const NotFound = () => {
        return (<div>404 error</div>)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App`;
  }
}