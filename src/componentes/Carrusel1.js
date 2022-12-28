

const Carrusel1 = () => {
  return (

    <div className="container py-4">
   
    
      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          <div className="lc-block">
            <div id="testimonial-slider" className="carousel slide" data-bs-ride="carousel">
    
              <ul className="carousel-indicators">
                <li data-bs-target="#testimonial-slider" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#testimonial-slider" data-bs-slide-to="1"></li>
                <li data-bs-target="#testimonial-slider" data-bs-slide-to="2"></li>
              </ul>
    
              <div className="carousel-inner">
                <div className="carousel-item ">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;h=768&amp;fit=crop&amp;ixid=eyJhcHBfaWQiOjM3ODR9" alt="Photo by Christopher Campbell"/>
                  <div className="carousel-caption text-white">
                    <p editable="inline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo nulla, suscipit non dapibus vitae, dignissim id quam. Donec eget nulla tellus.&nbsp;</p>
                    <h5 editable="inline"><strong>Eddie Valiant</strong></h5>
                  </div>
    
    
                </div>
                <div className="carousel-item active">
                  <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;h=768&amp;fit=crop&amp;ixid=eyJhcHBfaWQiOjM3ODR9" alt="Photo by averie woodard"/>
                  <div className="carousel-caption text-white">
                    <p editable="inline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo nulla, suscipit non dapibus vitae, dignissim id quam. Donec eget nulla tellus.&nbsp;</p>
                    <h5 editable="inline"><strong>Eddie Valiant</strong></h5>
                  </div>
    
    
                </div>
                <div className="carousel-item ">
                  <img src="https://images.unsplash.com/photo-1471017851983-fc49d89c57c2?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;h=768&amp;fit=crop&amp;ixid=eyJhcHBfaWQiOjM3ODR9" alt="Photo by Jens Lindner"/>
                  <div className="carousel-caption text-white">
                    <p editable="inline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo nulla, suscipit non dapibus vitae, dignissim id quam. Donec eget nulla tellus.&nbsp;</p>
                    <h5 editable="inline"><strong>Eddie Valiant</strong></h5>
                  </div>
    
    
                </div>
    
              </div>
    
              <a className="carousel-control-prev" href="#testimonial-slider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a className="carousel-control-next" href="#testimonial-slider" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </a>
    
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Carrusel1