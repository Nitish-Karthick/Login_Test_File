function vadidate(){
    var name=myform.name.value;
    var name=myform.password.value;
    if(name==null||name==""){
        alert("Name can't be blank");
    }
    if(password.length<6){
        alert("Password must 6 character long");
    }
}