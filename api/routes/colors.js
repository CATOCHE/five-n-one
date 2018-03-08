// css-color-names is found in node_modules, it is an object where peach
// property consists of a color name and a color number in hex
// e.g. "pink": "#ffc0cb"
const csscolorsObj = require('css-color-names')
const { map, keys, prop } = require('ramda')
// uuid is found in node_modules and contains a function to calculate
// an Universal Unique ID
const uuid = require('uuid')

// create color document
// this function is to be called by the map function and will be applied
// to each color element.
// this function  takes a color name and looks it up in the color list Object
// to obtain the color number for the value.
const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, csscolorsObj)
})

// 'keys' takes an Object and returns an array containing a list of alice
// property names.
//'map' can then work on this array containing only using the color names.
const colors = map(createColor, keys(csscolorsObj))

// the anonymus function that is 'exported' returns in res.send a call to
// function 'color'
module.exports = app => {
  app.get('/colors', (req, res) => {
    res.send(colors)
  })
}
