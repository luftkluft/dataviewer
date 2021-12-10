export function closeChildWindows (mainWindow: any){
    let childWindows = mainWindow.getChildWindows()
    childWindows.forEach((item: any) => {
      item.close()
    })
}