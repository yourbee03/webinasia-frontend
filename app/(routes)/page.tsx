import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const LandingPage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanner("dd58a26d-4ea8-4682-b359-f15af7dac1b2");

  const benefits = [
    {
      title: "Meningkatkan Kredibilitas",
      description: "Dengan memiliki website profesional, bisnis Anda akan terlihat lebih terpercaya di mata pelanggan.",
      icon: "🌟"
    },
    {
      title: "Akses Kapan Saja",
      description: "Pelanggan dapat mengakses informasi bisnis Anda kapan saja dan di mana saja.",
      icon: "⏰"
    },
    {
      title: "Memperluas Jangkauan",
      description: "Website memungkinkan bisnis Anda menjangkau pelanggan di seluruh dunia.",
      icon: "🌍"
    },
    {
      title: "Brand Awareness",
      description: "Meningkatkan kesadaran merek dengan menyampaikan pesan bisnis Anda secara konsisten.",
      icon: "📣"
    },
    {
      title: "Komunikasi Mudah",
      description: "Website mempermudah komunikasi dengan pelanggan melalui fitur seperti formulir kontak.",
      icon: "📮"
    },
    {
      title: "Peningkatan Penjualan",
      description: "Website dapat menjadi platform untuk menjual produk atau layanan Anda secara langsung.",
      icon: "💰"
    },
    {
      title: "Analitik & Data",
      description: "Pantau kinerja bisnis Anda melalui data dan laporan yang dihasilkan dari website.",
      icon: "📊"
    },
    {
      title: "Hemat Biaya Promosi",
      description: "Promosi digital melalui website lebih hemat dibandingkan metode tradisional.",
      icon: "💡"
    },
    {
      title: "Peningkatan Layanan Pelanggan",
      description: "Website memungkinkan Anda untuk memberikan layanan pelanggan yang lebih baik dan responsif melalui fitur seperti live chat atau FAQ.",
      icon: "🤝"
    }
  ];

  const articles = [
    {
      title: "Mengapa Website Penting untuk Bisnis?",
      summary: "Pelajari bagaimana website dapat membantu bisnis Anda tumbuh lebih cepat di era digital.",
      link: "/artikel/1"
    },
    {
      title: "Keuntungan Memiliki Website untuk Meningkatkan Brand",
      summary: "Memiliki website yang kuat dan profesional dapat memberi dampak besar pada brand Anda.",
      link: "/artikel/4"
    },
    {
      title: "Kenapa Anda Harus Memiliki Website untuk Bisnis Anda?",
      summary: "Di era digital saat ini, memiliki website bukan hanya sebuah keuntungan, tetapi sudah menjadi kebutuhan.",
      link: "/artikel/5"
    },
    {
      title: "Tips Memilih Domain untuk Website Anda",
      summary: "Domain yang tepat dapat meningkatkan daya tarik website Anda. Simak tipsnya di sini.",
      link: "/artikel/2"
    },
    {
      title: "Strategi SEO Dasar untuk Pemula",
      summary: "Optimalkan website Anda agar mudah ditemukan di mesin pencari dengan strategi dasar SEO ini.",
      link: "/artikel/3"
    }
    
  ];

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner} />

        {/* Hero Section */}
        <section className="hero-section flex justify-center items-center p-12 bg-gradient-to-r from-blue-500 to-green-500 shadow-lg rounded-3xl transform transition-all hover:scale-105 hover:shadow-xl">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Selamat Datang di Webinasia</h1>
            <p className="text-xl mb-6">
              Solusi terpercaya untuk membuat website profesional yang meningkatkan kehadiran online Anda.
            </p>
            <a href="/home" className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg hover:bg-yellow-600 transition-all">
              Jelajahi Sekarang <span className="arrow">→</span>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section flex justify-center items-center p-12 bg-gray-800 shadow-lg rounded-3xl transform transition-all hover:scale-105 hover:shadow-xl">
          <div className="text-center text-white">
            <h2 className="text-4xl font-semibold mb-4">Tentang Webinasia</h2>
            <p className="text-lg">
              Webinasia adalah layanan pembuatan website yang dirancang untuk membantu bisnis Anda tampil lebih profesional dan mudah ditemukan di dunia digital. Kami menyediakan berbagai paket layanan yang sesuai dengan kebutuhan Anda.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2 className="text-center text-3xl font-semibold mb-6">Keuntungan Memiliki Website</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card p-6 border rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="text-center text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="articles-section">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">📰</div>
            <h2 className="text-center text-3xl font-semibold">Artikel Terbaru</h2>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {articles.map((article, index) => (
              <div key={index} className="article-card p-6 border rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-80">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p>{article.summary}</p>
                <a 
                  href={article.link} 
                  className="inline-block bg-blue-500 text-white py-1 px-2 rounded-lg text-lg text-center mt-4 hover:bg-blue-600 transition-all"
                >
                  Baca Selengkapnya 👈
                </a>
              </div>
            ))}
          </div>
        </section>


      </div>
    </Container>
  );
};

export default LandingPage;
