export const setZoom = (zoom: number, el: HTMLElement) => {
  zoom = Number(zoom) / 10;

  const transformOrigin = [0.5, 0.5];
  const s = "scale(" + zoom + ")",
    oString = transformOrigin[0] * 100 + "% " + transformOrigin[1] * 100 + "%";

  el.style["transform"] = s;
  el.style["transformOrigin"] = oString;

  el.style["transform"] = s;
  el.style["transformOrigin"] = oString;
};

//setZoom(5,document.getElementsByClassName('container')[0]);

// function showVal(a:number){
// const zoomScale = Number(a)/10;
// setZoom(zoomScale,document.getEle('container')[0])
// }
