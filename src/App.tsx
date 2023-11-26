import { useState } from "react";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center selection:bg-green-900">
      <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <img
          src={logo}
          className="animate-speed h-60 motion-safe:animate-spin"
          alt="logo"
        />
        <style>
          {
            "\
            .animate-speed{\
              animation-duration:20s;\
            }\
          "
          }
        </style>
        <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
          JesseJesse.com + Typescript + Tailwindcss
        </p>
        <p className="mt-3">
          <button
            type="button"
            className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
        <code className="text-[#8d96a7]">tail.jessejesse.com</code>
          
        </p>
        <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://github.com/sudo-self"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
          {" | "}
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://imac.jessejesse.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            macOS
          </a>
        </p>
        <img src={poweredBy} className="mx-auto my-8" alt="powered-by" />
      </header>
    </div>
  );
}

export default App;
