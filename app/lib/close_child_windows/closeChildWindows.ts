export function closeChildWindows (mainWindow: any){
    const childWindows = mainWindow.getChildWindows()
    childWindows.forEach((item: any) => {
      item.close()
    })
}