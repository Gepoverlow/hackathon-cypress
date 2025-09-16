import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://hackthefuture.bignited.be/",
    viewportHeight: 960,
    viewportWidth: 1536,
    defaultCommandTimeout: 25000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
