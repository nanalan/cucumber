const reporter = require('cucumber-html-reporter')
const exec = require('child_process').execSync
let failed = false

try {
  exec('node node_modules/cucumber/bin/cucumber.js -f json:report.json', { stdio: 'inherit' })
} catch(e) {
  failed = true
  //console.error(e)
}

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'report.json',
  output: 'report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  name: 'Test Results',
})

process.exit(failed ? 1 : 0)
