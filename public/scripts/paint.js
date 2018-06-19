const colorBox = document.getElementById('color-box');
const colorTitle = document.getElementById('title');
const nextColor = document.getElementById('next');
const prevColor = document.getElementById('prev');
const chromeBar = document.getElementsByTagName('meta')["theme-color"];
let colorIndex = 0;

function paintColor(colorDetails){
  let colorsCombo = colorDetails.colors[0];
  for (var c = 1; c < colorDetails.colors.length; c++) {
    colorsCombo+= `,${colorDetails.colors[c]}`;
  }
  colorBox.style.backgroundImage = `linear-gradient(180deg, ${colorsCombo})`;
  colorTitle.innerHTML = `<span>${colorDetails.title}</span>`
  chromeBar.content = colorDetails.colors[0];

}

paintColor(colorList[colorIndex]);

nextColor.addEventListener("click", function(){
  if(colorIndex >= colorList.length)
    colorIndex = 0;
  colorIndex++;
  paintColor(colorList[colorIndex]);
}); 

prevColor.addEventListener("click", function(){
  if(colorIndex <= 0)
    colorIndex = colorList.length - 1;
  colorIndex--;
  paintColor(colorList[colorIndex]);
});