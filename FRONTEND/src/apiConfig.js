// Backend base URL. Set REACT_APP_API_URL in the hosting environment (e.g. Netlify);
// falls back to the local Express server for development.
const API_URL = (process.env.REACT_APP_API_URL || "http://localhost:8090").replace(/\/$/, "");

export default API_URL;
