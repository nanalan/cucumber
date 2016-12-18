const fetch = require('node-fetch')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
chai.should()

module.exports = function() {
  let hostname, call

  this.addTransform({
    captureGroupRegexps: ['[^ ]+'],
    transformer: a => a.toString(),
    typeName: 'str'
  })

  this.Given('I am using the Maths webservice', () => {
    hostname = 'localhost:8000'
  })

  this.When('I add {a:float} and {b:float}', (a, b) => {
    call = fetch(`http://${hostname}/add/${a}/${b}`)
      .then(res => res.json())
  })

  this.When('I divide {a:float} by {b:float}', (a, b) => {
    call = fetch(`http://${hostname}/div/${a}/${b}`)
      .then(res => res.json())
  })

  this.Then('I should recieve {n:float}', n => {
    return call.should.eventually.equal(n)
  })
}
