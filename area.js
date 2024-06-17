function calculateTriangleArea(){
    // get triangle base
    const baseField=document.getElementById('triangle-base');
    const baseValueText=baseField.value;
    const base=parseFloat(baseValueText);
    console.log(base);

    const heightField=document.getElementById('triangle-height');
    const heightValueText=heightField.value;
    const height=parseFloat(heightValueText);
    console.log(height);

    const area=0.5*base*height;
   console.log(area);
   const areaSpan=document.getElementById('triangle-area');
   areaSpan.innerText=area;
}
function calculateRectangleArea()
{
    const widthField=document.getElementById('rectangle-width');
    const widthValueText=widthField.value;
    const width=parseFloat(widthValueText);
    console.log(width);

    const lengthField=document.getElementById('rectangle-length');
    const lengthValueText=lengthField.value;
    const length=parseFloat(lengthValueText);
    console.log(length);

    const area=width*length;
    console.log(area);

    const rectangleAreaSpan=document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText=area;
}

//reusable
function calculateParallelogramArea()
{
   const base=getInputValue('parallelogram-base');
  const length=getInputValue('parallelogram-height');
  const area=base*length;
  getInnerText('parallelogram-area',area);

}
function calculateEllipseArea()
{
   const base=getInputValue('ellipse-major-rad');
  const length=getInputValue('ellipse-minor-rad');
  const area= 3.14*base*length;
  const areaTwoDecimal=area.toFixed(2);
  getInnerText('ellipse-area',area);
 
}
function calculatePentagonArea()
{
   const base=getInputValue('pentagon-p');
  const length=getInputValue('pentagon-b');
  const area= 0.5*base*length;
  const areaTwoDecimal=area.toFixed(2);
  getInnerText('pentagon-area',area);
 
}
function calculateRhombusArea()
{
   const base=getInputValue('rhombus-d1');
  const length=getInputValue('rhombus-d2');
  const area= 0.5*base*length;
  getInnerText('rhombus-area',area);

}


function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const inputValueText=inputField.value;
    const value=parseFloat(inputValueText);
    return value;
}
 function getInnerText(fieldSpan,area){
     const areaSpan=document.getElementById(fieldSpan);
     areaSpan.innerText=area; 
 }