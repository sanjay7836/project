let div = document.querySelector(".main")
let btn = document.getElementById("btn")
let userip = document.getElementById("i-date")
userip.max = new Date().toISOString.split("T")[0];

function calage(){
    let userDate = new Date(userip.value)
    let y1 = userDate.getFullYear()
    let m1 =userDate.getMonth()+1
    let d1 = userDate.getDate()
    console.log(y1,m1,d1)

    let today = new Date()
     let y2 = today.getFullYear()
     let m2 = today.getMonth()+1
     let d2 = today.getDate()

     let y3,m3,d3
     y3 = y2-y1
     if(m2>=m1){
        m3 = m2-m1
     }else{
        y3--
        m3  = 12 +  m2-m1
     }
     if(d2>=d1){
        d3 = d2-d1
     }
     else{
        m3--
        d3 = geto(y1,m1) + d2 -d1
     }
     if(m3<0){
        m3=11
        y3--
     }
     console.log(d3,m3,y3)
     let p =  document.createElement("p")
     p.setAttribute('id','p1')
     p.innerText = `You are ${y3} year ${m3} month and ${d3} days old`
     div.appendChild(p)
}
function geto(year,month){
    return new Date(year,month,0).getDate()
}

btn.onclick(calage())