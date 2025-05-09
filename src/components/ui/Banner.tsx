import { Carousel } from 'antd';
import { CarOutlined as BikeIcon } from '@ant-design/icons';
import DashboardIcon from '@ant-design/icons/DashboardOutlined';
import SettingIcon from '@ant-design/icons/SettingOutlined';

const Banner = () => {
  const slides = [
    {
      icon: <BikeIcon className="text-white text-5xl" />,
      title: 'Bike Inventory Tracking',
      description: 'Manage your entire bike fleet with our comprehensive tracking system',
      bg: 'https://media.istockphoto.com/id/1051029946/photo/people-holding-hand-are-repairing-a-motorcycle.jpg?s=1024x1024&w=is&k=20&c=9w8trgjpuOCRd8NNbj2lGvIOyZLGG9nexU4ZdTSkonY='
    },
    {
      icon: <SettingIcon className="text-white text-5xl" />,
      title: 'Maintenance Scheduling',
      description: 'Never miss a service with our automated maintenance reminders',
      bg: 'https://media.istockphoto.com/id/1188821035/photo/worker-repairing-motorcycle-engine-at-the-workshop.jpg?s=2048x2048&w=is&k=20&c=plHGwPdaPlVoUOV19zfzaIhHzyyVs6D1CF2DKBZcDLo='
    },
    {
      icon: <DashboardIcon className="text-white text-5xl" />,
      title: 'Usage Analytics',
      description: 'Gain insights into bike utilization patterns and performance metrics',
      bg: 'https://media.istockphoto.com/id/833175210/photo/at-motorcycle-servicess.jpg?s=2048x2048&w=is&k=20&c=huSNs1aLeXpm74GNzQUj0yIkYEYtQGFAaS781DcQqwg='
    }
  ];

  return (
    <Carousel autoplay effect="fade" className="mb-6">
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            className="h-[300px] rounded-lg text-center text-white flex flex-col items-center justify-center px-5"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {slide.icon}
            <h3 className="text-2xl font-semibold mt-4">{slide.title}</h3>
            <p className="text-white text-opacity-80 max-w-md mt-2">{slide.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
