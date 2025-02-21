import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Import the Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, Typography } from "@mui/material";
import { User } from "lucide-react";

function TestimonialsSlider({ testimonials }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} style={{ boxShadow: 3, marginBlock: "10px" }}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 3 }}>
            <User size={48} style={{ margin: "0 auto 16px" }} />
            <Typography variant="body1" color="textSecondary" mb={2} fontStyle="italic">
              &quot;{testimonial.quote}&quot;
            </Typography>
            <Typography variant="h6" fontWeight="medium">
              {testimonial.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {testimonial.location}
            </Typography>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

TestimonialsSlider.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TestimonialsSlider;
