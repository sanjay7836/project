let q_url = "https://api.quotable.io/random"
let quate = document.getElementById("quate")
let author = document.getElementById("author")
let div =  document.getElementsByClassName("text")[0]
const getquote = async(url)=>{
    let q = await fetch(url)
    console.log(q)
    let data = await q.json()
    console.log(data)
    quate.innerHTML = data.content
    author.innerHTML = data.author
    savedata()
}
const tweet=()=>{
    window.open("https://twitter.com/intent/tweet?text="+quate.innerHTML+"   -by "+author.innerHTML)
}


