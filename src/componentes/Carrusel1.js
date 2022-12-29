const Carrusel1 = (props) => {
  const arraymapeado = props.lista.results.map((item) => ({
    titulo: item.title,
    url: item.poster_path,
    id: item.id,
    resumen: item.overview,
  }));
  const peli = arraymapeado.shift();
  return (
    <div className="container py-4">
      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          <div className="lc-block">
            <div
              id="testimonial-slider"
              className="carousel slide"
              data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${peli.url}`}
                    id={`${peli.id}`}
                    className="d-block w-100"
                    alt={`${peli.titulo}`}
                  />
                  <div className="carousel-caption text-white">
                    <h2 editable="inline">
                      <strong>{`${peli.titulo}`}</strong>
                    </h2>
                    <p editable="inline">{`${peli.resumen}`}</p>
                  </div>
                </div>

                {arraymapeado.map((peli) => (
                  <div className="carousel-item" key={`${peli.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${peli.url}`}
                      id={`${peli.id}`}
                      className="d-block w-100"
                      alt={`${peli.titulo}`}
                    />
                    <div className="carousel-caption text-white">
                      <h2 editable="inline">
                        <strong>{`${peli.titulo}`}</strong>
                      </h2>
                      <p editable="inline">{`${peli.resumen}`}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                className="carousel-control-prev"
                href="#testimonial-slider"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#testimonial-slider"
                data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel1;
