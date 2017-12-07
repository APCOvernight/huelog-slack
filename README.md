# huelog-slack
[![NPM Package](https://img.shields.io/npm/v/huestatus.svg?maxAge=2592000)](https://npmjs.com/package/huelog-slack)
[![Build Status](https://travis-ci.org/APCOvernight/huelog-slack.svg?branch=master)](https://travis-ci.org/APCOvernight/huelog-slack) [![Coverage Status](https://coveralls.io/repos/github/APCOvernight/huelog-slack/badge.svg?branch=master)](https://coveralls.io/github/APCOvernight/huelog-slack?branch=master) [![Maintainability](	https://img.shields.io/codeclimate/maintainability/APCOvernight/huelog-slack.svg)](https://codeclimate.com/github/APCOvernight/huelog-slack/maintainability) 
[![Dependencies](https://img.shields.io/david/APCOvernight/huelog-slack.svg)](https://david-dm.org/APCOvernight/huelog-slack) [![Greenkeeper badge](https://badges.greenkeeper.io/APCOvernight/huelog-slack.svg)](https://greenkeeper.io/)

[Slack](https://slack.com/) output for huestatus events

## Features
- Broadcasts status events onto a slack channel

## Installation

```
npm install -g huestatus huelog-slack
```

Create a `.huerc` file on your home directory, see [HueStatus Docs](https://www.npmjs.com/package/huestatus) for more info. Add an object like this to the reporters array:

```js
{
  "name": "huelog-slack",
  "logLevel": "info",
  "slackWebhookUrl": "slack address here"
}

```

## Configuring a slack app (in slack)
* Click your workspace name in the top left to open the menu.
* Select Manage Apps.
* Select Custom Integrations
* Click on Incoming WebHooks
* Click Add Configuration
* Select the channel that messages will be posted to, or create a new channel
* Click Add Incoming WebHooks integrations
* The Webhook URL address should be copied into the `.huerc` configuration file, under the setting `slackWebhookUrl`


Then run `huestatus`.  As monitored statuses change, HueStatus will output information to the slack channel.
