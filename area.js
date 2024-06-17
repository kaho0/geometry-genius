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
}