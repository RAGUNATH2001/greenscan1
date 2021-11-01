function conformation(){
    var a=document.getElementById('name').value;
    var b=document.getElementById('password').value;
    var c=a.toUpperCase();
    if((c=="RAGUNATH" )&&(b=="Ragunath@2001")){
        if(confirm('Are you sure to login')){
            location.replace("/greenscan/users/index/")

        }
        else{
            location.replace("/greenscan/users/register&login/")

        }
        


        
       
   

        
    }
    else{
        window.alert("corect");
    }
}