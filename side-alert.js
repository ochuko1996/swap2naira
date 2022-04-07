function getAlert(msg, type){
    let alertbox = document.getElementById("alertbox");
    let alertmsg = document.createElement("div");
	
    alertmsg.innerHTML = `<div class="alert alert-${type}"> ${msg} </div>`;
    alertbox.appendChild(alertmsg);
    setTimeout(()=>{
        alertbox.removeChild(alertmsg);
    },2000)
}


