const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl:"https://guest:welcome2qauto@qauto2.forstudy.space",
    env:{
      userEmail: "test-mail22@yopmail.com",
      userPassword: "Qwerty123"
    },
    video: true
  },
});
