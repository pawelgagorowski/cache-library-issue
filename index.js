'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-central-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

const { doIt } = require('./utility');

exports.handler = async (event) => {
  const data = await doIt();
  return data
};

module.exports = {
  docClient
}
