# TechStore: Aplikasi E-commerce Modern dengan React.js

TechStore adalah aplikasi e-commerce *front-end* yang responsif dan modern, dibangun menggunakan React.js dan Tailwind CSS. Aplikasi ini dirancang untuk menampilkan produk, mengelola keranjang belanja, *wishlist*, dan menyediakan pengalaman pengguna yang mulus dengan navigasi yang intuitif.

## Daftar Isi

* [Gambaran Umum Proyek](#gambaran-umum-proyek)
* [Fitur Utama](#fitur-utama)
* [Demo Langsung](#demo-langsung) (Opsional, jika ada deployment)
* [Struktur Direktori](#struktur-direktori)
* [Teknologi yang Digunakan](#teknologi-yang-digunakan)
* [Instalasi dan Menjalankan Proyek](#instalasi-dan-menjalankan-proyek)
    * [Prasyarat](#prasyarat)
    * [Langkah-langkah Instalasi](#langkah-langkah-instalasi)
* [Penggunaan Aplikasi](#penggunaan-aplikasi)
* [Pengembangan Lebih Lanjut](#pengembangan-lebih-lanjut)
* [Kontribusi](#kontribusi)
* [Lisensi](#lisensi)

---

## Gambaran Umum Proyek

TechStore adalah aplikasi e-commerce fungsional yang mensimulasikan pengalaman berbelanja *online*. Aplikasi ini dirancang dengan modularitas dan *component-based architecture* khas React, menggunakan Context API untuk manajemen *state* global dan `react-router-dom` untuk navigasi. Desain UI/UX dibangun menggunakan Tailwind CSS untuk pengembangan yang cepat dan _styling_ yang konsisten.

## Fitur Utama

* **Daftar Produk Dinamis**: Menampilkan daftar produk dengan detail seperti nama, harga, harga asli (jika ada diskon), gambar, rating, dan ulasan.
* **Keranjang Belanja Interaktif**:
    * Menambah/menghapus produk ke/dari keranjang.
    * Mengatur kuantitas produk dalam keranjang.
    * Menampilkan total harga dan jumlah item di keranjang.
    * *Sidebar* keranjang yang mudah diakses.
    * Data keranjang disimpan secara persisten di `localStorage`.
* **Wishlist (Daftar Keinginan)**:
    * Menambah/menghapus produk ke/dari *wishlist*.
    * Menampilkan jumlah item di *wishlist*.
    * Data *wishlist* disimpan secara persisten di `localStorage`.
* **Filter & Pencarian Produk**:
    * Mencari produk berdasarkan nama.
    * Memfilter produk berdasarkan kategori.
* **Navigasi Multi-Halaman**: Menggunakan `react-router-dom` untuk navigasi antar halaman (Home, Products, Wishlist, About, Contact, 404 Not Found).
* **Notifikasi Pengguna**: Memberikan notifikasi (_toast messages_) untuk aksi pengguna seperti menambah ke keranjang/wishlist, atau menghapus item.
* **Desain Responsif**: Antarmuka pengguna menyesuaikan diri dengan berbagai ukuran layar (mobile, tablet, desktop).
* **Simulasi Data & Loading**: Menggunakan data produk *mock* lokal dan mensimulasikan *loading state* untuk memberikan pengalaman pengguna yang realistis.
* **Animasi UI**: Efek transisi dan animasi halus untuk meningkatkan pengalaman visual.

## Demo Langsung

*(Jika Anda telah mendeploy aplikasi ini ke platform seperti Vercel, Netlify, atau GitHub Pages, sertakan tautan di sini.)*

[Link Demo Langsung Anda di Sini](https://example.com/techstore)

## Struktur Direktori

Struktur proyek diorganisir secara logis untuk kemudahan pengembangan dan pemeliharaan: