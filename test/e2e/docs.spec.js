describe('Docs page', function () {
  it('should be reachable from home', function (browser) {
    browser
      .navigateTo('http://bs-local.com:3001')
      .click(browser.element.find('header').findByText('Docs'))
      .assert.titleContains('Installation')
      .assert.visible(browser.element.findByText('Get started with Tailwind CSS'))
      .assert.visible(browser.element.findByText('npm install -D tailwindcss'))
    ;
  })

  it('should be have working left bar', function (browser) {
    browser.window.maximize(function () {
      browser
        .navigateTo('http://bs-local.com:3001/docs')
        .assert.visible(browser.element.findByText('Get started with Tailwind CSS'))
        .click(browser.element.findByText('Screen Readers'))
        .assert.visible(browser.element.findByText('Screen-reader-only elements'))
        .click(browser.element.findByText('Skew'))
        .assert.visible(browser.element.findByText('Hardware acceleration'))
        .click(browser.element.findByText('Border Radius'))
        .assert.visible(browser.element.findByText('Utilities for controlling the border radius of an element.'))
      ;
    })
  })
})
