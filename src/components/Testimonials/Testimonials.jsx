import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer2 from "../../assets/customer2.webp";
import Customer3 from "../../assets/customer3.webp";
import Customer4 from "../../assets/customer4.webp";
import Customer1 from "../../assets/customer1.webp";
import Customer5 from "../../assets/customer5.webp";

import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Review" />

        <div className="flex justify-end mt-5 py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 justify-center items-center bg-zinc-100 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 justify-center items-center bg-zinc-100 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
        }}
        loop={true}
        breakpoints={{
            640: {slidesPerView:1, spaceBetween:20},
            768: {slidesPerView:2, spaceBetween:20},
            1024: {slidesPerView:3, spaceBetween:20}
        }}
         modules={[Navigation]} className="mySwiper">
          {
            review.map(item =>{
                return(
                    <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
          <div className="flex gap-5 items-center">
            <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                <img src={item.image} alt="Customer Image"className="h-full w-full"/>
            </div>
            <div>
              <h5 className="text-xl font-bold">{item.name}</h5>
              <p className="text-zinc-600">{item.profession}</p>
              <span className="flex text-yellow-400 mt-3 text-xl gap-1">{Array.from({length: item.rating}, (_, index)=>(
                <FaStar/>
              ))}</span>
            </div>
          </div>

          <div className="mt-10 min-h-[15vh]">
            <p className="text-zinc-600">{item.para}</p>
          </div>
        </SwiperSlide>                    
                )
            })
          }
          
        </Swiper>

        
      </div>
    </section>
  );
}

export default Testimonials;

const review = [
  {
    id: 1,
    name: "adam",
    profession: "food vlogger",
    rating: "4",
    para: "ldfnsf sdfksdf sdf sdf sfsdfsfdf gdfgsddawe ",
    image: Customer1,
  },
  {
    id: 2,
    name: "john",
    profession: "writer",
    rating: "3.5",
    para: "slgns grgisfjgoij fgdfgidj gdiogj dfoidb dij dfg",
    image: Customer2,
  },
  {
    id: 3,
    name: "rock",
    profession: "driver",
    rating: "3",
    para: "dgsfgrsg9w rgwroij rglrjgn eiugnr g",
    image: Customer3,
  },
  {
    id: 4,
    name: "salman",
    profession: "farmer",
    rating: "5",
    para: "sgij sgsoifj sfoisjf sofijs fsij si soisj fs",
    image: Customer4,
  },
  {
    id: 5,
    name: "krix",
    profession: "athelit",
    rating: "4",
    para: "sdfpjs sroufh sdfoushf sifus hfiush fs",
    image: Customer5,
  },
];
