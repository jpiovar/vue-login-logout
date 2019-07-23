// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('h4.card-title')
      .assert.containsText('h4.card-title', 'Simple Quora Login')
      .assert.elementCount('input.form-control', 2)
      .end();
  },
};
