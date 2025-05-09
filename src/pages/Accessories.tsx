import { 
  Card, 
  Row, 
  Col, 
  Input, 
  Select, 
  Button, 
  Tag, 
  Typography, 
  Divider,
  Image,
  Badge,
  Space 
} from 'antd';
import { 
  SearchOutlined, 
  ShoppingCartOutlined, 
  HeartOutlined,
  FilterOutlined,
  StarFilled 
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const accessoriesData = [
  {
    id: 1,
    name: "Premium Helmet",
    image: "https://images.unsplash.com/photo-1588773846150-8a6dd941311f",
    price: 249.99,
    category: "Safety",
    rating: 4.9,
    isNew: true,
    colors: ["Black", "Red", "White"]
  },
  {
    id: 2,
    name: "Leather Riding Gloves",
    image: "https://images.unsplash.com/photo-1604176354204-92660c5d9fb0",
    price: 89.99,
    category: "Apparel",
    rating: 4.7,
    isNew: false,
    colors: ["Black", "Brown"]
  },
  {
    id: 3,
    name: "Motorcycle Cover",
    image: "https://images.unsplash.com/photo-1621372273683-fb5c7e8a4d9e",
    price: 59.99,
    category: "Protection",
    rating: 4.5,
    isNew: true,
    colors: ["Gray", "Black"]
  },
  {
    id: 4,
    name: "LED Headlight Kit",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
    price: 129.99,
    category: "Lighting",
    rating: 4.8,
    isNew: false,
    colors: ["White", "Blue"]
  },
  {
    id: 5,
    name: "Tank Bag",
    image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a",
    price: 79.99,
    category: "Storage",
    rating: 4.6,
    isNew: true,
    colors: ["Black", "Gray"]
  },
  {
    id: 6,
    name: "Exhaust Pipe",
    image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19",
    price: 349.99,
    category: "Performance",
    rating: 4.9,
    isNew: false,
    colors: ["Chrome", "Black"]
  },
];

const Accessories = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Motorcycle Accessories</Title>
      <Text type="secondary" style={{ textAlign: 'center', display: 'block', marginBottom: 40 }}>
        Premium gear and parts for your ride
      </Text>

      {/* Search and Filter Section */}
      <Card style={{ marginBottom: 24 }}>
        <Space size="large" style={{ width: '100%' }}>
          <Search
            placeholder="Search accessories..."
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            style={{ width: 400 }}
          />
          
          <Select
            placeholder="Category"
            style={{ width: 180 }}
            suffixIcon={<FilterOutlined />}
          >
            <Option value="all">All Categories</Option>
            <Option value="Safety">Safety</Option>
            <Option value="Apparel">Apparel</Option>
            <Option value="Protection">Protection</Option>
            <Option value="Lighting">Lighting</Option>
            <Option value="Storage">Storage</Option>
            <Option value="Performance">Performance</Option>
          </Select>

          <Select
            placeholder="Price Range"
            style={{ width: 180 }}
            suffixIcon={<FilterOutlined />}
          >
            <Option value="all">All Prices</Option>
            <Option value="0-50">$0 - $50</Option>
            <Option value="50-100">$50 - $100</Option>
            <Option value="100-200">$100 - $200</Option>
            <Option value="200+">$200+</Option>
          </Select>
        </Space>
      </Card>

      {/* Accessories Grid */}
      <Row gutter={[24, 24]}>
        {accessoriesData.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={8} xl={6}>
            <Badge.Ribbon 
              text="NEW" 
              color="red" 
              style={{ display: item.isNew ? 'block' : 'none' }}
            >
              <Card
                hoverable
                cover={
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={200}
                    style={{ objectFit: 'cover' }}
                    preview={false}
                  />
                }
                actions={[
                  <Button type="text" icon={<HeartOutlined />} />,
                  <Button type="primary" icon={<ShoppingCartOutlined />}>Add to Cart</Button>
                ]}
              >
                <div style={{ marginBottom: 12 }}>
                  <Tag color="blue">{item.category}</Tag>
                  {item.colors.map((color, i) => (
                    <Tag key={i}>{color}</Tag>
                  ))}
                </div>
                
                <Title level={5} style={{ marginBottom: 8 }}>{item.name}</Title>
                
                <Space size="small">
                  <StarFilled style={{ color: '#faad14' }} />
                  <Text>{item.rating}</Text>
                </Space>
                
                <Divider style={{ margin: '12px 0' }} />
                
                <Text strong style={{ fontSize: 18 }}>${item.price.toFixed(2)}</Text>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Button type="primary" size="large">Load More Accessories</Button>
      </div>
    </div>
  );
};

export default Accessories;