// document.getElementById("Judul").innerText = "Form Login Ini Coba";
// document.getElementById("Judul").innerText = "Ada Kambing";
// document.getElementById("Judul").innerText = "";

// document.getElementsByTagName("h1")[0].innerHTML = "Kambing";

// document.getElementsByClassName("title")[0].innerHTML = "kambingnya lucu"

document.getElementById("judul").innerText ="From Login";
document.getElementById("judul").style.color ="blue";
// document.getElementById("Username").value =""
// document.getElementById("Username").Achmadsyarifromadoni

let userlog ="kambing";
let passlog ="12345";

function ceklogin(){
    // let pesan ="oke login";
    let Usernamex, Passwordx;
    Usernamex = document.getElementById("Username").value;
    Passwordx = document.getElementById("Password").value;
//     alert("proses cek login" + Usernamex + Passwordx);
//     // console.log("Testing :" + userlog + passlog);
//     pesan("Login Berhasil, ", Usernamex);
//     // console.log(pesan);
//     // console.log("Kambing :" + pesan + ceklogin())    
// }
if (userlog === usernamex && passlog === passwordx) {
    pesan("Login Berhasil");
    window.location.href = "home.html";
  } else {
    alert("Username dan Password tidak sesuai!!");
    clear();
  }
}



function pesan(message, user){
    alert(message + user);
    clear();
}

function clear(){
    document.getElementById("Username").value = "";
    document.getElementById("Password").value = "";
}

