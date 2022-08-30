
let clipVideo = document.querySelector(".vid")
clipVideo.addEventListener("mouseover", function (e) {
   clipVideo.play();
})
clipVideo.addEventListener("mouseout", function (e) {
   clipVideo.pause();
})

