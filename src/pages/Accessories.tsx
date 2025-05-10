import { 
  Card, 
  Row, 
  Col,  
  Button, 
  Tag, 
  Typography, 
  Divider,
  Image,
  Badge,
  Space 
} from 'antd';
import {  
  ShoppingCartOutlined, 
  HeartOutlined, 
  StarFilled 
} from '@ant-design/icons';

const { Title, Text } = Typography; 

const accessoriesData = [
  {
    id: 1,
    name: "Premium Helmet",
    image: "https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww",
    price: 249.99,
    category: "Safety",
    rating: 4.9,
    isNew: true,
    colors: ["Black", "Red", "White"]
  },
  {
    id: 2,
    name: "Leather Riding Gloves",
    image: "https://plus.unsplash.com/premium_photo-1663036897318-f09b2dd5a368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmlkaW5nJTIwR2xvdmVzfGVufDB8fDB8fHww",
    price: 89.99,
    category: "Apparel",
    rating: 4.7,
    isNew: false,
    colors: ["Black", "Brown"]
  },
  {
    id: 3,
    name: "Motorcycle Cover",
    image: "https://media.istockphoto.com/id/154967310/photo/bike-cover.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZJq6kxiqk8nH9lcfM9plim8mJGpBbIA2DrHztg47uA0=",
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
    name: " Shoes",
    image: "https://img.freepik.com/premium-photo/pair-ski-boots-with-number-3-them_1077802-136420.jpg?ga=GA1.1.330648536.1746364366&semt=ais_hybrid&w=740",
    price: 79.99,
    category: "Storage",
    rating: 4.6,
    isNew: true,
    colors: ["Black", "Gray"]
  },
  {
    id: 6,
    name: "Jacket",
    image: "https://img.freepik.com/free-psd/classic-black-leather-jacket-timeless-fashion-staple_191095-78120.jpg?ga=GA1.1.330648536.1746364366&semt=ais_hybrid&w=740",
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
                  <Button type="primary" style={{ backgroundColor: '#1890ff',padding:'6px', borderColor: '#1890ff' }} icon={<ShoppingCartOutlined />}>Add to Cart</Button>
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