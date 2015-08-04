canvas = document.getElementById 'canvas'
ctx = canvas.getContext '2d'

image = new Image()
image.src = 'static/images/curses_800x600.png'
image.onload = ->
  ctx.drawImage image, 0, 0

  startImageData = document.getElementById 'imageStart'
  startImageData.src = canvas.toDataURL 'image/png'

  imgd = ctx.getImageData 0, 0, 160, 192
  pix = imgd.data
  uniqueColor = [0, 0, 255]

  console.log pix[0], pix[1], pix[2], pix[3]
  console.log pix[4], pix[5], pix[6], pix[7]

  for i in [0..pix.length] by 4
    # magenta is transparent
    if pix[i] is 255 and pix[i + 1] is 0 and pix[i + 2] is 255
      pix[i + 3] = 0

    # white gets replaced?
    if pix[i] is 255 and pix[i + 1] is 255 and pix[i + 2] is 255
      pix[i] = uniqueColor[0]
      pix[i + 1] = uniqueColor[1]
      pix[i + 2] = uniqueColor[2]

  ctx.putImageData imgd, 0, 0

  savedImageData = document.getElementById 'imageOut'
  savedImageData.src = canvas.toDataURL 'image/png'
