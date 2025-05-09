import React, { useState } from "react";
import {
  Image,
  Row,
  Col,
  Card,
  Tag,
  Button,
  Space,
  Typography,
  Divider,
  Tooltip,
} from "antd";
import {
  HeartOutlined,
  HeartFilled,
  EyeOutlined,
  ShoppingCartOutlined,
  StarFilled,
} from "@ant-design/icons";

const { Title, Text } = Typography;

type MotorcycleStatus = "Available" | "Booked" | "Maintenance";

const statusColors: Record<MotorcycleStatus, string> = {
  Available: "green",
  Booked: "orange",
  Maintenance: "red",
};

interface Motorcycle {
  id: number;
  name: string;
  image: string;
  price: string;
  type: string;
  status: MotorcycleStatus;
  rating: number;
  specs: string[];
}

const motorcycleData: Motorcycle[] = [
  {
    id: 1,
    name: "Honda CBR500R",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    price: "$6,499",
    type: "Sport",
    status: "Available",
    rating: 4.8,
    specs: ["471cc", "47 HP", "430 lbs"],
  },
  {
    id: 2,
    name: "Yamaha R7",
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f",
    price: "$8,999",
    type: "SuperSport",
    status: "Available",
    rating: 4.9,
    specs: ["689cc", "72 HP", "414 lbs"],
  },
  {
    id: 1,
    name: "Honda CBR500R",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    price: "$6,499",
    type: "Sport",
    status: "Available",
    rating: 4.8,
    specs: ["471cc", "47 HP", "430 lbs"],
  },
  {
    id: 6,
    name: "BMW R 1250 GS",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
    price: "$17,995",
    type: "Adventure",
    status: "Available",
    rating: 4.9,
    specs: ["1254cc", "136 HP", "549 lbs"],
  },
];

const MotorcycleGallery: React.FC = () => {
  const [likedBikes, setLikedBikes] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedBikes((prev) =>
      prev.includes(id) ? prev.filter((bikeId) => bikeId !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ margin: "24px 0" }}>
      <Title
        level={3}
        style={{ marginBottom: 24, textAlign: "center", fontSize: 32 }}
      >
        Our Preordered Bikes
      </Title>

      <Row gutter={[24, 24]}>
        {motorcycleData.map((bike) => (
          <Col key={bike.id} xs={24} sm={12} md={8} lg={8} xl={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={bike.image}
                  alt={bike.name}
                  height={200}
                  width="100%"
                  style={{ objectFit: "cover" }}
                  preview={{
                    mask: (
                      <EyeOutlined style={{ fontSize: 24, color: "#fff" }} />
                    ),
                  }}
                />
              }
              actions={[
                <Button
                  type="text"
                  icon={
                    likedBikes.includes(bike.id) ? (
                      <HeartFilled style={{ color: "red" }} />
                    ) : (
                      <HeartOutlined />
                    )
                  }
                  onClick={() => toggleLike(bike.id)}
                />,
                <Button
                  type="default"
                  style={{
                    backgroundColor: "#2563EB", // modern dark color
                    color: "#ffffff",
                    fontSize: 12,
                    fontWeight: 500,
                    padding: "8px 24px",
                    borderRadius: 6,
                    border: "none",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.3s ease",
                  }}
                  icon={<ShoppingCartOutlined />}
                >
                  Book Now
                </Button>,
              ]}
            >
              <div style={{ marginBottom: 12 }}>
                <Space>
                  <Tag color={statusColors[bike.status]}>{bike.status}</Tag>
                  <Tag color="blue">{bike.type}</Tag>
                </Space>
              </div>

              <Title level={5}>{bike.name}</Title>
              <Text strong style={{ fontSize: 18 }}>
                {bike.price}
              </Text>

              <Divider style={{ margin: "12px 0" }} />

              <Space size="small" wrap>
                <StarFilled style={{ color: "#faad14" }} />
                <Text>{bike.rating}</Text>
                <Text type="secondary">|</Text>
                <Tooltip title={bike.specs.join(", ")}>
                  {bike.specs.map((spec, index) => (
                    <Text key={index} type="secondary">
                      {spec}
                      {index < bike.specs.length - 1 ? "," : ""}
                    </Text>
                  ))}
                </Tooltip>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MotorcycleGallery;
