const myCarousel = new Carousel(document.querySelector(".carousel"), { 
}); 
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
    on: {
      createSlide: (carousel, slide) => {
        slide.Panzoom = new Panzoom(slide.$el.querySelector(".panzoom"), {
          panOnlyZoomed: true,
          resizeParent: true,
        });
      },
      deleteSlide: (carousel, slide) => {
        if (slide.Panzoom) {
          slide.Panzoom.destroy();
          slide.Panzoom = null;
        }
      },
    },
  });
  
  const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
      target: mainCarousel,
      friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    infinite: false,
  });

