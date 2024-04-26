function update()
{
    console.log("aditya");
    var w=document.getElementById('weight').value
    var h=document.getElementById("height").value

    let bmi=w/(h*h)
    bmi=bmi.toFixed(2)
    console.log(w)
    document.querySelector(".displ").innerHTML=bmi;
    if(bmi<18.5)
    {
        document.querySelector(".displ").style.color="lightblue"
        document.getElementById("mr1").src="oats.webp"
        document.querySelector("#mr2").src="brocili.webp"
        document.querySelector("#mr3").src="apple.jpeg"
        document.querySelector("#mrt1").innerHTML="Oats"
        document.getElementById("mrt2").innerHTML="Brocli"
        document.getElementById("mrt3").innerHTML="Apple"
        document.getElementById("lr1").src="almonds.jpeg"
        document.querySelector("#lr2").src="egg.jpeg"
        document.querySelector("#lr3").src="sprouts.jpeg"
        document.querySelector("#lrt1").innerHTML="Almonds"
        document.getElementById("lrt2").innerHTML="Egg"
        document.getElementById("lrt3").innerHTML="Sprouts"
        document.getElementById("dr1").src="yogurt.jpeg"
        document.querySelector("#dr2").src="banana.jpeg"
        document.querySelector("#dr3").src="avacado.webp"
        document.querySelector("#drt1").innerHTML="Yoghurt"
        document.getElementById("drt2").innerHTML="Banana"
        document.getElementById("drt3").innerHTML="Avacado"

        document.getElementById("comment").innerHTML="You are Under Weight!"

    }
    else if(bmi<24.9 && bmi>18.5 )
    {
        document.querySelector('.displ').style.color="green"
       
        document.getElementById("lr1").src="oats.webp"
        document.querySelector("#lr2").src="brocili.webp"
        document.querySelector("#lr3").src="apple.jpeg"
        document.querySelector("#lrt1").innerHTML="Oats"
        document.getElementById("lrt2").innerHTML="Brocli"
        document.getElementById("lrt3").innerHTML="Apple"
        document.getElementById("mr1").src="almonds.jpeg"
        document.querySelector("#mr2").src="egg.jpeg"
        document.querySelector("#mr3").src="sprouts.jpeg"
        document.querySelector("#mrt1").innerHTML="Almonds"
        document.getElementById("mrt2").innerHTML="Egg"
        document.getElementById("mrt3").innerHTML="Sprouts"
        document.getElementById("dr1").src="yogurt.jpeg"
        document.querySelector("#dr2").src="banana.jpeg"
        document.querySelector("#dr3").src="avacado.webp"
        document.querySelector("#drt1").innerHTML="Yoghurt"
        document.getElementById("drt2").innerHTML="Banana"
        document.getElementById("drt3").innerHTML="Avacado"

        document.getElementById("comment").innerHTML="You are Fit And Normal"
    }
    else if(bmi<29.9 && bmi>24.9)
    {
        document.querySelector('.displ').style.color="orange"
       
        document.getElementById("mr1").src="oats.webp"
        document.querySelector("#mr2").src="brocili.webp"
        document.querySelector("#mr3").src="apple.jpeg"
        document.querySelector("#mrt1").innerHTML="Oats"
        document.getElementById("mrt2").innerHTML="Brocli"
        document.getElementById("mrt3").innerHTML="Apple"
        document.getElementById("dr1").src="almonds.jpeg"
        document.querySelector("#dr2").src="egg.jpeg"
        document.querySelector("#dr3").src="sprouts.jpeg"
        document.querySelector("#drt1").innerHTML="Almonds"
        document.getElementById("drt2").innerHTML="Egg"
        document.getElementById("drt3").innerHTML="Sprouts"
        document.getElementById("lr1").src="yogurt.jpeg"
        document.querySelector("#lr2").src="banana.jpeg"
        document.querySelector("#lr3").src="avacado.webp"
        document.querySelector("#lrt1").innerHTML="Yoghurt"
        document.getElementById("lrt2").innerHTML="Banana"
        document.getElementById("lrt3").innerHTML="Avacado"

        document.getElementById("comment").innerHTML="You are Slightly OverWeight"

    }
    else if(bmi>29.9)
    {
        document.querySelector('.displ').style.color="red"
       
        document.getElementById("dr1").src="oats.webp"
        document.querySelector("#dr2").src="brocili.webp"
        document.querySelector("#dr3").src="apple.jpeg"
        document.querySelector("#drt1").innerHTML="Oats"
        document.getElementById("drt2").innerHTML="Brocli"
        document.getElementById("drt3").innerHTML="Apple"
        document.getElementById("mr1").src="almonds.jpeg"
        document.querySelector("#mr2").src="egg.jpeg"
        document.querySelector("#mr3").src="sprouts.jpeg"
        document.querySelector("#mrt1").innerHTML="Almonds"
        document.getElementById("mrt2").innerHTML="Egg"
        document.getElementById("mrt3").innerHTML="Sprouts"
        document.getElementById("lr1").src="yogurt.jpeg"
        document.querySelector("#lr2").src="banana.jpeg"
        document.querySelector("#lr3").src="avacado.webp"
        document.querySelector("#lrt1").innerHTML="Yoghurt"
        document.getElementById("lrt2").innerHTML="Banana"
        document.getElementById("lrt3").innerHTML="Avacado"

        document.getElementById("comment").innerHTML="You are Obese"

    }
    
}
