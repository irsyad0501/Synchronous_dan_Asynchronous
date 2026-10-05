# Synchronous & Asynchronous

1. Penjelasan Synchronous

Synchronous adalah model eksekusi kode secara berurutan (sekuensial) dari atas ke bawah dan bersifat blocking. Baris kode berikutnya harus menunggu proses pada baris sebelumnya selesai dieksekusi sepenuhnya sebelum dapat dijalankan. Jika ada tugas yang membutuhkan waktu lama (seperti komputasi berat), seluruh program akan terhenti (freeze) hingga tugas tersebut selesai.

2. Penjelasan Asynchronous

Asynchronous adalah model eksekusi kode secara non-blocking. Saat ada perintah yang membutuhkan waktu (seperti mengambil data dari server, membaca berkas, atau mengatur timer), JavaScript akan menyerahkan tugas tersebut ke latar belakang (background) dan langsung melanjutkan eksekusi baris kode berikutnya tanpa perlu menunggu tugas tersebut selesai.

3. Perbedaan Synchronous dan Asynchronous

Sifat Eksekusi: Synchronous bersifat blocking (menunggu suatu proses selesai sebelum lanjut ke baris berikutnya), sedangkan Asynchronous bersifat non-blocking (langsung melanjutkan eksekusi tanpa menunggu proses sebelumnya selesai).

Urutan Hasil: Synchronous selalu menghasilkan output sesuai urutan penulisan kode, sedangkan Asynchronous urutan hasilnya tergantung pada waktu penyelesaian proses di latar belakang.

Penggunaan Utama: Synchronous digunakan untuk logika program sederhana dan perhitungan matematika, sedangkan Asynchronous digunakan untuk operasi I/O yang memakan waktu seperti pemanggilan API (HTTP request), timer, atau pembacaan berkas.

