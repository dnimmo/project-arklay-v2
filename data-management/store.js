import { saveGame } from './save-game.js'

const dataStore = {
  inventory: {},
  room: {}
}

const dataUpdated = {
  inventory: new Event('data-updated-inventory'),
  room: new Event('data-updated-room')
}

const emitUpdateEvent = type => document.dispatchEvent(dataUpdated[type])

const getData = type => dataStore[type]

const updateData = (type, data) => {
  dataStore[type] = data
  emitUpdateEvent(type)
  saveGame(dataStore)
}

module.exports = {
  getData,
  updateData
}
