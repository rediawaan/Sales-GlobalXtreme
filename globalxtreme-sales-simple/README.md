# Website Personal Sales GlobalXtreme

Website ini adalah static website murni untuk GitHub Pages. Tidak memakai framework, tidak perlu build, tidak perlu compile, dan tidak butuh konfigurasi tambahan.

## Struktur Folder

```text
index.html
css/
  style.css
  responsive.css
js/
  script.js
images/
  logo-placeholder.svg
  profile-placeholder.svg
  router-rg-ew1300g-placeholder.svg
  router-rg-ew6000gx-placeholder.svg
  og-image.svg
  favicon.svg
assets/
robots.txt
sitemap.xml
.nojekyll
README.md
```

## Cara Upload ke GitHub Pages

1. Buat repository baru di GitHub.
2. Upload semua file dan folder dari paket ini ke repository.
3. Buka Settings.
4. Masuk ke Pages.
5. Pada Source, pilih Deploy from a branch.
6. Pilih branch `main` dan folder `/root`.
7. Simpan.
8. Tunggu beberapa menit sampai GitHub Pages aktif.

## Bagian yang Perlu Diganti

### 1. Nama, foto, dan logo

Ganti file placeholder di folder `images/`:

- `logo-placeholder.svg`
- `profile-placeholder.svg`
- `router-rg-ew1300g-placeholder.svg`
- `router-rg-ew6000gx-placeholder.svg`
- `og-image.svg`
- `favicon.svg`

Lalu sesuaikan tag `<img>` di `index.html` bila nama file diganti.

### 2. Nomor WhatsApp

Nomor sudah diset ke:

```text
087733340006
```

Format internasional yang dipakai di link:

```text
6287733340006
```

Kalau nomor berubah, ganti di:

- Semua link `https://wa.me/6287733340006` di `index.html`
- Variabel `WHATSAPP_NUMBER` di `js/script.js`

### 3. Domain GitHub Pages

Setelah website online, ganti URL placeholder berikut:

```text
https://username.github.io/globalxtreme-sales-simple/
```

Lokasi yang perlu diganti:

- `index.html` pada canonical, Open Graph, dan JSON-LD
- `robots.txt`
- `sitemap.xml`

### 4. Informasi paket, promo, dan kalkulator

Edit teks tampilan langsung di `index.html` pada bagian:

- `#paket`
- `#promo`
- `#kalkulator`
- `#cara-pasang`
- `#faq`

Data perhitungan kalkulator promo ada di `js/script.js` pada bagian:

```js
const packageData = {
  // edit harga paket per bulan di sini
}
```

Rumus simulasi saat ini:

```text
Subtotal paket = harga per bulan x masa berlangganan
Diskon = subtotal paket x persentase diskon
PPN 11% = subtotal paket setelah diskon x 11%
Total pembayaran awal = subtotal setelah diskon + PPN 11% + biaya instalasi
```

Biaya instalasi default diset IDR 300.000 dan bisa diubah oleh pengunjung pada form kalkulator.

## Catatan

Website ini adalah website personal Sales Representative GlobalXtreme, bukan website resmi perusahaan. Pastikan informasi promo, harga, router, biaya instalasi, dan prosedur selalu disesuaikan dengan kebijakan terbaru perusahaan.


## Catatan Paket Signature

Pada tampilan depan website, paket Signature sengaja hanya menampilkan 3 contoh pilihan: 100 Mbps, 500 Mbps, dan 1 Gbps agar informasi tidak terlihat padat. Data lengkap Signature kelipatan 100 Mbps dari 100 Mbps sampai 1 Gbps tetap disimpan di `js/script.js` dan tetap tersedia di kalkulator promo.


## Versi desain card terbaru

Section Paket Internet memakai gaya card hitam-putih-kuning dengan border tebal, shadow tegas, headline uppercase italic, dan font Poppins. Informasi paket tetap mengikuti data website sebelumnya. Signature di frontend hanya menampilkan 100 Mbps, 500 Mbps, dan 1 Gbps, sedangkan data kalkulator tetap lengkap di `js/script.js`.

## Update Kalkulator Promo

- Dropdown paket tidak menampilkan harga agar tampilan lebih bersih.
- Harga paket tetap disimpan di `js/script.js` untuk perhitungan kalkulator.
- Biaya instalasi tidak dihitung di kalkulator. Informasi instalasi diarahkan untuk diskusi melalui WhatsApp.
- Pada hasil kalkulator, harga per bulan ditampilkan di dalam kotak `Paket`, bukan sebagai kotak terpisah.
