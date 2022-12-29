const Carrusel2 = (props) => {
  const arraymapeado = props.lista.results.map((item) => ({
    titulo: item.title,
    url: item.poster_path,
    id: item.id,
  }));
  const peli = arraymapeado.shift();

  return (
    <div
      id="carouselExampleControls"
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
        </div>
        {arraymapeado.map((peli) => (
          <div className="carousel-item" key={`${peli.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${peli.url}`}
              id={`${peli.id}`}
              className="d-block w-100"
              alt={`${peli.titulo}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel2;
