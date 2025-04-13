import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

const root = createRoot(container);

// Initialize Netlify Identity if available
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    console.log("Netlify Identity Initialized", user);
  });

  window.netlifyIdentity.init();
}

root.render(<App />);
