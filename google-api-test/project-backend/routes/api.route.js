const router = require('express').Router();
const { google } = require('googleapis')

const GOOGLE_CLIENT_ID = '1062515714621-35tek1at77jjse1o47cqa1trok77uses.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'http://localhost:3000'
)

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/create-tokens', async(req, res, next) => {
  try {
    const {code} = req.body
    const {tokens} = await oauth2Client.getToken(code)
    res.send(tokens)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router;
