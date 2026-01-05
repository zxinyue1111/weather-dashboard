/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENWEATHERMAP_API_KEY: string;
  // If you add more variables to .env later, list them here too
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}