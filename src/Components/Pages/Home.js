import React from "react";
import TopNav from "../Navs/TopNav";
import Footer from "../Footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peta: "Dunia",
    };
  }
  changePage = (page) => {
    this.props.history.push(page);
  };
  render() {
    return (
      <>
        <TopNav active="beranda" />
        <header
          className="masthead"
          style={{
            backgroundImage: "url('./img/covid19.jpg')",
            top: 0,
            left: 0,
            right: 0,
            height: "20vh",
            position: "fixed",
            zIndex: -1,
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h2
                    style={{
                      textShadow: "1px 1px 2px #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    KATAKAN TIDAK PADA COVID-19
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div style={styles.container} className="mobile-back">
          <div className="container">
            <div className="row mt-3">
              <div className="col-sm-12 mb-4">
                <h2 style={{ fontWeight: "bolder" }}> TANGGAP COVID-19</h2>
                <p className="text-muted">
                  Korban terus berjatuhan. Waspada dan tidak boleh panik. Tapi
                  jangan meremehkan.
                </p>
              </div>
              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center home-card"
                  onClick={() => this.changePage("/tentang")}
                >
                  <div className="card-body">
                    <img
                      src="./img/about.jpg"
                      alt="freepick_image"
                      style={styles.cardImg}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Tentang COVID-19
                    </h4>
                    <p className="card-text">
                      Terdapat banyak pertanyaan yang paling sering ditanyakan
                      seputar virus corona. Berikut rangkumannya.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center home-card"
                  onClick={() => this.changePage("/periksa-mandiri")}
                >
                  <div className="card-body">
                    <img
                      src="./img/test.png"
                      alt="freepick_image"
                      style={styles.cardImg}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Periksa Mandiri
                    </h4>
                    <p className="card-text">
                      Belum bisa melakukan rapid test, periksalah gejala yang anda alami melalui self-assesment.
        b            </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center home-card"
                  onClick={() => this.changePage("/peta-statistik")}
                >
                  <div className="card-body">
                    <img
                      src="./img/statistic.png"
                      alt="freepick_image"
                      style={styles.cardImg}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Peta san Statistik
                    </h4>
                    <p className="card-text">
                      Tampilan informasi peta dan statistik penyebaran virus
                      corona di Indonesia dan Dunia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 mb-4">
                <div
                  className="card text-center home-card"
                  onClick={() => this.changePage("/donasi")}
                >
                  <div className="card-body">
                    <img
                      src="./img/donate.png"
                      alt="freepick_image"
                      style={styles.cardImg}
                    />
                    <h4 className="card-title" style={styles.ct}>
                      Donasi
                    </h4>
                    <p className="card-text">
                      Penyebaran virus corona di Indonesia terus meluas. Ayo
                      selamatkan nyawa sesama.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const styles = {
  container: {
    background: "#f5f5f5",
    minHeight: "74vh",
    marginTop: "18vh",
    paddingTop: "2vh",
  },
  cardImg: {
    height: "5.4em",
    width: "5.4em"
  },
  ct: {
    fontWeight: "bold",
    marginTop: "8px",
  },
};

export default Home;
