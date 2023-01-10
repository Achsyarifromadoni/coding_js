document.getElementById("cra").onload = function(){
    let today = new Date();
    let tanggalll = String(kode.getDate());
    let tahunnn = today.getFullYear();
    let hri;
    Ya = tanggalll + tahunnn
    hri = document.getElementById("Invoice").value = "INV" + Ya + "001";
};

document.getElementById("kd").onchange = function (){
    let nama = document.getElementById("kd").value;
    let nama2 = nama.toUpperCase();
    document.getElementById("kd").value = nama2;
}

document.getElementById("Ordernya").onclick = function () {
    let kode = document.getElementById("kd").value;
    let menu = document.getElementById("menu").value;
    let jenis;
    if (document.getElementById("makanan").checked == true) {
        jenis = document.getElementById("makanan").value;
    }
    if (document.getElementById("minuman").checked == true) {
        jenis = document.getElementById("minuman").value;
    }
    if (document.getElementById("snack").checked == true) {
        jenis = document.getElementById("snack").value;
    }
    let harga = document.getElementById("berempah").value;
    
    let jumlah = document.getElementById("beli").value;

    combobox();

    let brp = document.getElementById("Beli").value

    let bayar;
        if (document.getElementById("cashh").checked == true) {
        bayar = "cashh";
    };
        if (document.getElementById("non").checked == true) {
        bayar = "non";
    };
    
    let baraang = document.getElementById("berempah").value;

    Total(brp,)

// let datakanan = "";
// datakanan += ;

}






// window.onload = function (){
//     cekdata();
// }