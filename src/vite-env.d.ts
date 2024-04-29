/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string
  readonly VITE_NETWORK: 'mainnet' | 'testnet' | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}