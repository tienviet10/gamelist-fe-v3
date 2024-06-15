/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run gamelist-fe:serve',
        production: 'nx run gamelist-fe:preview',
      },
      ciWebServerCommand: 'nx run gamelist-fe:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
