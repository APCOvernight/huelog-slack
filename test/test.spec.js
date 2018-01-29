/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

const chai = require('chai')
chai.use(require('sinon-chai'))
const expect = chai.expect
const sinon = require('sinon')
const SlackReport = require('../')

let mockConfig

describe('SlackReport Class', () => {
  beforeEach(() => {
    mockConfig = {
      name: 'SlackReport',
      slackWebhookUrl: 'slack_address_here'
    }
  })

  it('It should have a Log method', async () => {
    const moduleInstance = new SlackReport(mockConfig, {})
    expect(moduleInstance.log).to.be.a('function')
  })

  it('It should have a start method', async () => {
    const moduleInstance = new SlackReport(mockConfig, {})
    expect(moduleInstance.log).to.be.a('function')
  })

  it('It should set the internal configuration based on the config', async () => {
    const moduleInstance = new SlackReport(mockConfig, {})
    moduleInstance.start()
    expect(moduleInstance.url).to.equal(mockConfig.slackWebhookUrl)
    expect(moduleInstance.webhook._slackUrl).to.equal(mockConfig.slackWebhookUrl)
  })

  it('It should throw a missing setting exception if slack URL is missing', async () => {
    mockConfig = {
      name: 'SlackReport'
    }

    expect(() => { const c = new SlackReport(mockConfig, {}) }).to.throw('slackWebhookUrl setting required.')
  })

  it('It logs - writing errors to the console', async () => {
    const moduleInstance = new SlackReport(mockConfig, {})
    moduleInstance.start()
    const logStub = sinon.stub(moduleInstance.webhook, 'send').callsFake((a, s) => { s('****') })
    const consoleStub = sinon.stub(console, 'error')
    moduleInstance.log('1', '2', '3')
    expect(JSON.stringify(logStub.args[0][0])).to.equal(JSON.stringify({ text: '3' }))
    expect(JSON.stringify(consoleStub.args[0])).to.equal(JSON.stringify(['Error:', '****']))

    logStub.restore()
    consoleStub.restore()
  })

  it('It logs - no errors to the console', async () => {
    const moduleInstance = new SlackReport(mockConfig, {})
    moduleInstance.start()
    const logStub = sinon.stub(moduleInstance.webhook, 'send').callsFake((a, s) => { s(undefined) })
    const consoleStub = sinon.stub(console, 'error')
    moduleInstance.log('1', '2', '3')
    expect(JSON.stringify(logStub.args[0][0])).to.equal(JSON.stringify({ text: '3' }))
    expect(consoleStub).to.have.not.been.called

    logStub.restore()
    consoleStub.restore()
  })
})
