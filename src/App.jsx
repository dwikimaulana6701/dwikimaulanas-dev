import React from "react";
import  DataImage from "./data"
import {listTools, listProyek, listSertifikasi} from "./data"

function App() {
  return (
    <>
      <div className="hero grid grid-cols-1 pt-10 items-center xl:gap-0 gap-6 md:grid-cols-2">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md"loading="lazy"/>
            <q>Kode yang indah, lahir dari ketekunan.😎</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Dwiki Maulana Suharto</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan yang tinggi terhadap programmer, terutama pada pembuatan website. dan saya selalu mengevaluasi dan menyesuaikan dengan kebutuhan dan pengalaman pengguna</p>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="/assets/cv/cv-dwikimaulanas.pdf" download className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] rounded-br-[80px] rounded-tl-[75px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"loading="lazy"/>
      </div>

      {/* tentang saya */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 mx-auto w-full p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden"loading="lazy"/>
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Dwiki Maulana Suharto, Fresh Graduate dari Universitas Muhammadiyah Malang jurusan Teknik Informatika, dengan pengalaman langsung sebagai intern Web Developer di Dinas Komunikasi dan Informatika Kota Batu, terlibat dalam pengembangan sistem berbasis Laravel yang disesuaikan. Mahir dalam HTML, CSS, TailwindCss, Figma, JavaScript, React.js, dan Laravel. Siap berkontribusi sebagai junior full-stack developer dengan menghadirkan aplikasi web yang bersih, mudah dirawat, dan berfokus pada pengguna, serta memiliki kemampuan yang kuat dalam pengembangan dan desain antarmuka pengguna.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">5<span className="text-violet-500">+</span></h1>
                <p>Proyek Selesei</p>
              </div>  
              <div>
                <h1 className="text-4xl mb-1">1<span className="text-violet-500">+</span></h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
          <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai</h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >Berikut ini beberapa tools yang sering saya pakai untuk pembuatan website ataupundesign</p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {listTools.map((tool) => (
                <div key={tool.id} className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                  <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"loading="lazy"/>
                  <div>
                    <h4 className="font-bold">{tool.nama}</h4>
                    <p className="opacity-50">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
      {/* tentang saya */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
        <p className="text-center text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa proyek yang telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {listProyek.map((proyek) =>(
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="Proyek Image"loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p key={index} className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold">{tool}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                  {proyek.linkWebsite && proyek.linkWebsite !== "#" ? (
                    <a
                      href={proyek.linkWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer md:w-1/2 w-full text-center bg-violet-700 p-2 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                    >
                      Lihat Website
                    </a>
                  ) : (
                    <button
                      disabled
                      className="md:w-1/2 w-full text-center bg-zinc-600 p-2 rounded-lg block border border-zinc-600 opacity-50 cursor-not-allowed"
                    >
                      Website On Going
                    </button>
                  )}

                  {proyek.linkGithub && proyek.linkGithub !== "#" ? (
                    <a
                      href={proyek.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer md:w-1/2 w-full text-center bg-green-700 p-2 rounded-lg block border border-zinc-600 hover:bg-green-600"
                    >
                      <i className="ri-github-line"></i> Github
                    </a>
                  ) : (
                    <button
                      disabled
                      className="md:w-1/2 w-full text-center bg-zinc-600 p-2 rounded-lg block border border-zinc-600 opacity-50 cursor-not-allowed"
                    >
                      Github On Going
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */} 

      {/* Sertifikasi */}
      <div className="sertifikasi mt-32 py-10" id="sertifikasi">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Sertifikasi</h1>
        <p className="text-center text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini adalah beberapa sertifikasi yang telah saya dapatkan.</p>
        
        <div className="sertifikasi-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {listSertifikasi.map((sertif) =>(
            <div key={sertif.id} className="p-4 bg-zinc-800 rounded-md flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={sertif.dad}>
              <img src={sertif.gambar} alt={`Sertifikat ${sertif.nama}`} loading="lazy" className="rounded-md mb-4"/>
              
              <div className="flex-grow">
                <h1 className="text-2xl font-bold mb-2">{sertif.nama}</h1>
                <p className="text-base/loose mb-4 opacity-70">Dikeluarkan oleh: <strong>{sertif.pemberi}</strong></p>
              </div>

              <div className="mt-auto">
                <a
                  href={sertif.linkSertifikat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-full text-center bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                >
                  Lihat Sertifikat <i className="ri-external-link-line ri-lg ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sertifikasi */}
      
      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 text-center font-bold" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya</p>
        <form  action="https://formsubmit.co/dwikimaulana6701@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Emai</label>
              <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Pesan</label>
              <textarea className="border border-zinc-500 p-2 rounded-md" name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full border cursor-pointer border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </>
  );
}

export default App;
