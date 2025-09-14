declare global {
  var process: {
    env: {
      TECH_SUMMARIZED_BASE_URL?: string;
      NEXT_PUBLIC_TECH_SUMMARIZED_BASE_URL?: string;
      [key: string]: string | undefined;
    };
  };
}

export {};
