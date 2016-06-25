module.exports = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'properties': {
    'name': {
      'type': 'string'
    },
    'stability': {
      'type': 'string'
    },
    'type': {
      'type': 'string'
    },
    'properties': {
      'type': 'object'
    }
  },
  'required': [
    // TODO: should name and type be required?
    'properties'
  ]
};