# Aplikasi Fisika

Aplikasi untuk belajar fisika dengan berbagai fitur seperti latihan soal, perhitungan Ohm's Law, dan lainnya.

## Fitur

- **Login & Register**: Autentikasi pengguna menggunakan email dan password
- **Home**: Menampilkan tip fisika setiap kali login
- **Ohm's Law**: Kalkulator arus berdasarkan hukum Ohm dengan grafik V-I
- **Latihan Soal**: Latihan soal dengan sistem penyimpanan jawaban dan progress bar
- **Topik Terkunci**: Menampilkan pesan jika topik belum bisa diakses
- **Logout**: Mengarahkan pengguna kembali ke halaman login

## Setup

### 1. Clone Repository

Untuk memulai, clone repository ini ke dalam direktori lokal dengan perintah berikut:

git clone https://github.com/abelaprl/VirtualPhysicsLab-ReactNative.git

### 2. Clone Repository
a. Instalasi Dependencies
Setelah berhasil meng-clone, instal dependencies yang dibutuhkan dengan perintah:

npm install


b. Jalankan Aplikasi di Lokal
Untuk menjalankan aplikasi di perangkat lokal Anda, gunakan perintah:

npm start

Jika Anda ingin menjalankan aplikasi untuk platform Android atau iOS, gunakan perintah yang sesuai:

Untuk Android:

npx react-native run-android

Untuk iOS:

npx react-native run-ios

Pastikan Anda sudah mengonfigurasi Android Studio atau Xcode untuk platform yang sesuai.

###Petunjuk Penggunaan Aplikasi
Login:

Masukkan email dan password yang valid untuk masuk ke aplikasi.
Jika email atau password salah, pesan error yang sesuai akan ditampilkan.
Register:

Daftar dengan memasukkan email yang valid dan password minimal 6 karakter.
Jika email sudah digunakan atau terdapat kesalahan dalam format email, pesan error akan muncul.
Fitur Home:

Setelah login, Anda akan melihat tip fisika yang berbeda setiap kali login.
Tekan topik yang sudah dibuka untuk melanjutkan ke halaman berikutnya.
Topik yang terkunci akan menunjukkan pesan "Topik ini masih terkunci".
Topik yang "coming soon" akan menampilkan pesan "Topik lainnya akan segera hadir".
Tekan tombol "Logout" untuk kembali ke halaman login.
Ohm's Law:

Masukkan nilai voltase dan hambatan, lalu tekan tombol ‘Hitung Arus’ untuk melihat hasil perhitungan arus dan grafik V-I.
Tekan tombol "Latihan Soal" untuk melanjutkan ke latihan soal.
Latihan Soal:

Isi jawaban latihan soal dan tekan tombol ‘Save’ untuk menyimpan jawaban.
Jika jawaban kosong, pesan “Jawaban tidak boleh kosong” akan muncul.
Setelah mengisi jawaban dan menekan tombol ‘Save’, pesan “Jawaban berhasil disimpan” akan muncul dan progress bar akan terlihat.
Tekan tombol ‘Submit’ untuk mengirimkan quiz, dan pesan “Quiz submitted successfully” akan muncul setelahnya.
Tekan tombol ‘Kembali’ untuk kembali ke halaman Ohm’s Law.
Cara Mengunduh File .APK
Untuk mengunduh file APK aplikasi, ikuti langkah-langkah berikut:

Kunjungi link unduhan APK.
Klik tombol untuk mulai mengunduh file .apk.
Setelah selesai mengunduh, buka file .apk untuk menginstal aplikasi di perangkat Android Anda.
Jika perangkat Anda tidak dapat menginstal file dari sumber yang tidak dikenal, pastikan Anda mengaktifkan opsi "Sumber tidak dikenal" di pengaturan perangkat Anda.