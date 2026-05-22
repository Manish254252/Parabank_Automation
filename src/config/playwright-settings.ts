export const paths = {
  videos: 'videos',
  proofs: 'proofs',
};

export const playwrightUse = {
  baseURL: 'https://parabank.parasoft.com/parabank/',
  actionTimeout: 15_000,
  navigationTimeout: 30_000,
  headless: false,
  launchOptions: {
    slowMo: 250,
  },
  video: 'on' as const,
};

export const testTimeout = 60_000;
