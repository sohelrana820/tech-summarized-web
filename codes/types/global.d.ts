declare global {
  var process: {
    env: {
      [key: string]: string | undefined;
    };
  };
}

export {};
