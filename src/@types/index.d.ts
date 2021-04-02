export {};

declare global {
  interface ImportMeta {
    env: {
      PROD: boolean;
      DEV: boolean;
    };
  }
}
