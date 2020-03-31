const app = require('sme-self-eval-api/lib/app')
const { logger } = require('sme-self-eval-api/lib/logging')

app.listen(1337, () => {
  logger.info('Local API listening on 1337')
})
