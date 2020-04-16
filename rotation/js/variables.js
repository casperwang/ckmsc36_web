var numballs = 8;
var wid = document.documentElement.clientWidth / 6, len = document.documentElement.clientHeight; //size of 
var dia = len / 17;
var curGo = 0, curSel = -1;
var rotAngle = 360 / (numballs + 1);
var colours = ["#C0D72F", "#EAEAEA", "#F9A51B", "#D64141", "#478BAA", "#FDEC10"];
var bigScale = 1.7, selectScale = 1.2, focusColour = "#FFFFFF";
var txtSz = dia / bigScale; //Greek text letter size
var paths = [
	String.raw`<div class="lineDrawing"> <svg viewBox="0 0 ${50} ${50}">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
      	<path class="cls-1" d="M15.08,23.1c0,3.41.38,5.69,1.14,6.87s2.13,1.75,4.12,1.75q4.74,0,7.83-5.83t3.09-14.84V1.58h7.59V25.41a11.27,11.27,0,0,0,.77,4.79A2.49,2.49,0,0,0,42,31.72a2.91,2.91,0,0,0,2.64-1.51,8.79,8.79,0,0,0,.9-4.45v-1h1.73c0,.19,0,.4.06.62s0,.55,0,1a9.14,9.14,0,0,1-1.95,6.25,6.91,6.91,0,0,1-5.48,2.22,7,7,0,0,1-6.23-3.1q-2.09-3.1-2.13-9.38-1.89,6.45-5,9.47a11.06,11.06,0,0,1-8,3,9.21,9.21,0,0,1-6-1.9,10,10,0,0,1-3.3-5.58,20,20,0,0,0-.08,2.06A24.66,24.66,0,0,0,11.8,39.64c1.76,3.77,2.63,6,2.63,6.69a2.84,2.84,0,0,1-.92,2.23,3.72,3.72,0,0,1-2.53.82,3.07,3.07,0,0,1-2.71-1.19,7,7,0,0,1-.83-3.88c0-.43.06-1.83.17-4.2s.16-4.54.16-6.48q0-2.61-.12-7.37t-.13-6.88V1.58h7.56Z" transform="translate(${0} ${0})"/>  
      </g>
    </svg> </div>`, //Mu
    String.raw`<div class="lineDrawing"> <svg viewBox="0 0 ${50} ${50}">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
      	<path class="cls-1" d="M38,13.45c0,.47,0,1.14-.09,2q-.28,9-.28,12.65V31.5q0,7,.78,8.8a2.87,2.87,0,0,0,2.89,1.83,4.23,4.23,0,0,0,3.93-2.39c.87-1.59,1.38-4.11,1.53-7.54h2.35v.41q0,6.77-2.41,10t-7.55,3.2q-5.37,0-7.53-3.32T29.42,28.57q0-1.28.14-6.61t.23-8.76c-1.13,0-2.7-.1-4.68-.14S20.7,13,17.85,13q0,19.53-2.13,26.16T8.17,45.76a5.54,5.54,0,0,1-4.93-2.42c-1.09-1.6-1.63-4-1.63-7.27v-1.6H3.86a5.83,5.83,0,0,0,.91,3.35,3.07,3.07,0,0,0,2.57,1q3.86,0,5.47-5.25T14.64,13H12.58A11.87,11.87,0,0,0,7,14.07a4.83,4.83,0,0,0-2.57,3.34H2.25c.21-3.85,1.41-6.54,3.58-8.08S11.8,7,17.21,7q1.61,0,9.57.27t14.3.27A13.62,13.62,0,0,0,45.74,7c1-.4,1.54-1,1.54-1.79V5.08h2.15v.25c0,2.89-.72,5-2.18,6.27s-3.78,1.93-7,1.93c-.58,0-1,0-1.35,0S38.26,13.48,38,13.45Z" transform="translate(0 0)"/>
      </svg> </div>`, //Pi
    String.raw`<div class="lineDrawing"> <svg viewBox="0 0 ${50} ${50}">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
        <path class="cls-1" d="M38,13.45c0,.47,0,1.14-.09,2q-.28,9-.28,12.65V31.5q0,7,.78,8.8a2.87,2.87,0,0,0,2.89,1.83,4.23,4.23,0,0,0,3.93-2.39c.87-1.59,1.38-4.11,1.53-7.54h2.35v.41q0,6.77-2.41,10t-7.55,3.2q-5.37,0-7.53-3.32T29.42,28.57q0-1.28.14-6.61t.23-8.76c-1.13,0-2.7-.1-4.68-.14S20.7,13,17.85,13q0,19.53-2.13,26.16T8.17,45.76a5.54,5.54,0,0,1-4.93-2.42c-1.09-1.6-1.63-4-1.63-7.27v-1.6H3.86a5.83,5.83,0,0,0,.91,3.35,3.07,3.07,0,0,0,2.57,1q3.86,0,5.47-5.25T14.64,13H12.58A11.87,11.87,0,0,0,7,14.07a4.83,4.83,0,0,0-2.57,3.34H2.25c.21-3.85,1.41-6.54,3.58-8.08S11.8,7,17.21,7q1.61,0,9.57.27t14.3.27A13.62,13.62,0,0,0,45.74,7c1-.4,1.54-1,1.54-1.79V5.08h2.15v.25c0,2.89-.72,5-2.18,6.27s-3.78,1.93-7,1.93c-.58,0-1,0-1.35,0S38.26,13.48,38,13.45Z" transform="translate(0 0)"/>
      </svg> </div>`, //Pi
    String.raw`<div class="lineDrawing"> <svg viewBox="0 0 ${dia / 2} ${dia / 2}">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
        <path class="cls-1" d="M38,13.45c0,.47,0,1.14-.09,2q-.28,9-.28,12.65V31.5q0,7,.78,8.8a2.87,2.87,0,0,0,2.89,1.83,4.23,4.23,0,0,0,3.93-2.39c.87-1.59,1.38-4.11,1.53-7.54h2.35v.41q0,6.77-2.41,10t-7.55,3.2q-5.37,0-7.53-3.32T29.42,28.57q0-1.28.14-6.61t.23-8.76c-1.13,0-2.7-.1-4.68-.14S20.7,13,17.85,13q0,19.53-2.13,26.16T8.17,45.76a5.54,5.54,0,0,1-4.93-2.42c-1.09-1.6-1.63-4-1.63-7.27v-1.6H3.86a5.83,5.83,0,0,0,.91,3.35,3.07,3.07,0,0,0,2.57,1q3.86,0,5.47-5.25T14.64,13H12.58A11.87,11.87,0,0,0,7,14.07a4.83,4.83,0,0,0-2.57,3.34H2.25c.21-3.85,1.41-6.54,3.58-8.08S11.8,7,17.21,7q1.61,0,9.57.27t14.3.27A13.62,13.62,0,0,0,45.74,7c1-.4,1.54-1,1.54-1.79V5.08h2.15v.25c0,2.89-.72,5-2.18,6.27s-3.78,1.93-7,1.93c-.58,0-1,0-1.35,0S38.26,13.48,38,13.45Z" transform="translate(0 0)"/>
      </svg> </div>`, //Pi
    String.raw`<div class="lineDrawing"> <svg viewBox="0 0 ${dia / 2} ${dia / 2}">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
        <path class="cls-1" d="M38,13.45c0,.47,0,1.14-.09,2q-.28,9-.28,12.65V31.5q0,7,.78,8.8a2.87,2.87,0,0,0,2.89,1.83,4.23,4.23,0,0,0,3.93-2.39c.87-1.59,1.38-4.11,1.53-7.54h2.35v.41q0,6.77-2.41,10t-7.55,3.2q-5.37,0-7.53-3.32T29.42,28.57q0-1.28.14-6.61t.23-8.76c-1.13,0-2.7-.1-4.68-.14S20.7,13,17.85,13q0,19.53-2.13,26.16T8.17,45.76a5.54,5.54,0,0,1-4.93-2.42c-1.09-1.6-1.63-4-1.63-7.27v-1.6H3.86a5.83,5.83,0,0,0,.91,3.35,3.07,3.07,0,0,0,2.57,1q3.86,0,5.47-5.25T14.64,13H12.58A11.87,11.87,0,0,0,7,14.07a4.83,4.83,0,0,0-2.57,3.34H2.25c.21-3.85,1.41-6.54,3.58-8.08S11.8,7,17.21,7q1.61,0,9.57.27t14.3.27A13.62,13.62,0,0,0,45.74,7c1-.4,1.54-1,1.54-1.79V5.08h2.15v.25c0,2.89-.72,5-2.18,6.27s-3.78,1.93-7,1.93c-.58,0-1,0-1.35,0S38.26,13.48,38,13.45Z" transform="translate(0 0)"/>
      </svg> </div>`, //Pi
    String.raw`<div class="lineDrawing"> <svg viewBox="0 0 ${dia / 2} ${dia / 2}">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
        <path class="cls-1" d="M38,13.45c0,.47,0,1.14-.09,2q-.28,9-.28,12.65V31.5q0,7,.78,8.8a2.87,2.87,0,0,0,2.89,1.83,4.23,4.23,0,0,0,3.93-2.39c.87-1.59,1.38-4.11,1.53-7.54h2.35v.41q0,6.77-2.41,10t-7.55,3.2q-5.37,0-7.53-3.32T29.42,28.57q0-1.28.14-6.61t.23-8.76c-1.13,0-2.7-.1-4.68-.14S20.7,13,17.85,13q0,19.53-2.13,26.16T8.17,45.76a5.54,5.54,0,0,1-4.93-2.42c-1.09-1.6-1.63-4-1.63-7.27v-1.6H3.86a5.83,5.83,0,0,0,.91,3.35,3.07,3.07,0,0,0,2.57,1q3.86,0,5.47-5.25T14.64,13H12.58A11.87,11.87,0,0,0,7,14.07a4.83,4.83,0,0,0-2.57,3.34H2.25c.21-3.85,1.41-6.54,3.58-8.08S11.8,7,17.21,7q1.61,0,9.57.27t14.3.27A13.62,13.62,0,0,0,45.74,7c1-.4,1.54-1,1.54-1.79V5.08h2.15v.25c0,2.89-.72,5-2.18,6.27s-3.78,1.93-7,1.93c-.58,0-1,0-1.35,0S38.26,13.48,38,13.45Z" transform="translate(0 0)"/>
      </svg> </div>`, //Pi
    String.raw`<div class="lineDrawing"> <svg viewBox="0 0 ${dia / 2} ${dia / 2}">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
        <path class="cls-1" d="M38,13.45c0,.47,0,1.14-.09,2q-.28,9-.28,12.65V31.5q0,7,.78,8.8a2.87,2.87,0,0,0,2.89,1.83,4.23,4.23,0,0,0,3.93-2.39c.87-1.59,1.38-4.11,1.53-7.54h2.35v.41q0,6.77-2.41,10t-7.55,3.2q-5.37,0-7.53-3.32T29.42,28.57q0-1.28.14-6.61t.23-8.76c-1.13,0-2.7-.1-4.68-.14S20.7,13,17.85,13q0,19.53-2.13,26.16T8.17,45.76a5.54,5.54,0,0,1-4.93-2.42c-1.09-1.6-1.63-4-1.63-7.27v-1.6H3.86a5.83,5.83,0,0,0,.91,3.35,3.07,3.07,0,0,0,2.57,1q3.86,0,5.47-5.25T14.64,13H12.58A11.87,11.87,0,0,0,7,14.07a4.83,4.83,0,0,0-2.57,3.34H2.25c.21-3.85,1.41-6.54,3.58-8.08S11.8,7,17.21,7q1.61,0,9.57.27t14.3.27A13.62,13.62,0,0,0,45.74,7c1-.4,1.54-1,1.54-1.79V5.08h2.15v.25c0,2.89-.72,5-2.18,6.27s-3.78,1.93-7,1.93c-.58,0-1,0-1.35,0S38.26,13.48,38,13.45Z" transform="translate(0 0)"/>
      </svg> </div>`, //Pi
    String.raw`<div class="lineDrawing"> <svg viewBox="0 0 ${dia / 2} ${dia / 2}">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
        <path class="cls-1" d="M38,13.45c0,.47,0,1.14-.09,2q-.28,9-.28,12.65V31.5q0,7,.78,8.8a2.87,2.87,0,0,0,2.89,1.83,4.23,4.23,0,0,0,3.93-2.39c.87-1.59,1.38-4.11,1.53-7.54h2.35v.41q0,6.77-2.41,10t-7.55,3.2q-5.37,0-7.53-3.32T29.42,28.57q0-1.28.14-6.61t.23-8.76c-1.13,0-2.7-.1-4.68-.14S20.7,13,17.85,13q0,19.53-2.13,26.16T8.17,45.76a5.54,5.54,0,0,1-4.93-2.42c-1.09-1.6-1.63-4-1.63-7.27v-1.6H3.86a5.83,5.83,0,0,0,.91,3.35,3.07,3.07,0,0,0,2.57,1q3.86,0,5.47-5.25T14.64,13H12.58A11.87,11.87,0,0,0,7,14.07a4.83,4.83,0,0,0-2.57,3.34H2.25c.21-3.85,1.41-6.54,3.58-8.08S11.8,7,17.21,7q1.61,0,9.57.27t14.3.27A13.62,13.62,0,0,0,45.74,7c1-.4,1.54-1,1.54-1.79V5.08h2.15v.25c0,2.89-.72,5-2.18,6.27s-3.78,1.93-7,1.93c-.58,0-1,0-1.35,0S38.26,13.48,38,13.45Z" transform="translate(0 0)"/>
      </svg> </div>`, //Pi
    String.raw`<div class="lineDrawing"> <svg viewBox="0 0 ${dia / 2} ${dia / 2}">
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
        <path class="cls-1" d="M38,13.45c0,.47,0,1.14-.09,2q-.28,9-.28,12.65V31.5q0,7,.78,8.8a2.87,2.87,0,0,0,2.89,1.83,4.23,4.23,0,0,0,3.93-2.39c.87-1.59,1.38-4.11,1.53-7.54h2.35v.41q0,6.77-2.41,10t-7.55,3.2q-5.37,0-7.53-3.32T29.42,28.57q0-1.28.14-6.61t.23-8.76c-1.13,0-2.7-.1-4.68-.14S20.7,13,17.85,13q0,19.53-2.13,26.16T8.17,45.76a5.54,5.54,0,0,1-4.93-2.42c-1.09-1.6-1.63-4-1.63-7.27v-1.6H3.86a5.83,5.83,0,0,0,.91,3.35,3.07,3.07,0,0,0,2.57,1q3.86,0,5.47-5.25T14.64,13H12.58A11.87,11.87,0,0,0,7,14.07a4.83,4.83,0,0,0-2.57,3.34H2.25c.21-3.85,1.41-6.54,3.58-8.08S11.8,7,17.21,7q1.61,0,9.57.27t14.3.27A13.62,13.62,0,0,0,45.74,7c1-.4,1.54-1,1.54-1.79V5.08h2.15v.25c0,2.89-.72,5-2.18,6.27s-3.78,1.93-7,1.93c-.58,0-1,0-1.35,0S38.26,13.48,38,13.45Z" transform="translate(0 0)"/>
      </svg> </div>`, //Pi
];

var titles = [
  "Eὕρηκα!",
  "何謂專題？",
  "數學組",
  "資訊組",
  "物理組",
  "化學組",
  "生物組",
  "地科組",
  "影片、音樂"
];
/*
數學 #C0D72F
資訊 #EAEAEA
化學 #F9A51B
地科 #D64141
物理 #478BAA
生物 #FDEC10
*/