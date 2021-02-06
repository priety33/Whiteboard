/******************************upload Image************************************/

const uploadImg = document.querySelector(".upload-img");
const FileInput = document.querySelector(".input-img");
uploadImg.addEventListener("click", function(e) {
  // stops default behaviour of anchor 
  e.preventDefault();
  FileInput.click();
  // change is called when image is selected and opened
  FileInput.addEventListener("change", function(e) {
    const writingPad = createBox();

    const img = document.createElement("img");
    // URL- inbuilt API in browser to convert image to url
    // e.target.files[0] - gives location of image
    let src = URL.createObjectURL(e.target.files[0]);
    img.src = src;
    img.setAttribute("class", "uploadedImgStyle");
    writingPad.appendChild(img);
    img.onload = function() {
      URL.revokeObjectURL(img.src);
    };
  });
});
/***********************************download Image*******************************/

const downloadTool = document.querySelector(".download-tool");
downloadTool.addEventListener("click", function(e) {
  // create anchor
  const a=document.createElement("a");
  // downloaded file will be of this name - file.png
  a.download="file.png";
a.href=board.toDataURL("image/png");
a.click();
a.remove()
});

