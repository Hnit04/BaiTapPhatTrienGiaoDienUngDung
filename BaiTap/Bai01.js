document.addEventListener('DOMContentLoaded',()=>{
    function calculateBMI(mass,height){
        return mass/(height**2);
    } 
    var markWeights1 =78;
    var markHeights1 =1.69;
    var johnWeights1 =92;
    var johnHeights1 =1.95;
    var markWeights2 =95;
    var markHeights2 =1.88;
    var johnWeights2 =85;
    var johnHeights2 =1.76;
    var markBMI1= calculateBMI(markWeights1,markHeights1);
    var markBMI2= calculateBMI(markWeights2,markHeights2);
    var johnBMI1= calculateBMI(johnWeights1,johnHeights1);
    var johnBMI2= calculateBMI(johnWeights2,johnHeights2);
    
    var compareBMI1= markBMI1>johnBMI1;
    var compareBMI2= markBMI2>johnBMI2;
    
    console.log("Marks weights "+markWeights1+" kg and is "+markHeights1+" m tall. John weights "+johnWeights1+" kg and is "+johnHeights1+" tall. Mark has a higher BMI than John "+compareBMI1);
    console.log("Marks weights "+markWeights2+" kg and is "+markHeights2+" m tall. John weights "+johnWeights2+" kg and is "+johnHeights2+" tall. Mark has a higher BMI than John "+compareBMI2);
    
    document.getElementById('markBMI1').textContent= markBMI1.toFixed(2);
    document.getElementById('johnBMI1').textContent= johnBMI1.toFixed(2);
    document.getElementById('result1').textContent=compareBMI1;
    document.getElementById('markBMI2').textContent= markBMI2.toFixed(2);
    document.getElementById('johnBMI2').textContent= johnBMI2.toFixed(2);
    document.getElementById('result2').textContent=compareBMI2;
})
