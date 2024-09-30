
function shownavbar() {
    document.querySelector('.nav_container').style.visibility = 'visible';
    document.getElementById('bars').style.display = 'none';
    document.getElementById('close').style.display = 'block';
}

function hidenavbar() {
    document.querySelector('.nav_container').style.visibility = 'hidden';
    document.getElementById('bars').style.display = 'block';
    document.getElementById('close').style.display = 'none';
}

function SendMail(){
    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        sendermobile: document.querySelector("#phone").value,
        message: document.querySelector("#message").value
    }
    emailjs.send("service_fmk08yh","template_gp9i9xq",params).then(function (res){
      alert("Success !"+res.status);
    })
  }