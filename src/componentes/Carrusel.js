import React from 'react'

function Carrusel({ lista }) {

	console.log("llego a carrusel jony", lista)
console.log(lista)
	const arraymapeado = lista.results.map((item) => ({ "titulo": item.title, "url": item.poster_path, "id": item.id }));
	const corte1 = arraymapeado.splice(6)
	const corte2 = corte1.splice(6)
	const corte3 = corte2.splice(6)

	return (
		<>

			<div className="container m-0 p-0 ">
				<div className="row">
					<div className="col-md-12">
						<div className="lc-block">
							<div id="carouselLogos" className="carousel slide pt-1 pb-4" data-bs-ride="carousel">

								<div className="carousel-inner px-0 mx-0">
									<div className="carousel-item active p-0 m-0 ">
										<div className="row ">
											{arraymapeado.map(peli => (
												<div className="col-6 col-lg-2 align-self-center p-0 m-0 " key={`${peli.id}`}>
													<img className="d-block w-100 p-1 m-0 " src={`https://image.tmdb.org/t/p/w500${peli.url}`} id={`${peli.id}`} alt={`${peli.titulo}`} />
												</div>
											))
											}
										</div>
									</div>
									<div className="carousel-item">
										<div className="row">
											{corte1.map(peli => (
												<div className="col-6 col-lg-2 align-self-center  p-0 m-0 " key={`${peli.id}`}>
													<img className="d-block w-100 p-1 m-0" src={`https://image.tmdb.org/t/p/w500${peli.url}`} id={`${peli.id}`} alt={`${peli.titulo}`} />
												</div>
											))
											}
										</div>

									</div>
									<div className="carousel-item">
										<div className="row">
											{corte2.map(peli => (
												<div className="col-6 col-lg-2 align-self-center  p-0 m-0 " key={`${peli.id}`}>
													<img className="d-block w-100 p-1 m-0" src={`https://image.tmdb.org/t/p/w500${peli.url}`} id={`${peli.id}`} alt={`${peli.titulo}`} />
												</div>
											))
											}
										</div>

									</div>
									<div className="carousel-item">
										<div className="row">
											{corte3.map(peli => (
												<div className="col-6 col-lg-2 align-self-center  p-0 m-0 " key={`${peli.id}`}>
													<img className="d-block w-100 p-1 m-0" src={`https://image.tmdb.org/t/p/w500${peli.url}`} id={`${peli.id}`} alt={`${peli.titulo}`} />
												</div>
											))
											}
										</div>

									</div>

								</div>


								<ol className="carousel-indicators position-relative mt-3">
									<li data-bs-target="#carouselLogos" data-bs-slide-to="0" className="active bg-dark carousel-control-prev-icon"></li>
									<li data-bs-target="#carouselLogos" data-bs-slide-to="1" className="bg-dark"></li>
									<li data-bs-target="#carouselLogos" data-bs-slide-to="2" className="bg-dark"></li>
									<li data-bs-target="#carouselLogos" data-bs-slide-to="3" className="bg-dark"></li>
								</ol>


								<div className="w-100 px-3 text-center mt-4">
									<a className="carousel-control-prev position-relative d-inline me-4" href="#carouselLogos" data-bs-slide="prev">
										<svg width="2em" height="2em" viewBox="0 0 16 16" className="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
										</svg>
										<span className="visually-hidden">Previous</span>
									</a>
									<a className="carousel-control-next position-relative d-inline" href="#carouselLogos" data-bs-slide="next">
										<svg width="2em" height="2em" viewBox="0 0 16 16" className="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
										</svg>
										<span className="visually-hidden">Next</span>
									</a>





								</div>


							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Carrusel;