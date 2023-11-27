declare global {
  interface Console {
    superLog: (num: number) => number;
  }
  declare var alwaysNumber: number;
}

export {};
