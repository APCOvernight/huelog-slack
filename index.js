const IncomingWebhook = require('@slack/client').IncomingWebhook

/**
 * Hue Reporter
 */
class SlackReport {
  /**
   * @param {Object} config Reporter config
   */
  constructor (config) {
    this.config = config
    if (!this.config.slackWebhookUrl) {
      throw new Error('slackWebhookUrl setting required.')
    }

    this.url = this.config.slackWebhookUrl
  }

  /**
   * Set up webhook
   */
  async start () {
    this.webhook = new IncomingWebhook(this.url)
  }

  /**
   * Log a status change to slack
   * @param  {String}  level   Level of log event
   * @param  {String}  status  Status change
   * @param  {String}  message Message to send
   * @return {Promise}
   */
  async log (level, status, message) {
    const msg = {
      text: message
    }
    return this.webhook.send(msg, err => {
      if (err) {
        console.error('Error:', err)
      }
    })
  }
}

module.exports = SlackReport
