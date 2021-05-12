var carousel1="slide1.jpg"
var carousel2="slide2.jpg"
var carousel3="slide3.jpg"

var carouselImage=
{
	height:"360px"
}
function Carousel() {
  return (
    <div style={{ paddingLeft:"4px"}} id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
	  <h2> Make a Better Visual Try Onces </h2>
	  <div class="carousel-inner">
	    <div class="carousel-item active">
	        <img src={carousel1}  style={carouselImage} class="d-block w-100" alt="..."/>
	    </div>
	    <div class="carousel-item">
	      <img src={carousel2} style={carouselImage} class="d-block w-100" alt="..."/>
	    </div>
	    <div class="carousel-item">
	      <img src={carousel3} style={carouselImage} class="d-block w-100" alt="..."/>
	    </div>
	  </div>
	</div>
  );
}

export default Carousel;
