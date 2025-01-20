import React from 'react';
import { FaSearch, FaBuilding, FaHeadset, FaShoppingCart, FaChartLine, FaGlobe } from 'react-icons/fa';

export const dynamic = "force-dynamic";

const KenapaPelangganHarusMemilikiWebsite = () => {
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
        Kenapa Anda Harus Memiliki Website untuk Bisnis Anda?
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
        Di era digital saat ini, memiliki website bukan hanya sebuah keuntungan, tetapi sudah menjadi kebutuhan. Website
        dapat memberikan Anda peluang untuk menjangkau audiens lebih luas, meningkatkan penjualan, dan membangun kredibilitas.
        Berikut adalah beberapa alasan mengapa Anda harus segera memiliki website untuk bisnis Anda.
      </div>

      <h2
        style={{
          fontSize: '32px',
          color: '#2980b9',
          fontWeight: 'bold',
          marginBottom: '15px',
        }}
      >
        Alasan Kenapa Anda Harus Memiliki Website untuk Bisnis Anda
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
          <strong>1. Mempermudah Pelanggan Mencari Anda</strong><br />
        </div>
        Website memudahkan calon pelanggan untuk menemukan bisnis Anda dengan mencari di mesin pencari seperti Google.
        Memiliki website meningkatkan peluang bisnis Anda ditemukan oleh lebih banyak orang.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaBuilding style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>2. Meningkatkan Kredibilitas Bisnis</strong><br />
        </div>
        Website memberikan kesan profesional pada bisnis Anda. Dengan website yang menarik dan informatif, pelanggan akan
        merasa lebih percaya dan yakin untuk berbisnis dengan Anda.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaHeadset style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>3. Layanan Pelanggan 24/7</strong><br />
        </div>
        Website memungkinkan Anda untuk memberikan informasi penting yang dibutuhkan pelanggan kapan saja, seperti detail
        produk, layanan, dan informasi kontak, tanpa harus menunggu jam kerja.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>4. Memungkinkan Penjualan Online</strong><br />
        </div>
        Dengan fitur e-commerce, website memungkinkan Anda untuk menjual produk atau layanan secara langsung, kapan saja,
        dan dari mana saja. Hal ini sangat menguntungkan untuk memperluas pasar dan meningkatkan penjualan.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaChartLine style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>5. Menganalisis Perilaku Pelanggan</strong><br />
        </div>
        Website memungkinkan Anda untuk mengumpulkan data dan menganalisis bagaimana pengunjung berinteraksi dengan
        bisnis Anda. Data ini bisa digunakan untuk membuat keputusan pemasaran yang lebih baik dan meningkatkan pengalaman
        pelanggan.<br /><br />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaGlobe style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>6. Menjangkau Pasar Global</strong><br />
        </div>
        Dengan website, Anda bisa mengakses pasar global dan menjangkau pelanggan dari berbagai negara atau wilayah tanpa
        batasan geografis. Ini memberi bisnis Anda kesempatan untuk berkembang lebih cepat.<br /><br />
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

export default KenapaPelangganHarusMemilikiWebsite;
