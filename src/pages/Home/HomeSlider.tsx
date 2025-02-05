import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import bike1 from "../../assets/harley-davidson-eeTJKC_wz34-unsplash.jpg";
import bike2 from "../../assets/pexels-abhinav-9460781.jpg";
import bike3 from "../../assets/pexels-cottonbro-5803348.jpg";
export function HomeSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const sliderItems = [
    {
      id: 1,
      image: bike1,
      heading: " Save Big on Mountain Bikes!",
      description:
        "Get the best mountain bikes with <span class='text-red-400 font-bold'>30% OFF</span>!",
      buttonText: "Explore Now",
    },
    {
      id: 2,
      image: bike2,
      heading: "🔥 Limited-Time Offer: 40% OFF!",
      description:
        "Shop now and save <span class='text-red-400 font-bold'>40% OFF</span>!",
      buttonText: "Grab Deal",
    },
    {
      id: 3,
      image: bike3,
      heading: "Ride in Style with 50% OFF!",
      description:
        "Get <span class='text-red-400 font-bold'>50% OFF</span> on all bikes!",
      buttonText: "Shop Now",
    },
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {sliderItems.map((item) => (
          <div className="embla__slide relative " key={item.id}>
            <img
              src={item.image}
              alt=""
              className="w-full max-h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-65"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-3xl font-bold font-orbitron mb-2">
                {item.heading}
              </h2>
              <p
                className="text-lg mb-4"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
              <button className="bg-primary px-6 py-2 rounded-lg font-semibold text-white transition">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
