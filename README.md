# Aplikasi Laboratorium Fisika Dasar

Aplikasi ini dibuat untuk memenuhi tugas mata kuliah II3140 - Pengembangan Aplikasi Website dan Mobile, yang bertujuan untuk membantu pengguna belajar fisika melalui berbagai fitur, seperti latihan soal, perhitungan Ohm's Law, dan lainnya.

## Kolaborator
1. Abel Apriliani 18222008  
2. Olivia Christy Lismanto 18222036

## Fitur

- **Login & Register**: Autentikasi pengguna menggunakan email dan password.
- **Home**: Menampilkan tip fisika setiap kali login.
- **Ohm's Law**: Kalkulator arus berdasarkan hukum Ohm dengan grafik V-I.
- **Latihan Soal**: Latihan soal dengan sistem penyimpanan jawaban dan progress bar.
- **Topik Terkunci**: Menampilkan pesan jika topik belum bisa diakses.
- **Logout**: Mengarahkan pengguna kembali ke halaman login.

## Setup

### 1. Clone Repository

Untuk memulai, clone repository ini ke dalam direktori lokal dengan perintah berikut:

```bash
git clone https://github.com/abelaprl/VirtualPhysicsLab-ReactNative.git
```

### 2. Instalasi Dependencies

Setelah berhasil meng-clone, instal dependencies yang dibutuhkan dengan perintah:

```bash
npm install
```

### 3. Jalankan Aplikasi di Lokal

Untuk menjalankan aplikasi di perangkat lokal Anda, gunakan perintah:

```bash
npm start
```

Jika Anda ingin menjalankan aplikasi untuk platform Android atau iOS, gunakan perintah yang sesuai:

**Untuk Android:**

```bash
npx react-native run-android
```

**Untuk iOS:**

```bash
npx react-native run-ios
```

> Pastikan Anda sudah mengonfigurasi Android Studio atau Xcode untuk platform yang sesuai. Jika ingin langsung menjalankan aplikasi pada perangkat yang membutuhkan file .apk untuk dijalankan, maka bisa langsung membaca instruksi bagian "Cara Mengunduh File .APK"

## Petunjuk Penggunaan Aplikasi

### Login:

1. Masukkan email dan password yang valid untuk masuk ke aplikasi.
2. Jika email atau password salah, pesan error yang sesuai akan ditampilkan.

### Register:

1. Daftar dengan memasukkan email yang valid dan password minimal 6 karakter.
2. Jika email sudah digunakan atau terdapat kesalahan dalam format email, pesan error akan muncul.

### Fitur Home:

1. Setelah login, Anda akan melihat tip fisika yang berbeda setiap kali login.
2. Tekan topik yang sudah dibuka untuk melanjutkan ke halaman berikutnya.
3. Topik yang terkunci akan menunjukkan pesan "Topik ini masih terkunci".
4. Topik yang "coming soon" akan menampilkan pesan "Topik lainnya akan segera hadir".
5. Tekan tombol "Logout" untuk kembali ke halaman login.

### Ohm's Law:

1. Masukkan nilai voltase dan hambatan.
2. Tekan tombol "Hitung Arus" untuk melihat hasil perhitungan arus dan grafik V-I.
3. Tekan tombol "Latihan Soal" untuk melanjutkan ke latihan soal.

### Latihan Soal:

1. Isi jawaban latihan soal dan tekan tombol "Save" untuk menyimpan jawaban.
2. Jika jawaban kosong, pesan "Jawaban tidak boleh kosong" akan muncul.
3. Setelah mengisi jawaban dan menekan tombol "Save", pesan "Jawaban berhasil disimpan" akan muncul dan progress bar akan terlihat.
4. Tekan tombol "Submit" untuk mengirimkan quiz, dan pesan "Quiz submitted successfully" akan muncul setelahnya.
5. Tekan tombol "Kembali" untuk kembali ke halaman Ohm’s Law.

## Cara Mengunduh File .APK

Untuk mengunduh file APK aplikasi, ikuti langkah-langkah berikut:

1. Kunjungi link unduhan APK berikut: [Download APK](https://expo.dev/accounts/anaksti/projects/pawm-uas/builds/0a4045be-a000-42aa-9505-8fd3b8f7b8fc).
2. Klik tombol untuk mulai mengunduh file .apk.
3. Setelah selesai mengunduh, buka file .apk untuk menginstal aplikasi di perangkat Android Anda.
4. Jika perangkat Anda tidak dapat menginstal file dari sumber yang tidak dikenal, pastikan Anda mengaktifkan opsi "Sumber tidak dikenal" di pengaturan perangkat Anda.
