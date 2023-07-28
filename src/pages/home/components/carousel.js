import "./carousel.scss";
import femme from "../../../assets/images/0de48442223865a291fad0060d24306e.jpg";
import homme from "../../../assets/images/ZARA-Spring-Summer-2021-Man-Campaign-cover.webp";
import bijoux from "../../../assets/images/DoLJoLdX0AAampA.jpg";
import kids from "../../../assets/images/Spring-23-ZARA-Kids-1.png";
export const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={4000}>
            <img src={homme} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={4000}>
            <img src={femme} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={4000}>
            <img src={kids} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={4000}>
            <img src={bijoux} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="visually-hidden ">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="visually-hidden ">Next</span>
        </button>

        <div className="titre text-center">
          <h1 className="title">LEATHER BAGS </h1>
          <p>New Collection</p>
          <button className="rounded-pill btno">
            <p>Shop Now</p>
          </button>
        </div>
      </div>
    </>
  );
};
