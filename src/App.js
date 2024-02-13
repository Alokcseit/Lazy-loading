import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Suspense, lazy, useState, useEffect } from "react";

import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  const LazyAbout = lazy(() => import("./components/About"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {isLoading ? <DelayedFallback /> : <LazyAbout />}
              </Suspense>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

// Custom Suspense fallback with a delay
const DelayedFallback = () => {
  return (
    <div>
      {/* You can customize the loading UI here */}
      <p>Loading...</p>
    </div>
  );
};

export default App;
