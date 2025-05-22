// /api/redirectRoot.js
module.exports = async function (context, req) {
  context.res = {
    status: 301,
    headers: {
      Location: 'https://www.trimmr.dev' + (req.url || '/')
    },
    body: null,
  };
};