const emojiObj = require('emojis-list')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

// create color document
const createEmojis = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, emojiObj)
})

const emojis = map(createEmojis, keys(emojiObj))

module.exports = app => {
  app.get('/emojis', (req, res) => {
    res.send(emojis)
  })
}
