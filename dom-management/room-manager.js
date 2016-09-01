// Elements that need to be updated
import { room } from './elements'

import {
  component,
  render
} from './common-functions'

import { getRoom } from '../data-management/room'
import { addItem, hasItemBeenPickedUp } from '../data-management/inventory'
import { getData } from '../data-management/store'

function addButton ({displayText, rel, link}) {
  const getNewRoom = () => getRoom(link)
  const button = component('li', [rel], [{key: 'onclick', value: getNewRoom}], false, displayText || rel)
  return button
}

function processItem (item) {
  if (!item || hasItemBeenPickedUp(item)) return {}
  addItem(item)
  return component('p', ['additional-info', 'extra-message'], false, false, '== Item added to inventory ==')
}

function processDirections (directions) {
  return component('ul', ['direction-options'], [{key: 'id', value: 'directions'}],   directions.map(direction => addButton(direction)), false)
}

const updateRoomUI = () => {
  const roomInfo = getData('room')
  const description = component('p', false, false, false, roomInfo.description)
  const surroundings = component('p', false, false, false, roomInfo.surroundings)
  const directions = processDirections(roomInfo.directions)
  const roomObject = component('div', false, false, [description, surroundings, directions, processItem(roomInfo.item)], false)

  render(room, roomObject)
}

module.exports = {
  updateRoomUI
}
