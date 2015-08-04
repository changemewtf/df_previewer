(function() {
  var canvas, ctx, image;

  canvas = document.getElementById('canvas');

  ctx = canvas.getContext('2d');

  image = new Image();

  image.src = 'static/images/curses_800x600.png';

  image.onload = function() {
    var i, imgd, j, pix, ref, savedImageData, startImageData, uniqueColor;
    ctx.drawImage(image, 0, 0);
    startImageData = document.getElementById('imageStart');
    startImageData.src = canvas.toDataURL('image/png');
    imgd = ctx.getImageData(0, 0, 160, 192);
    pix = imgd.data;
    uniqueColor = [0, 0, 255];
    console.log(pix[0], pix[1], pix[2], pix[3]);
    console.log(pix[4], pix[5], pix[6], pix[7]);
    for (i = j = 0, ref = pix.length; j <= ref; i = j += 4) {
      if (pix[i] === 255 && pix[i + 1] === 0 && pix[i + 2] === 255) {
        pix[i + 3] = 0;
      }
      if (pix[i] === 255 && pix[i + 1] === 255 && pix[i + 2] === 255) {
        pix[i] = uniqueColor[0];
        pix[i + 1] = uniqueColor[1];
        pix[i + 2] = uniqueColor[2];
      }
    }
    ctx.putImageData(imgd, 0, 0);
    savedImageData = document.getElementById('imageOut');
    return savedImageData.src = canvas.toDataURL('image/png');
  };

}).call(this);
