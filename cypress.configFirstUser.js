const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
    env: {
      userEmail: "test-mail21@yopmail.com",
      userPassword: "Qwerty123"
    }
  }
});