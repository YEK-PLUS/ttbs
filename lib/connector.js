const qs = require('qs');
const { html2json } = require('html2json');
const { decode } = require('html-entities');
const { ErrorText } = require('./config');

const connector = ({ fetch }) => (url, { body }) => fetch(url, {
  headers: {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  body: qs.stringify({
    ...body,
    'X-Requested-With': 'XMLHttpRequest',
  }),
  method: 'POST',
})
  .then((res) => res.text())
  .then((res) => ({
    status: !res.includes(ErrorText),
    res: decode(res),
  }))
  .then(({ res, status }) => ({
    status,
    res: status ? html2json(res) : false,
  }))
  .then(({ status, res }) => ({
    status,
    res: status
      ? res.child[0].child[3].child[1].child[3].child[1].child
      : false,
  }));
module.exports = connector;
