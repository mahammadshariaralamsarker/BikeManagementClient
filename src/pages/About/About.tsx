import MyContainer from "../../components/Shared/MyContainer/MyContainer";

const About = () => {
  return (
    <div className="bg-white">
      <header className="bg-green-500 text-white text-center py-12">
        <h1 className="text-3xl lg:text-4xl font-bold">
          About Us - Bike Haven
        </h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to provide high-quality Bikes and accessories, making
          cycling accessible and enjoyable for everyone.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">85+</h3>
            <p className="text-gray-700">Happy Customers</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">10+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="bg-green-500 text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          To promote a healthy and eco-friendly lifestyle by encouraging cycling
          as a primary mode of transportation and recreation.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <MyContainer>
          <h2 className="text-2xl font-bold">Our Bike Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Mountain Bikes</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Road Bikes</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Hybrid Bikes</h3>
            </div>

            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Kids' Bikes</h3>
            </div>
          </div>
        </MyContainer>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">High-Quality Products</h3>
            <p className="text-gray-700 mt-2">
              We offer the best quality Bikes and accessories at competitive
              prices.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Expert Guidance</h3>
            <p className="text-gray-700 mt-2">
              Our team helps you choose the perfect bike for your needs.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Repair & Maintenance</h3>
            <p className="text-gray-700 mt-2">
              We provide expert repair and servicing for all types of bikes.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Affordable Pricing</h3>
            <p className="text-gray-700 mt-2">
              Get the best deals on top-quality Bikes and accessories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
