import React from 'react';
import { FaSearch, FaBuilding, FaHeadset, FaShoppingCart, FaChartLine, FaGlobe } from 'react-icons/fa';

export const dynamic = "force-dynamic";

const KeuntunganWebsiteUntukBrand = () => {
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
        Keuntungan Memiliki Website untuk Meningkatkan Brand
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
        Memiliki website yang kuat dan profesional dapat memberi dampak besar pada brand Anda. Website adalah platform yang
        memungkinkan bisnis Anda untuk tampil lebih kredibel, mudah diakses, dan terhubung langsung dengan audiens. Berikut
        adalah beberapa keuntungan yang bisa Anda dapatkan dengan memiliki website untuk meningkatkan brand.
      </div>

      <h2
        style={{
          fontSize: '32px',
          color: '#2980b9',
          fontWeight: 'bold',
          marginBottom: '15px',
        }}
      >
        Keuntungan Memiliki Website untuk Brand Anda
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
          <strong>1. Meningkatkan Kredibilitas Brand</strong><br />
        </div>
        Memiliki website yang dirancang dengan baik dapat memberikan kesan profesional dan serius pada brand Anda. Ini
        membangun kepercayaan dengan pelanggan dan menunjukkan bahwa bisnis Anda dapat diandalkan.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaBuilding style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>2. Memperluas Jangkauan Brand</strong><br />
        </div>
        Website memungkinkan brand Anda untuk menjangkau audiens yang lebih luas, tidak hanya di pasar lokal tetapi juga
        global. Website memungkinkan Anda berkomunikasi dengan pelanggan potensial dari berbagai negara.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaHeadset style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>3. Menyediakan Layanan Pelanggan yang Lebih Baik</strong><br />
        </div>
        Dengan website, Anda bisa menyediakan informasi lengkap tentang produk atau layanan Anda, termasuk FAQ, video
        tutorial, dan dukungan pelanggan yang mempermudah interaksi dengan pelanggan dan meningkatkan pengalaman mereka.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>4. Meningkatkan Penjualan dan Konversi</strong><br />
        </div>
        Website yang memiliki fitur e-commerce memungkinkan Anda untuk menjual produk langsung ke konsumen, meningkatkan
        konversi dan penjualan dengan lebih efektif, serta memungkinkan transaksi 24/7.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaChartLine style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>5. Menyediakan Platform untuk Kampanye Pemasaran</strong><br />
        </div>
        Website adalah platform yang sangat baik untuk melaksanakan kampanye pemasaran online, termasuk SEO, iklan digital,
        dan media sosial, untuk meningkatkan visibilitas dan daya tarik brand Anda.<br /><br />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaGlobe style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>6. Membangun Hubungan Langsung dengan Pelanggan</strong><br />
        </div>
        Website memungkinkan komunikasi langsung dengan pelanggan melalui formulir kontak, chat, dan newsletter. Ini
        memperkuat hubungan dengan pelanggan dan menciptakan loyalitas terhadap brand.<br /><br />
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

export default KeuntunganWebsiteUntukBrand;
