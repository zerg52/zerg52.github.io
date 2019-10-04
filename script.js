window.onload = function(){
  var width = window.innerWidth;
  var height = window.innrerHeight;
  var canvas = document.getElementById('canvas');

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  var renderer = new THREE.WebGLRenderer({canvas:canvas});
  renderer.setClearColor(0x000000);

  var scene = new THREE.Scene();
  var camer = new THREE.PerspectiveCamera(60,width/height,0.1,5000);
}
