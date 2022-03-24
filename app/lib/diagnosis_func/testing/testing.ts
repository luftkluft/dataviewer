const { dialog } = require('electron')

export function testing() {
  //   try {
  //     const options = {
  //       type: 'question',
  //       buttons: ['Yes, please', 'No, thanks'],
  //       //defaultId: 2,
  //       title: 'Question',
  //       message: 'Do you want to do this?',
  //       detail: 'It does not really matter',
  //     };
  //     const response = dialog.showMessageBoxSync(null, options);
  //     if (response == 0) {
  //       return 'yes'
  //     } else {
  //       return 'no'
  //     }
  //   } catch (error) {
  //     return error
  //   }
  let sResult: string = ''
  let deep: number = 0
  const minDeep: number = 1
  const maxDeep: number = 6
  deep = Number(global.app_config.deep_test)
  try {
    sResult = '===== Запуск диагностики =====\n'
    try {
      if (deep >= minDeep || deep <= maxDeep) {
        // continue testing
      } else {
        sResult = `Глубина анализа может быть в интервале от ${minDeep} до ${maxDeep}, проверьте введённое значение!`
        return sResult
      }
    } catch (error) {
      return error
    }
    sResult += `Установлена глубина анализа: ${deep}\n`
    // TODO
    sResult += `===== Диагностика завершена =====`
    return sResult

  } catch (error) {
    return error
  }
}
