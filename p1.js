var month=document.querySelector("#month")
var date=document.querySelector("#day")
var year=document.querySelector("#year")
var storage=[]
var form=document.querySelector("form")
var user=document.querySelector("#name")
var email=document.querySelector("#email")
var ename=document.querySelector("#ename")
var edate=document.querySelector("#edate")
var eemail=document.querySelector("#eemail")
var localdata=s=JSON.parse(localStorage.getItem("data"))
if(localdata){
storage=localdata
}
form.addEventListener("submit",(event)=>{
   event.preventDefault()
    var flag=true
   
    if(user.value==""){
        ename.innerHTML="*name is required <br>"
        flag=false
    }
     if(month.value==""){
        edate.innerHTML="*Month is requird<br>"
        flag=false
    }
    if(date.value==""){
        edate.innerHTML="*Date is requird<br>"
        flag=false
    }
    if(year.value==""){
        edate.innerHTML="*Year is requird<br>"
        flag=false
    }
    if(email.value==""){
        eemail.innerHTML="*email is required"
        flag=false
    }
    if(flag){
        var data={
            userName: user.value,
            month: month.value,
            day: date.value,
            year: year.value,
            email: email.value
        }
        storage.push(data)
        localStorage.setItem('data', JSON.stringify(storage))

        window.open("./p11.html")

    }

   


})