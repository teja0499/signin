var localdata=JSON.parse(localStorage.getItem("data"))
var table=document.querySelector("table")
console.log(localdata);
if(localdata){
localdata.map((e)=>{
    table.innerHTML+=`
        <tr><td>${e.userName}</td> <td><span>${e.month}</span>/ <span>${e.day} </span>/<span>${e.year}</span> </td> <td>${e.email} </td> </tr>
    `

})
}