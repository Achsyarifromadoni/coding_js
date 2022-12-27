// let menu = ["Kalkulator", "Pertandingan Bola", "Pendaftaran", "Setting"];
// //panjang array = 3, index 0 sampai 2
// let jumlah = menu.length; //4

// for (let i = 0; i < jumlah; i++) {
//   console.log(menu[i]);
// }

function kalkulator() {
    let nilai1 = document.getElementById("nilai1").value;
    let nilai2 = document.getElementById("nilai2").value;
    let operator = document.getElementById("action").value;
    let hasilakhir;
    if (nilai1 == "" || nilai1 == null) {
      alert("nilai-1 belum diisi!!");
    } else if (nilai2 == "" || nilai2 == null) {
      alert("nilai-2 belum diisi!!");
    } else if (operator == "" || operator == null) {
      alert("Operator belum dipilih!");
    } else {
      //menghitung hasil
      hasilakhir = hasil(nilai1, nilai2, operator);
      //alert(hasilakhir);
      document.getElementById("hasilkalkulator").innerHTML = "Hasil Perhitungan : " + hasilakhir;
      document.getElementById("hasilkalkulator").style.display = "inline"; //menampilkan/show/unhide
      document.getElementById("btn_hasil").innerHTML = '<i class="spinner-border text-primary"></i> Proses';
    }
  }
  
  function hilang() {
    //console.log("reset");
    document.getElementById("hasilkalkulator").style.display = "none";
    document.getElementById("nilai1").value = "";
    document.getElementById("nilai2").value = "";
  }
  
  function hasil(nil1, nil2, oper) {
    let hasil_hitung = 0; //0
    if (oper == "+") {
      hasil_hitung = Number(nil1) + Number(nil2);
    } else if (oper == "-") {
      hasil_hitung = nil1 - nil2;
    } else if (oper == "/") {
      hasil_hitung = nil1 / nil2;
    } else if (oper == "*") {
      hasil_hitung = nil1 * nil2;
    }
    return hasil_hitung; //30
  }