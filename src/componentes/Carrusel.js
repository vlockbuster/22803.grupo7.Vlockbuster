
const Carrusel = () => {
  return (
    <>
    
<div className="container">
	<div className="row">
		<div className="col-md-12">
			<div className="lc-block">
				<div id="carouselLogos" className="carousel slide pt-5 pb-4" data-bs-ride="carousel">

					<div className="carousel-inner px-5">
						<div className="carousel-item active">
							<div className="row">
								<div className="col-6 col-lg-2 align-self-center">
									<img className="d-block w-100 px-3 mb-3" src={'../img/1.jpg'} alt=""/>
								</div>
								<div className="col-6 col-lg-2  align-self-center">
									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/2.png" alt=""/>
								</div>
								<div className="col-6 col-lg-2  align-self-center">
									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/3.png" alt=""/>
								</div>
								<div className="col-6 col-lg-2  align-self-center">
									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/12.png" alt=""/>
								</div>
								<div className="col-6 col-lg-2  align-self-center">
									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt=""/>
								</div>
								<div className="col-6 col-lg-2  align-self-center">
									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/6.png" alt=""/>
								</div>
							</div>

						</div>
						<div className="carousel-item">
							<div className="row">
								<div className="col-6 col-lg-2 align-self-center">
									<img className="d-block w-100 px-3 mb-3" src="https://cdn.livecanvas.com/media/logos/11.png" alt=""/>
								</div>
								<div className="col-6 col-lg-2  align-self-center">
									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/2.png" alt=""/>
								</div>
								<div className="col-6 col-lg-2  align-self-center">
									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/3.png" alt=""/>
								</div>
								<div className="col-6 col-lg-2  align-self-center">
									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/12.png" alt=""/>
								</div>
								<div className="col-6 col-lg-2  align-self-center">
									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt=""/>
								</div>
								<div className="col-6 col-lg-2  align-self-center">
									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/6.png" alt=""/>
								</div>
							</div>

						</div>

					</div>

					
	<ol className="carousel-indicators position-relative mt-3">
		<li data-bs-target="#carouselLogos" data-bs-slide-to="0" className="active bg-dark carousel-control-prev-icon"></li>
		<li data-bs-target="#carouselLogos" data-bs-slide-to="1" className="bg-dark"></li>
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