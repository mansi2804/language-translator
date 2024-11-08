import React, { useState } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTranslate = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/translate", {
        text: text,
        target_language: targetLanguage,
      });

      setTranslatedText(response.data.translated_text);
      setError(null);
    } catch (err) {
      setError("Error translating text. Please check the input.");
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} p-6 transition-all duration-500 ease-in-out relative overflow-hidden`}>
      {/* Rotating Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#557C93] via-[#08203E] to-[#557C93] rounded-full animate-spin-slow z-0"></div>

      <div className="relative z-10 w-full text-center">
        {/* GitHub Icon and Dark Mode Toggle */}
        <div className="absolute top-6 right-6 flex items-center space-x-4 z-20">
          <a href="https://github.com/mansi2804" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-300 hover:text-white transition-all duration-300" />
          </a>
          <button
            onClick={toggleTheme}
            className="py-2 px-4 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>

        <h1 className="text-4xl font-extrabold mb-6 transform transition-transform duration-500 hover:scale-110 text-white">
          Language Translator
        </h1>

        {/* Input Field for Text */}
        <div className="w-full flex justify-center mb-6">
          <textarea
            placeholder="Enter text to translate"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-80 h-20 p-4 border-2 border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-black-500 transition-all duration-300 ease-in-out text-black font-bold bg-gradient-to-r from-[#486D85] to-[#3B5D77]"
          />
        </div>

        {/* Input Field for Target Language */}
        <div className="w-full flex justify-center mb-6">
          <input
            type="text"
            placeholder="Target language code (e.g., 'en', 'es')"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="w-80 h-20 p-4 border-2 border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-black-500 transition-all duration-300 ease-in-out text-black font-bold bg-gradient-to-r from-[#486D85] to-[#3B5D77]"
          />
        </div>

        {/* Translate Button */}
        <div className="w-full flex justify-center mb-8">
          <button
            onClick={handleTranslate}
            className="w-40 bg-gradient-to-r from-[#223F5A] to-[#3B5D77] text-white py-3 rounded-full shadow-xl hover:bg-gradient-to-l hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Translate
          </button>
        </div>

        {error && <p className="text-red-500 text-lg mb-4">{error}</p>}

        {/* Translated Text - Centered */}
        {translatedText && (
          <div className="w-full flex justify-center mb-10">
            <div className="w-80 text-center p-4 border-2 border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-black-500 transition-all duration-300 ease-in-out text-black bg-gradient-to-r from-[#486D85] to-[#3B5D77]">
              <h2 className="text-xl font-semibold text-black mb-2">Translated Text:</h2>
              <p className="text-lg text-gray-700">{translatedText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
