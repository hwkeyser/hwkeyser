

function videoPlay() {
    var videoSource; 
    videoSource = document.getElementById("greenscreenvideo");
    // videoSource.muted = true;
    videoSource.play();
    // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  // if (isMobile) {
  //   videoSource.muted = false;
   
  // }
  // else
  // {

  //   videoSource.muted = false;

  // }
    


}

AFRAME.registerComponent('play-on-window-click', {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener('click', this.onClick);
  },
  pause: function () {
    window.removeEventListener('click', this.onClick);
  },
  onClick: function (evt) {
    var video = document.getElementById("greenscreenvideo");
    
    video.play();
  }
});



AFRAME.registerComponent('cursor-listener', {
        init: function () {
          this.el.addEventListener('click', function (evt) {
            //function to play video
            videoPlay();
           	
           	var sceneEl = document.querySelector('a-scene');

            sceneEl.querySelector('#camera').setAttribute('wasd-controls','');
           	var but = sceneEl.querySelector('#button');
           	// but.setAttribute('visible','false');

            //remove fog
            sceneEl.removeAttribute('fog');
            //remove button
            but.parentNode.removeChild(but);
            

            sceneEl.querySelector('#cursorElement').setAttribute('visible','false');
           //Make video visible
            sceneEl.querySelector('#placeholder').setAttribute('visible','true');
            // sceneEl.querySelector('#env').setAttribute('visible','true');
            console.log('I was clicked at: ', evt.detail.intersection.point);
          });
        }
      });







//function executed when the page is completely loaded
Pace.on('done', function() {
  
  var but = document.querySelector('a-scene').querySelector('#button');
  but.setAttribute('material','color:#2cd337');
  but.setAttribute('text__starttext','value:Start')
  but.setAttribute('cursor-listener','');
  
});



window.onload = function()
{
  var environ = document.body.dataset.environment || "#environment";
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    /* your code here */
    // console.log("It's mobile");
    // If it is mobile, do not load the photogrammetry environment
    let sceneEl = document.querySelector('a-scene');
    sceneEl.removeAttribute('fog');
    // let sceneEl = document.querySelector('a-scene');
    sceneEl.querySelector('#env').setAttribute('src',environ );
    // sceneEl.querySelector('#vidCard').setAttribute('play-on-window-click','');
  }
  else
  {

    // If it is a desktop then load the photogrammetry environemnt

    // console.log("No Mobile");
    let sceneEl = document.querySelector('a-scene');
    sceneEl.querySelector('#env').setAttribute('src',environ);
    

  }



}

function showExit()
{
  alert('Video Ended');
}
 


 

