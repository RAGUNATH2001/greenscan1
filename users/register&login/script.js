// function validate(){
//     var a=document.getElementById('name').value;
//     var b=document.getElementById('password').value;
//     var low=a.toUpperCase();
//     if((low=="RAGUNATH") && (b=="Ragunath@2001")){
//         var tex;
//         if (confirm("Are you sure to login")){
//             tet='http://localhost/myproject/greenscan/users/index/?';
        
//         }
//         else{
//            tet='http://localhost/myproject/greenscan/users/register&login/index.html';

//         }
//         location.replace(tet);
        
//     }
//     else{
//         window.alert("Incorrect");
//     }
    
    



//  }

function conformation(){
    var a=document.getElementById('name').value;
    var b=document.getElementById('password').value;
    var c=a.toUpperCase();
    if((c=="RAGUNATH" )&&(b=="Ragunath@2001")){

        window.alert("Correct")
    }
    else{
        window.alert("Incorect")
    }
}