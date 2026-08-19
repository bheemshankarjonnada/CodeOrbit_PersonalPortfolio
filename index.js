

document.getElementById("contacting").addEventListener("submit", function(e){
    e.preventDefault();

    let name=document.getElementById("name").value.trim();
    let mail=document.getElementById("mail").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let status=document.getElementById("status");

    let phonepattern=/^[0-9]{10}$/;

    if(name==="" || mail==="" || phone==="" ){
        status.textContent=" ⚠️ please fill all the fields and submit";
        status.style.color="red";
    }
        
    else if(!phonepattern.test(phone)){
        status.textContent="Please enter valid mobile number !";
        status.style.color="red";
    }

    else {
         status.textContent="Submitted Successfully 👍";
        status.style.color="yellow";
    }
});
