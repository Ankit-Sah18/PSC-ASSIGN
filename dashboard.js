let studentData = JSON.parse(localStorage.getItem("DataBase"))
let length = studentData.length

counter = document.getElementById("counter")
counter.innerText=`Batch : ${length}`

studentData.map(function(el,index){
    // let box=document.createElement("div")
    let div = document.createElement("tr")

    div.setAttribute("id","box")

    let img = document.createElement("img")
    img.src= el.image;

    let name = document.createElement("td")
    name.innerText = `Student Name : ${el.name}`;

    let course = document.createElement("td")
    course.innerText = `Course : ${el.course}`;

    let unit = document.createElement("td")
    unit.innerText = `Unit : ${el.unit}`;

    let batch = document.createElement("td")
    batch.innerText = `Batch : ${el.batch}`;

    let remove = document.createElement("td")
    remove.innerText= "Remove"
    remove.addEventListener("click",function(){
        removeStudent(el,index)
    })
    div.append(img,name,course,unit,batch,remove)
    // box.append(div)
    document.getElementById("tbody").append(div)

})
function removeStudent(el,index){
    studentData.splice(index,1)
    localStorage.setItem("DataBase",JSON.stringify(studentData))
    window.location.reload()
    
}