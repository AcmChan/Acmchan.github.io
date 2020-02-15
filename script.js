function inc(offset){
  var t = new Date();
  return ((t.getTime()/(1000)) % 360 + offset*30)/360;
}

function hslToRgb(h, s, l){
  var r, g, b;

  if(s == 0){
      r = g = b = l; // achromatic
  }else{
      var hue2rgb = function hue2rgb(p, q, t){
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
  }

  return rgb(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
}

var elements = document.getElementsByClassName("gradient");

function colorChange(){
  var t = new Date();
  // tester.style.color = rgb(inc(0)*38+217,inc(120)*38+217,inc(240)*38+217);
  // tester.style.color = hslToRgb(inc(0)/360,1.0,.74);
  // tester.textContent = hslToRgb(inc(0)/360,1.0,.74);

  for(var i=0; i<elements.length; i++){
    elements[i].style.color = hslToRgb(inc(i),1.0,.74);
    elements[i].style.borderColor = hslToRgb(inc(i),1.0,.74);
    
  }

  document.documentElement.style.setProperty('--text-color-one',hslToRgb(inc(0),1.0,.74));
  document.documentElement.style.setProperty('--text-color-two',hslToRgb(inc(1),1.0,.74));
  document.documentElement.style.setProperty('--text-color-thr',hslToRgb(inc(2),1.0,.74));
  document.documentElement.style.setProperty('--text-color-fou',hslToRgb(inc(3),1.0,.74));
  document.documentElement.style.setProperty('--text-color-fiv',hslToRgb(inc(4),1.0,.74));
  document.documentElement.style.setProperty('--text-color-six',hslToRgb(inc(5),1.0,.74));

}

setInterval(colorChange, 1);

function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}
