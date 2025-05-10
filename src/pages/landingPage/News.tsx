import { useState } from 'react';
import { CalendarOutlined, ToolOutlined, TeamOutlined, FileTextOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const newsData = [
  {
    id: 1,
    title: "Essential Winter Bike Maintenance Guide",
    source: "Bike Maintenance Pro",
    description: "Learn how to properly store and maintain your motorcycle during winter months to prevent corrosion and damage.",
    image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tag: "Maintenance",
    icon: <ToolOutlined />,
  },
  {
    id: 2,
    title: "2024 Motorcycle Service Schedule",
    source: "Rider's Handbook",
    description: "Complete maintenance timeline for all major bike models - know when to change oil, filters, and brake fluids.",
    image: "https://images.unsplash.com/photo-1580310614656-6a7a13a119b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tag: "Schedule",
    icon: <CalendarOutlined />,
  },
  {
    id: 3,
    title: "Chain Maintenance Masterclass",
    source: "Moto Tech",
    description: "Step-by-step guide to cleaning, lubricating and adjusting your motorcycle chain for maximum lifespan.",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    tag: "Tutorial",
    icon: <FileTextOutlined />,
  },
  {
    id: 4,
    title: "Premium Member Workshop Access",
    source: "Bike Care Club",
    description: "Members now get exclusive access to our professional workshop tools and expert guidance sessions.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tag: "Membership",
    icon: <TeamOutlined />,
  },
  {
    id: 5,
    title: "DIY Oil Change: Complete Guide",
    source: "Home Mechanics",
    description: "Everything you need to know to change your motorcycle oil like a professional in your own garage.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tag: "How-to",
    icon: <ToolOutlined />,
  },
  {
    id: 6,
    title: "Tire Pressure Monitoring Systems",
    source: "Ride Safe",
    description: "New technologies that help riders maintain optimal tire pressure and when to replace your tires.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tag: "Safety",
    icon: <FileTextOutlined />,
  },
  {
    id: 7,
    title: "Brake System Maintenance Checklist",
    source: "Stop Safe",
    description: "Critical checks for your braking system to ensure maximum stopping power and safety on the road.",
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tag: "Safety",
    icon: <ToolOutlined />,
  },
  {
    id: 8,
    title: "Annual Bike Maintenance Packages",
    source: "Bike Care Club",
    description: "Our comprehensive maintenance packages now include free pick-up and delivery for premium members.",
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tag: "Membership",
    icon: <TeamOutlined />,
  },
];

const LatestNewsSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMoreNews = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setVisibleItems(prev => prev + 4);
      setIsLoading(false);
    }, 800);
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Bike Maintenance News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest maintenance tips, tutorials, and service updates
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center my-8">
            <Spin indicator={antIcon} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.slice(0, visibleItems).map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:border-blue-200"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.onerror = null; 
                    img.src = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                  }}
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 text-white text-xs font-medium bg-blue-600 px-2.5 py-1 rounded-full">
                    {news.icon}
                    {news.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <h4 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">{news.title}</h4>
                <p className="text-gray-500 text-xs font-medium mb-3 uppercase tracking-wider">{news.source}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.description}</p>
                <div className="mt-auto">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 transition-colors">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleItems < newsData.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreNews}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-medium rounded-md transition-colors duration-300 inline-flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <LoadingOutlined className="animate-spin" />
                  Loading...
                </>
              ) : (
                'Load More Maintenance Tips'
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNewsSection;