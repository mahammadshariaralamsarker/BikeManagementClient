import { CalendarOutlined, FileTextOutlined, TeamOutlined } from '@ant-design/icons';

const newsData = [
  {
    id: 1,
    title: "2024 British Superbike Calendar",
    source: "Bennetts Insurance",
    description: "Over 18,000 Bennetts customers enjoy unprecedented access to paddock areas and rider meet-and-greets.",
    image: "https://images.unsplash.com/photo-1591092019255-a6d355a7f8aa",
    tag: "Racing",
    icon: <CalendarOutlined />,
  },
  {
    id: 2,
    title: "Yamaha FZS1000 Fazer (2001-2005)",
    source: "Motorcycle Monthly",
    description: "Comprehensive guide to this iconic sport-tourer including common issues and market values.",
    image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19",
    tag: "Review",
    icon: <FileTextOutlined />,
  },
  {
    id: 3,
    title: "Exclusive Member Benefits Update",
    source: "Bennetts Insurance",
    description: "Over 18,000 Bennetts customers now enjoy premium roadside assistance coverage upgrades.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    tag: "Membership",
    icon: <TeamOutlined />,
  },
  {
    id: 4,
    title: "Exclusive Member Benefits Update",
    source: "Bennetts Insurance",
    description: "Over 18,000 Bennetts customers now enjoy premium roadside assistance coverage upgrades.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    tag: "Membership",
    icon: <TeamOutlined />,
  },
];

const LatestNewsSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Latest News</h2>
        <p className="text-gray-500">Stay updated with the latest in motorcycle maintenance and riding</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8   mx-auto">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={news.image}
              alt={news.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium bg-blue-100 px-3 py-1 rounded-full">
                  {news.icon}
                  {news.tag}
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">{news.title}</h4>
              <p className="text-gray-600 text-sm font-medium mb-2">{news.source}</p>
              <p className="text-gray-500 text-sm line-clamp-3">{news.description}</p>
              <div className="mt-auto pt-4">
                <button className="text-blue-600 hover:underline text-sm font-medium">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-8 py-2 text-lg rounded-md hover:bg-blue-700 transition">
          View All News
        </button>
      </div>
    </section>
  );
};

export default LatestNewsSection;
