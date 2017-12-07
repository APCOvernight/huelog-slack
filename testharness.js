const SlackReport = require('./index')
const reportHarness = async () => {
  const config = {
    'slackWebhookUrl': 'https://hooks.slack.com/services/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'
  }
  const logger = new SlackReport(config)
  await logger.start()
  await logger.log('level', 'status', ':sheep: Mary had a little lamb')
  await logger.log('level', 'status', '❄️ Whose fleece was white as snow')
  await logger.log('level', 'status', 'And everywhere that Mary went')
  await logger.log('level', 'status', 'The lamb was sure to go')
}

//
// ----------------
// :building_construction: Started Build: Highstreet develop #840 (View Build)

module.exports = reportHarness()
