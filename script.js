// Contoh Synchronous
console.log("1. Langkah Pertama");
console.log("2. Langkah Kedua");
console.log("3. Langkah Ketiga");

// Contoh Asynchronous
console.log("1. Pesan makanan");

// setTimeout mensimulasikan proses asynchronous yang memakan waktu 2 detik
setTimeout(() => {
  console.log("2. Makanan siap diantarkan");
}, 2000);

console.log("3. Cari tempat duduk");

// Tiga Cara Menulis Kode Asynchronous di JavaScript
// 1. Callback
function ambilData(callback) {
  setTimeout(() => {
    callback("Data pengguna berhasil dimuat");
  }, 1000);
}

ambilData((hasil) => {
  console.log("Callback:", hasil);
});

// 2. Promise
const ambilData = new Promise((resolve, reject) => {
  const sukses = true;
  setTimeout(() => {
    if (sukses) resolve("Data dari Promise berhasil diambil");
    else reject("Gagal mengambil data");
  }, 1000);
});

ambilData
  .then((hasil) => console.log("Promise:", hasil))
  .catch((err) => console.error(err));

// 3. Async / Await
function ambilData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data dari Async/Await berhasil diambil"), 1000);
  });
}

async function jalankanProses() {
  console.log("Memulai proses...");
  const hasil = await ambilData(); // Menunggu Promise resolve
  console.log("Async/Await:", hasil);
}

jalankanProses();