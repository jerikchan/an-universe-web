/// <reference types="vite/client" />

// import env 
declare interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_APP_VERSION: string;
  VITE_API_URL: string;
  VITE_RECAPTCHA_SITE_KEY: string;
  VITE_RECAPTCHA_SECRET_KEY: string;
  VITE_CHAIN_ID: string;
  VITE_CHAIN_NAME: string;
  VITE_EXPLORER: string;
}
