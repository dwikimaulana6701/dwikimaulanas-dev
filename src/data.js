import HeroImage from "/assets/hero-img.JPG";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";  
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/laravel.png";
import Tools5 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/bootstrap.png";
import Tools7 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/nodejs.png";
import Tools9 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/gitlab.png";
import Tools11 from "/assets/tools/canva.png";
import Tools12 from "/assets/tools/figma.png";
import Tools14 from "/assets/tools/mysql.png";
import Tools13 from "/assets/tools/katalon.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Laravel",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Javascript",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Github",
    ket: "Repository",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Gitlab",
    ket: "Repository",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Canva",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "Design App",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Katalon",
    ket: "Automation Testing",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "MySql Database",
    ket: "Repository",
    dad: "1400",
  },
];

export const listPengalaman = [
  {
    id: 1,
    perusahaan: "CV. Indofarsa Intiraya",
    posisi: "Staff Admin",
    tanggal: "Juni 2024 - Maret 2025",
    deskripsi: [
      "Mengatur dan menjadwalkan pengiriman pupuk sesuai pesanan.",
      "Menyiapkan serta memeriksa kelengkapan dokumen pengiriman",
      "Mengawasi proses muat dan bongkar pupuk agar sesuai jumlah dan standar keselamatan.",
      "Memantau perjalanan armada dan memastikan pengiriman tepat waktu serta sesuai tujuan.",
      "Menangani kendala pengiriman atau keluhan dari pelanggan/distributor terkait distribusi pupuk.",
    ],
    lokasi: "Sidoarjo, Indonesia",
    dad: "300",
  },
  {
    id: 2,
    perusahaan: "Diskominfo Kota Batu",
    posisi: "Web Developer (Internship)",
    tanggal: "Agustus 2023 - Oktober 2023",
    deskripsi: [
      "Mengembangkan Sistem Informasi Pariwisata (SIMPARTA) Kota Batu menggunakan Laravel untuk memantau data pariwisata, sehingga meningkatkan aksesibilitas data dan pelaporan bagi pemangku kepentingan.",
      "Membangun fitur input/output data, laporan statistik, dan grafik interaktif, yang memungkinkan visualisasi secara real-time dan meningkatkan akurasi pengambilan keputusan untuk perencanaan pariwisata.",
      "Merancang dan mengimplementasikan skema database menggunakan MySQL, mendukung penyimpanan data yang efisien dan skalabilitas untuk pemeliharaan sistem jangka panjang.",
      "Berkoordinasi dengan berbagai departemen untuk kelancaran operasional harian."
    ],
    lokasi: "Kota Batu, Indonesia",
    dad: "200",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.webp";
// import Proyek5 from "/assets/proyek/proyek5.webp";
// import Proyek6 from "/assets/proyek/proyek6.webp";
// import Proyek7 from "/assets/proyek/proyek7.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Video Belajar App",
    desk: "Platform pembelajaran video berbasis web yang memberi pengguna akses ke beragam kursus dan tutorial berbasis video. VideoBelajar menawarkan berbagai kursus dan tutorial, mencakup topik seperti bisnis, teknologi, kesehatan dan kesejahteraan, pembelajaran bahasa, dan banyak lagi.",
    tools: ["React", "TailwindCss", "Css", "Vite","Zustand","Mock API","ESLint","PNPM"],
    dad: "200",
    linkWebsite: "https://course-app-fe2.vercel.app/",
    linkGithub: "https://github.com/dwikimaulana6701/course-app-fe2/tree/advance-fe2",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Backend API Course App (Video Belajar)",
    desk: "RESTful API yang menangani semua logika sisi server, termasuk manajemen pengguna, otentikasi dengan verifikasi email, pengelolaan data kursus dengan fungsionalitas pencarian & filter, serta endpoint untuk upload file.",
    tools: ["Node.js", "Express.js", "MySQL", "JWT", "Bcrypt", "Nodemailer", "Multer"],
    dad: "300",
    linkWebsite: null,
    linkGithub: "https://github.com/dwikimaulana6701/Intermediate-BE2/tree/advance-be"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "SIMPARTA",
    desk: "Sistem Informasi Pariwisata (SIMPARTA) Kota Batu adalah sebuah aplikasi web yang dirancang untuk menyediakan informasi lengkap tentang destinasi wisata, akomodasi, dan layanan terkait lainnya di suatu wilayah tertentu. Aplikasi ini bertujuan untuk memudahkan wisatawan dalam merencanakan perjalanan mereka dengan menyediakan data yang akurat dan terkini.",
    tools: ["Laravel 8", "Javascript", "Bootstrap 5", "CSS", "MySql", "Katalon"],
    dad: "400",
    linkWebsite: null,
    linkGithub: "https://github.com/dwikimaulana6701/simparta-reborn"
  },
];

import Sertif1 from "/assets/sertifikasi/image-preview/fsd-harisenin.png";
import Sertif2 from "/assets/sertifikasi/image-preview/fsd-itbox.png";
import Sertif3 from "/assets/sertifikasi/image-preview/sertifikasi-kampus.png";
import Sertif4 from "/assets/sertifikasi/image-preview/laravel-sanbercode.png";
import Sertif5 from "/assets/sertifikasi/image-preview/python-udemy.png";
import Sertif6 from "/assets/sertifikasi/image-preview/coe-seal.png";
import Sertif7 from "/assets/sertifikasi/image-preview/cisco.png";

export const listSertifikasi = [
  {
    id: 1,
    gambar: Sertif1,
    nama: "Fullstack Developer Bootcamp in Harisenin.com",
    pemberi: "Harisenin.com",
    dad: "200",
    linkSertifikat: "/assets/sertifikasi/pdf-preview/fullstack-webdev-harisenin.pdf",
  },
  {
    id: 2,
    gambar: Sertif2,
    nama: "Fullstack Javascript Developer Course in ITBOX",
    pemberi: "ITBOX",
    dad: "200",
    linkSertifikat: "/assets/sertifikasi/pdf-preview/fullstack-itbox-1.pdf",
  },
  {
    id: 3,
    gambar: Sertif3,
    nama: "Web Development Certification in University of Muhammadiyah Malang",
    pemberi: "LSP UMM",
    dad: "200",
    linkSertifikat: "/assets/sertifikasi/pdf-preview/sertifikasi-kampus.pdf",
  },
  {
    id: 4,
    gambar: Sertif4,
    nama: "Laravel Bootcamp in Sanbercode",
    pemberi: "SANBERCODE",
    dad: "200",
    linkSertifikat: "/assets/sertifikasi/pdf-preview/laravel-sanbercode.pdf",
  },
  {
    id: 5,
    gambar: Sertif5,
    nama: "Python for Beginners in Udemy",
    pemberi: "UDEMY",
    dad: "200",
    linkSertifikat: "/assets/sertifikasi/pdf-preview/udemy-python.pdf",
  },
  {
    id: 6,
    gambar: Sertif6,
    nama: "Center of Excellence (CoE) in University of Muhammadiyah Malang",
    pemberi: "SEAL",
    dad: "200",
    linkSertifikat: "/assets/sertifikasi/pdf-preview/sertifikat-coe-seal.pdf",
  },
  {
    id: 7,
    gambar: Sertif7,
    nama: "CCNAv7: Switching, Routing, and Wireless Essentials",
    pemberi: "Cisco Networking Academy",
    dad: "200",
    linkSertifikat: "/assets/sertifikasi/pdf-preview/cisco-networking.pdf",
  },
];

