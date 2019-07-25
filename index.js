import qrcode from 'qrcode'
window.QR_CODE = ({targetText, imgSelector}) => {
  qrcode.toDataURL(
    targetText,
    (err, dataUrl) => {
      // QRコード生成エラー
      if (err) {
        console.error(`QR_CODE err:${err}`)
        return
      }
      // imgタグ取得エラー
      const imgElm = document.querySelector(imgSelector)
      if (!imgElm) {
        console.error(`QR_CODE err:not found ${imgSelector}`)
        return
      }
      imgElm.src = dataUrl
    }
  )
}