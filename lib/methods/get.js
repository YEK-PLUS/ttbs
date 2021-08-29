const { Base, ValidDocumentText } = require('../config');

const get = ({ connector }) => async ({ ttbsNo }) => {
  // eslint-disable-next-line no-restricted-globals
  if (!ttbsNo || isNaN(ttbsNo)) {
    return {
      status: false,
      error: 'invalid ttbsNo',
      doc: false,
    };
  }

  const { res, status } = await connector(Base, {
    body: {
      BelgeNo: ttbsNo,
    },
  });
  if (!status) return { status, error: 'document not found', doc: false };
  const doc = {
    belgeNo: res[1].child[1].child[0].text,
    belgeTarihi: res[9].child[1].child[0].text,
    belgeDurumu: res[11].child[1].child[0].text,
    belgeDurumuBool: res[11].child[1].child[0].text === ValidDocumentText,
    isletmeAdi: res[3].child[1].child[0].text,
    isletmeSahibi: res[5].child[1].child ? res[5].child[1].child[0].text : '',
    isletmeAdres: res[7].child[1].child[0].text,
  };
  return {
    status,
    doc,
  };
};

module.exports = get;
