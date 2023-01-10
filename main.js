function preload(){
classifier=ml5.imageClassifier("DoodleNet")
}
function setup(){
canvas=createCanvas(400,400)
canvas.center()
background ("white")
canvas.mouseReleased(classifyCanvas)
synth=window.speechSynthesis
}
function draw(){
strokeWeight(13)
stroke(0)
if (mouseIsPressed) {
line(pmouseX,pmouseY,mouseX,mouseY) 
}
}
function clearcanvas(){
    background ("white")
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}
function gotResult(error,results){
    if (error) {
        console.log(error)
    } else {
     console.log(results)   
     document.getElementById("label").innerHTML=results[0].label
     document.getElementById("confidence").innerHTML=Math.round(results[0].confidence*100)+"%"
     utter=new SpeechSynthesisUtterance(results[0].label)
     synth.speak(utter)
    }
}