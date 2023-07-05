describe('Home page', function () {
  it('Get Started should lead to the doc with install commands', function (browser) {
    browser
      .navigateTo('http://bs-local.com:3001')
      .click(browser.element.find('header').findByText('Get started'))
      .assert.titleContains('Installation')
      .assert.elementPresent(browser.element.findByText('Get started with Tailwind CSS'))
      .assert.visible(browser.element.findByText('npm install -D tailwindcss'))
      .assert.visible(browser.element.findByText('npx tailwindcss init'))
      .click(browser.element.findByText('Using PostCSS'))
      .assert.visible(browser.element.findByText('npm install -D tailwindcss postcss autoprefixer'))
    ;
  })

  it('should have constraint-based section', function(browser) {
    browser
      .navigateTo('http://bs-local.com:3001')
      .assert.visible('#constraint-based')
      .assert.visible(browser.element.find('#constraint-based').findByText('Constraint-based'))
      .click(browser.element.find('#constraint-based').findByText('Learn more'))
      .assert.titleContains('Utility-First ')
      .assert.elementPresent(browser.element.findByText('Utility-First Fundamentals'))
    ;
  })

  it('should have build-anything section', function(browser) {
    browser
      .navigateTo('http://bs-local.com:3001')
      .assert.visible('#build-anything')
      .assert.visible(browser.element.find('#build-anything').findByText('Build anything'))
      .click(browser.element.find('#build-anything').findByText('Get started'))
      .assert.titleContains('Installation')
      .assert.elementPresent(browser.element.findByText('Get started with Tailwind CSS'))
    ;
  })

  it('should have performance section', function(browser) {
    browser
      .navigateTo('http://bs-local.com:3001')
      .assert.visible('#performance')
      .assert.visible(browser.element.find('#performance').findByText('Performance'))
      .click(browser.element.find('#performance').findByText('Learn more'))
      .assert.visible(browser.element.findByText('Optimizing for Production'))
    ;
  })
})
