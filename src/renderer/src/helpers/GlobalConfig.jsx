export let printerIP = '10.0.0.123'
export let printerPort = 9100

export const setPrinterIP = (newIP) => {
  printerIP = newIP
  console.log('Printer IP updated!')
}

export const setPrinterPort = (newPort) => {
  printerPort = newPort
  console.log('Printer Port updated!')
}
