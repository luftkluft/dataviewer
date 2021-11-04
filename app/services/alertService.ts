export const Alert = require('electron-alert')

export let alert = new Alert()
export let swalOptions = {
  position: 'top-end',
  title: 'Title',
  text: 'Text',
  icon: 'warning',
  // showConfirmButton: true,
  // showCancelButton: true,
  timer: 10000,
}
