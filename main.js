
function startClassification()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Ze5C3JOIj/", modelready)
}

var dog=0
var cat=0
var cow=0
var lion=0

function modelready()
{
    classifier.classify(gotResults)
}
function gotResults(error, results){
    if (error) {
        console.error(error)
    } else {
        console.log (results)
        random_number_r = Math.floor(Math.random()*255)+1
        random_number_g = Math.floor(Math.random()*255)+1
        random_number_b = Math.floor(Math.random()*255)+1

        document.getElementById("result_label").innerHTML=results[0].label
        document.getElementById("result_accuracy").innerHTML=(results[0].confidence*100).toFixed(2)

        document.getElementById("result_label").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")"
        document.getElementById("result_accuracy").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")"

        img=document.getElementById('defaultpic')
        if (results[0].label=="bark")
        {
            img.src='dog.gif'
            dog=dog+1
        } else if (results[0].label=="meow")
        {
            img.src='cat.gif'
            cat=cat+1
        }else if (results[0].label=="moo")
        {
            img.src='moo.gif'
            cow=cow+1
        } else if (results[0].label=="roar")
        {
            img.src='roar.gif'
            lion=lion+1
        } else 
        {
            img.src='ear.gif'
        }


    
    }
}