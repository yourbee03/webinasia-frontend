import React from 'react';
import { FaSearch, FaBuilding, FaHeadset, FaShoppingCart, FaChartLine, FaGlobe } from 'react-icons/fa';

export const dynamic = "force-dynamic";

const TipsMemilihDomain = () => {
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
        Tips Memilih Domain untuk Website Anda
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
        Domain yang tepat dapat meningkatkan daya tarik website Anda. Memilih domain yang relevan dengan bisnis Anda
        akan membantu meningkatkan visibilitas dan kredibilitas website di mata pengunjung. Berikut beberapa tips dalam
        memilih domain yang sesuai:
      </div>

      <h2
        style={{
          fontSize: '32px',
          color: '#2980b9',
          fontWeight: 'bold',
          marginBottom: '15px',
        }}
      >
        Tips Memilih Domain yang Tepat
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
          <strong>1. Pilih Nama yang Singkat dan Mudah Diingat</strong><br />
        </div>
        Nama domain yang singkat dan mudah diingat akan mempermudah pengunjung untuk kembali mengunjungi website Anda.
        Hindari penggunaan nama yang terlalu panjang atau rumit untuk diingat.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaBuilding style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>2. Sesuaikan dengan Nama Bisnis atau Brand</strong><br />
        </div>
        Pilih domain yang sesuai dengan nama bisnis atau brand Anda. Ini akan membantu dalam membangun identitas online
        yang konsisten dan memudahkan audiens untuk menemukan Anda.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaHeadset style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>3. Gunakan Ekstensi Domain yang Tepat</strong><br />
        </div>
        Ekstensi domain seperti .com, .co.id, atau .net memiliki arti penting dalam membangun kredibilitas. Pilih ekstensi
        yang sesuai dengan tujuan dan target pasar bisnis Anda.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>4. Hindari Penggunaan Karakter Khusus</strong><br />
        </div>
        Gunakan karakter alfanumerik yang sederhana. Hindari penggunaan tanda hubung (-) atau karakter khusus lainnya yang
        dapat membingungkan pengunjung atau sulit diingat.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaChartLine style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>5. Pertimbangkan Kata Kunci yang Relevan</strong><br />
        </div>
        Memilih domain dengan kata kunci yang relevan dengan bisnis atau produk Anda dapat membantu meningkatkan peringkat
        SEO dan mempermudah audiens untuk menemukan website Anda.<br /><br />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaGlobe style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>6. Pastikan Domain Tersedia</strong><br />
        </div>
        Sebelum memutuskan nama domain, pastikan domain yang Anda pilih tersedia dan belum terdaftar oleh pihak lain.
        Anda bisa memeriksa ketersediaan domain melalui berbagai layanan registrasi domain.<br /><br />
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

export default TipsMemilihDomain;
