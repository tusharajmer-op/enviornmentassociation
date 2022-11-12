const formelement = document.querySelectorAll(".Logincontainer input");
const signup = document.querySelectorAll(".button1");
const log = document.querySelectorAll(".login");
log.style.display="none"


const postdata=async(dat)=>{
    const response= await fetch("http://localhost:3000/login",{
        method :'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(dat)
    });
    return response.json();
}

signup[0].addEventListener('click', async(e) => {
    var data={}

    
    if (formelement[0].value != "" && formelement[1].value != "") {
        
        
            data = {
                "username": formelement[0].value,
                "password": formelement[1].value,
                

            }
            const data1 =await postdata(data).then((data2)=>{
                alert(data2.message);
                e.preventDefault();
                console.log(data2.message)
                if(data2.message==="login Successful"){
                    window.location.href="http://localhost:3000/"
                    check= true
                }
        })
        
    
            
}});
