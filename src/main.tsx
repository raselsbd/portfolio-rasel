
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import { HelmetProvider } from 'react-helmet-async';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import './index.css';

  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
  });

  createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  