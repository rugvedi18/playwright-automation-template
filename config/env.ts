type EnvironmentConfig = {
  baseUrl: string;
};

const environment = process.env.TEST_ENV ?? 'qa';

const environmentConfigMap: Record<string, EnvironmentConfig> = {
  local: {
    baseUrl: 'http://127.0.0.1:3000',
  },
  qa: {
    baseUrl: 'https://playwright.dev',
  },
  staging: {
    baseUrl: 'https://playwright.dev',
  },
};

export const envConfig =
  environmentConfigMap[environment] ?? environmentConfigMap.qa;
