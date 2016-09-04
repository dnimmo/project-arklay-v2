import { component } from '../../dom-creation'
import updateInventoryUI from '../../inventory-manager'

const itemButtons = items => {
  function createItemButton (item) {
    const openItemOptions = () => updateInventoryUI({inventoryClasses: ['inventory', 'open'], itemListClasses: ['hidden'], itemDetailsClasses: ['item-details'], item})

    return component({
      type: 'li',
      classes: ['button', 'inv'],
      content: item.displayName,
      eventListeners: [{event: 'click', function: openItemOptions}]
    })
  }

  return items.map(item => createItemButton(item))
}

export default itemButtons