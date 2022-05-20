function Database(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=b;
}


let myArray = JSON.parse(localStorage.getItem("DataBase")) || []

document.getElementById("form").addEventListener("submit", myDatabase)

function myDatabase(){
    event.preventDefault()
        let name = document.getElementById("name").value; 

        let course = document.getElementById("course").value; 

        let unit = document.getElementById("unit").value; 

        let image = document.getElementById("image").value; 

        let batch = document.getElementById("batch").value; 

        let p1 = new Database(name,course,unit,image,batch)
        console.log(p1)

        myArray.push(p1)

        console.log(myArray)

        localStorage.setItem("DataBase",JSON.stringify(myArray))

    
}