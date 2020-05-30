var numballs = 8;
var wid = document.documentElement.clientWidth / 6, len = document.documentElement.clientHeight; //size of 
var dia = len / 17;
var curGo = 0, curSel = -1;
var rotAngle = 360 / (numballs + 1);
var colours = ["#FFFFFF", "#FFFFFF", "#C0D72F", "#EAEAEA", "#F9A51B", "#D64141", "#478BAA", "#FDEC10"];
var coloursLight = ["#FFFFFF", "#FFFFFF", "#dffa37", "#f7f7f7", "#ffb845", "#fa7878", "#6bbde3", "#fff24f"];
var bigScale = 1.7, selectScale = 1.2, focusColour = "#FFFFFF";
var txtSz = dia / bigScale; //Greek text letter size

/*
數學 #C0D72F
資訊 #EAEAEA
化學 #F9A51B
地科 #D64141
物理 #478BAA
生物 #FDEC10
*/