import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

// Get the container element
const container = document.getElementById("root");

// Ensure the root element exists
if (!container) throw new Error("Failed to find the root element");

// Create the root React container
const root = createRoot(container);

// Initialize Netlify Identity if available
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    console.log("Netlify Identity Initialized", user);
  });

  window.netlifyIdentity.on("login", (user) => {
    console.log("User logged in", user);
  });

  window.netlifyIdentity.on("logout", () => {
    console.log("User logged out");
  });

  // Initialize Netlify Identity
  window.netlifyIdentity.init();
}

// Render the App component
root.render(<App />);
