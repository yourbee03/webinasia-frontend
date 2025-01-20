import React from 'react';
import { FaSearch, FaBuilding, FaHeadset, FaShoppingCart, FaChartLine, FaGlobe } from 'react-icons/fa';

export const dynamic = "force-dynamic";

const BusinessWebsiteImportance = () => {
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
        Mengapa Website Penting untuk Bisnis?
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
        Pelajari bagaimana website dapat membantu bisnis Anda tumbuh lebih cepat di era digital. Di zaman yang serba
        digital ini, website bukan hanya alat untuk menunjukkan eksistensi bisnis Anda, tetapi juga platform yang
        memungkinkan Anda menjangkau audiens yang lebih luas, memberikan layanan lebih baik, dan membangun kredibilitas
        yang kuat. Website yang responsif dan mudah digunakan adalah kunci untuk menarik perhatian pelanggan dan
        memperkuat hubungan dengan mereka.
      </div>

      <h2
        style={{
          fontSize: '32px',
          color: '#2980b9',
          fontWeight: 'bold',
          marginBottom: '15px',
        }}
      >
        Manfaat Website untuk Bisnis
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
          <strong>1. Meningkatkan Visibilitas Bisnis</strong><br />
        </div>
        Website memungkinkan bisnis Anda untuk ditemukan oleh calon pelanggan di seluruh dunia. Dengan adanya website,
        bisnis Anda dapat muncul di hasil pencarian Google, yang memberikan peluang besar untuk mendapatkan lebih banyak
        perhatian dari audiens baru.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaBuilding style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>2. Membangun Kredibilitas</strong><br />
        </div>
        Di era digital, memiliki website menunjukkan bahwa bisnis Anda serius dan profesional. Website yang menarik dan
        informatif akan membangun kepercayaan dan kredibilitas di mata pelanggan, yang pada gilirannya dapat meningkatkan
        peluang konversi.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaHeadset style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>3. Mempermudah Layanan Pelanggan</strong><br />
        </div>
        Website dapat menyediakan berbagai informasi yang dibutuhkan pelanggan, seperti jam operasional, produk atau jasa
        yang ditawarkan, hingga informasi kontak. Dengan demikian, pelanggan dapat dengan mudah mengakses informasi tanpa
        harus menghubungi Anda langsung.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>4. Meningkatkan Penjualan</strong><br />
        </div>
        Dengan adanya fitur e-commerce, website memungkinkan Anda untuk menjual produk atau layanan langsung kepada
        pelanggan secara online. Ini memungkinkan bisnis untuk beroperasi 24/7 dan menjangkau pasar yang lebih luas.<br /><br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaChartLine style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>5. Mengumpulkan Data untuk Strategi Pemasaran</strong><br />
        </div>
        Website memungkinkan bisnis untuk mengumpulkan data tentang pengunjung melalui alat analitik. Data ini dapat
        digunakan untuk memahami perilaku pelanggan dan merancang strategi pemasaran yang lebih efektif.<br /><br />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaGlobe style={{ marginRight: '10px', color: '#3498db' }} />
          <strong>6. Memperluas Jangkauan Pasar</strong><br />
        </div>
        Website membuka peluang untuk menjangkau pasar global, yang mana Anda bisa menarik pelanggan dari berbagai negara
        atau wilayah yang sebelumnya sulit dijangkau. Dengan promosi yang tepat, bisnis Anda dapat berkembang lebih cepat.
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

export default BusinessWebsiteImportance;
