import axios from "axios";
import hostname from "../constants/dev";

const api = axios.create({ baseURL: hostname });

// For static site - these functions will fail gracefully
// You can replace with a form service like Formspree, Netlify Forms, etc.
export const postContactMe = (formData) => {
  if (!hostname) {
    // Return a rejected promise for static site
    return Promise.reject(new Error('Contact form is not configured for static hosting. Please use a form service or mailto link.'));
  }
  return api.post("/form/send", formData);
};

export const statusCheck = () => {
  // Silently fail for static site - no backend to check
  if (!hostname) {
    return Promise.resolve({ status: 'static' });
  }
  return api.get("/status");
};
