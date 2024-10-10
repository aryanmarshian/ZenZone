import LowStage from "./src/Components/Doctor/LowStage";

export const BASE_URL = "http://localhost:3000";

export const token = localStorage.getItem("token");

export const redirectUrls = {
    lowStage: "/low-stage",   // URL for early stage redirection
    midStage: "/mid-stage",       // URL for mid stage redirection
    highStage: "/high-stage", // URL for severe stage redirection
  };
  