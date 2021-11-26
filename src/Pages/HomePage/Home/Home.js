import { Container, Image, Row, Spinner } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import useProducts from "../../../Hooks/useProducts";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ShowProducts from "../../Shared/ShowProducts/ShowProducts";
import Review from "../Review/Review";

// import ShowData from "../ShowData/ShowData";

const Home = () => {
  const { products } = useProducts();
  // for loading screen
  const { isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="d-flex mx-auto w-75 my-5 justify-content-center align-items-center container">
        <div>
          <Spinner animation="border" variant="primary" className="mx-5" />
        </div>
        <div>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header></Header>
      <div className="container-fluid">
        <Row>
          <Image src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/brotherhood-hub/desktop/2020-dodge-muscle-vlp-reveal-hero.jpg"></Image>
          <h2 className="text-center fw-bold my-3 fs-1  ">
            Welcome to <span className="text-danger">Dream-</span>
            <span className="text-danger">Car</span>{" "}
          </h2>
        </Row>

        <Row>
          <Image src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/brotherhood-hub/desktop/2021-dodge-summer-events-muscle-of-dodge-hero-still.jpg"></Image>
        </Row>
        <Container>
          <Container>
            <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
              Special offers & <span className="text-warning"> Products</span>{" "}
            </h2>
            <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
              {products.slice(0, 6).map((product) => (
                <ShowProducts
                  key={product._id}
                  product={product}
                ></ShowProducts>
              ))}
            </Row>
          </Container>
        </Container>
        <Row>
          <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
            THE MOST MENACING <span className="text-warning"> MODELS</span>{" "}
          </h2>
          <Image src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/bhp/refresh/desktop/2020-dodge-eshop-banner.jpg"></Image>
        </Row>
        <Container>
          <div className="card mb-3 w-100">
            <div className="row g-0 p-2 h-100">
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title fw-bold">
                    THE HEMI® ORANGE PACKAGE | BURST ONTO THE SCENE
                  </p>

                  <p className="card-text">
                    Leave an eye-catching impression wherever you go with the
                    HEMI® Orange Package, available on the Dodge Charger and
                    Dodge Challenger GT RWD and R/T Scat Pack Widebody models.
                    Outside, you’ll find an exclusive orange barcode stripe,
                    black-and-orange exterior badges, orange Brembo brake
                    calipers and black performance wheels. Inside, you’ll find
                    blacked-out Nappa leather-trimmed seats featuring black
                    Alcantara® suede inserts and orange stitching. The theme
                    continues with orange accent stitching on the dash, doors,
                    center console, armrest and shift boot. The HEMI Orange
                    Package available early 2022.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/brotherhood-hub/desktop/2021-dodge-muscle-page-hemi-orange-es.jpg.image.1440.jpg"
                  className="img-fluid  rounded"
                  alt=""
                />
              </div>
            </div>
            <div className="row g-0 p-2 h-100">
              <div className="col-md-4">
                <img
                  src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/brotherhood-hub/desktop/2021-dodge-muscle-page-srt-black-es.jpg.image.1440.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title fw-bold">
                    THE SRT® BLACK PACKAGE | THE DARKER SIDE OF MUSCLE
                  </p>

                  <p className="card-text ">
                    Give your Challenger SRT® or Charger SRT a sinister look
                    with the available SRT Black Package. With blacked-out
                    exterior SRT badges on the grille, fenders and rear decklid
                    spoiler and black exhaust tips on the Charger, this package
                    helps ensure the loudest part of your muscle car is the
                    Supercharged HEMI® V8 engine. The SRT Black Package
                    available early 2022.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-0 p-2 h-100">
              <div className="col-md-8">
                <div className="card-body ">
                  <p className="card-title fw-bold">
                    DODGE CHALLENGER SRT® HELLCAT REDEYE WIDEBODY | REBELLIOUSLY
                    POWERFUL
                  </p>
                  <p className="card-text">
                    TSubtle isn't in our vocabulary, because disturbing the
                    peace is all part of the fun. And that's how we got here, to
                    the Dodge Challenger SRT® Hellcat Redeye Widebody. It's
                    bigger, wilder, and a ton more fun. If you're always ready
                    to soar past the competition at a moment's notice, you ought
                    to get behind the wheel of one.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/brotherhood-hub/desktop/2020-dodge-brotherhood-buzz-challenger-srt-redeye-es.jpg.image.1440.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
        <Row>
          <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
            CAR OF THE <span className="text-warning"> MONTH</span>{" "}
          </h2>
          <Image src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/bhp/hero/desktop/2021-dodge-bhp-power-direct-connection.jpg"></Image>
        </Row>
        <Container>
          <div className="card mb-3 p-3">
            <div className="row g-0">
              <div className="col-md-6 ">
                <iframe
                  className="rounded w-100"
                  height="350px"
                  src="https://www.youtube.com/embed/xrFP2Je_CUo"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-title fw-bold ">
                    DIRECT CONNECTION BROUGHT TO YOU BY DODGE POWER
                    BROKERS—COMING LATE 2021
                  </p>
                  <p className="card-text text-muted">
                    Introduces fundamental drag racing skills and knowledge from
                    burnouts and throttle control to Line Lock, Trans Brake and
                    staging. This classroom session assures that you’ll have the
                    best preparation before driving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
            TOP <span className="text-warning"> REVIEW</span>{" "}
          </h2>
          <Review></Review>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
