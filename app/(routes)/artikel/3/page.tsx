import React from 'react';
import { FaSearch, FaBuilding, FaHeadset, FaShoppingCart, FaChartLine, FaGlobe } from 'react-icons/fa';

export const dynamic = "force-dynamic";

const StrategiSEODasar = () => {
  return (
    <div
      style={{
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f7f7f7',
        textAlign: 'center',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        maxWidth: '900px',
        margin: '40px auto',
      }}
    >
      <h1
        style={{
          fontSize: '40px',
          color: '#2c3e50',
          fontWeight: 'bold',
          marginBottom: '25px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Strategi SEO Dasar untuk Pemula
      </h1>
      <div
        style={{
          fontSize: '20px',
          lineHeight: '1.8',
          color: '#34495e',
          maxWidth: '750px',
          margin: '0 auto 30px',
          fontWeight: '300',
          textAlign: 'left',
          paddingRight: '20px',
          backgroundColor: '#ecf0f1',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        Optimalkan website Anda agar mudah ditemukan di mesin pencari dengan strategi dasar SEO ini. SEO (Search Engine
        Optimization) adalah serangkaian teknik yang digunakan untuk meningkatkan peringkat website di hasil pencarian
        Google. Dengan menerapkan strategi SEO yang tepat, Anda dapat menarik lebih banyak pengunjung ke website Anda.
      </div>

      <h2
        style={{
          fontSize: '32px',
          color: '#2980b9',
          fontWeight: 'bold',
          marginBottom: '15px',
        }}
      >
        Strategi SEO Dasar
      </h2>
      <div
        style={{
          fontSize: '20px',
          lineHeight: '1.8',
          color: '#34495e',
          maxWidth: '750px',
          margin: '0 auto 30px',
          fontWeight: '300',
          textAlign: 'left',
          paddingRight: '20px',
          backgroundColor: '#ecf0f1',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaSearch style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>1. Riset Kata Kunci</strong><br />
        </div>
        Melakukan riset kata kunci adalah langkah pertama dalam strategi SEO. Cari kata kunci yang relevan dengan bisnis atau
        topik Anda dan memiliki volume pencarian yang tinggi. Gunakan alat riset kata kunci untuk menemukan kata kunci yang
        tepat untuk ditargetkan.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaBuilding style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>2. Optimalkan Konten Anda</strong><br />
        </div>
        Konten yang berkualitas adalah kunci dalam SEO. Pastikan konten Anda informatif, relevan, dan mengandung kata kunci yang
        ditargetkan secara alami. Gunakan juga heading (H1, H2, dll.) untuk menyusun struktur konten Anda dengan baik.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaHeadset style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>3. Optimalkan Pengalaman Pengguna (UX)</strong><br />
        </div>
        Pengalaman pengguna yang baik sangat penting dalam SEO. Pastikan website Anda mudah dinavigasi, responsif di berbagai
        perangkat, dan memiliki waktu muat yang cepat. Pengalaman pengguna yang baik dapat meningkatkan peringkat di mesin pencari.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>4. Gunakan Meta Deskripsi yang Menarik</strong><br />
        </div>
        Meta deskripsi yang menarik dapat meningkatkan rasio klik-tayang (CTR) dari hasil pencarian. Buat meta deskripsi yang
        menggambarkan konten halaman Anda dengan jelas dan mengundang pengunjung untuk mengklik.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaChartLine style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>5. Bangun Backlink Berkualitas</strong><br />
        </div>
        Backlink dari website lain yang berkualitas dapat meningkatkan otoritas domain Anda dan membantu peringkat di mesin
        pencari. Fokuslah untuk mendapatkan backlink dari sumber yang relevan dan terpercaya.<br /><br />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaGlobe style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>6. Gunakan SEO untuk Mobile</strong><br />
        </div>
        Pastikan website Anda dioptimalkan untuk perangkat mobile. Dengan semakin banyaknya pengguna yang mengakses internet
        melalui perangkat mobile, Google memberikan peringkat lebih tinggi pada website yang mobile-friendly.<br /><br />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
      </div>
    </div>
  );
};

export default StrategiSEODasar;
