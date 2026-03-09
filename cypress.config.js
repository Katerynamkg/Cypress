const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   allowCypressEnv: false,

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
  },
});
