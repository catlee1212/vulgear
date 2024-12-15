/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
