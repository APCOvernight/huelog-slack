const IncomingWebhook = require('@slack/client').IncomingWebhook

class SlackReport {
  constructor (config) {
    this.config = config
    if (!this.config.slackWebhookUrl) {
      throw new Error('slackWebhookUrl setting required.')
    }

    this.url = this.config.slackWebhookUrl
  }

  async start () {
    this.webhook = new IncomingWebhook(this.url)
  }

  async log (level, status, message) {
    const msg = {
      text: message
    }
    this.webhook.send(msg, function (err, header, statusCode, body) {
      if (err) {
        console.error('Error:', err)
      }
    })
  }
}

module.exports = SlackReport
