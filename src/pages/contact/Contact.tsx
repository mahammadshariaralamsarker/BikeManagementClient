import { 
  Card, 
  Form, 
  Input, 
  Button, 
  Row, 
  Col, 
  Typography, 
  Divider,
  message,
  List,
  Avatar,
  Space
} from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  SendOutlined,
  ClockCircleOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterOutlined,
  LinkedinFilled
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const ContactUsPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values: { name: string; email: string; subject: string; message: string }) => {
    console.log('Form values:', values);
    message.success('Message sent successfully!');
    form.resetFields();
  };

  const contactMethods = [
    {
      icon: <MailOutlined style={{ color: '#ff4d4f' }} />,
      title: 'Email Support',
      content: 'support@bikehub.com',
      action: 'mailto:support@bikehub.com'
    },
    {
      icon: <PhoneOutlined style={{ color: '#52c41a' }} />,
      title: '24/7 Helpline',
      content: '+1 (800) 555-0199',
      action: 'tel:+18005550199'
    },
    {
      icon: <EnvironmentOutlined style={{ color: '#1890ff' }} />,
      title: 'Headquarters',
      content: '4517 Washington Ave, Manchester, KY 39495',
      action: 'https://goo.gl/maps/xyz'
    },
    {
      icon: <ClockCircleOutlined style={{ color: '#faad14' }} />,
      title: 'Service Hours',
      content: 'Mon-Fri: 8AM-8PM\nSat-Sun: 9AM-5PM'
    }
  ];

  const socialLinks = [
    { icon: <FacebookFilled />, url: '#', color: '#4267B2' },
    { icon: <InstagramFilled />, url: '#', color: '#E1306C' },
    { icon: <TwitterOutlined />, url: '#', color: '#1DA1F2' },
    { icon: <LinkedinFilled />, url: '#', color: '#0077B5' }
  ];

  return (
    <div className="contact-page" style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 8 }}>
        Contact Moto Store Hub
      </Title>
      <Text type="secondary" style={{ textAlign: 'center', display: 'block', marginBottom: 48 }}>
        We're here to help with your motorcycle needs
      </Text>

      <Row gutter={[32, 32]}>
        {/* Contact Info */}
        <Col xs={24} md={10}>
          <Card bordered={false} style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>
            <Title level={4} style={{ marginBottom: 24 }}>Our Contacts</Title>
            
            <List
              dataSource={contactMethods}
              renderItem={(item) => (
                <List.Item style={{ padding: '12px 0' }}>
                  <List.Item.Meta
                    avatar={<Avatar size="large" icon={item.icon} style={{ backgroundColor: 'transparent' }} />}
                    title={<Text strong>{item.title}</Text>}
                    description={
                      item.action ? (
                        <a href={item.action} style={{ color: '#1890ff' }}>{item.content}</a>
                      ) : (
                        <Text style={{ whiteSpace: 'pre-line' }}>{item.content}</Text>
                      )
                    }
                  />
                </List.Item>
              )}
            />

            <Divider>Connect With Us</Divider>
            
            <Space size="middle" style={{ justifyContent: 'center', width: '100%' }}>
              {socialLinks.map((social, i) => (
                <Button
                  key={i}
                  type="text"
                  shape="circle"
                  size="large"
                  icon={social.icon}
                  style={{ color: social.color, fontSize: 20 }}
                  onClick={() => window.open(social.url, '_blank')}
                />
              ))}
            </Space>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col xs={24} md={14}>
          <Card style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>
            <Title level={4} style={{ marginBottom: 24 }}>Quick Message</Title>
            
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="name"
                    label="Full Name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input placeholder="John Smith" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Invalid email address' }
                    ]}
                  >
                    <Input placeholder="john@example.com" size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input placeholder="Regarding my bike service..." size="large" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea
                  rows={5}
                  placeholder="Type your message here..."
                  showCount
                  maxLength={500}
                  style={{ resize: 'none' }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                  size="large"
                  block
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Map Section */}
      <Divider />
      <Title level={4} style={{ textAlign: 'center', marginBottom: 24 }}>Our Location</Title>
      <div style={{ height: 400, background: '#f0f2f5', borderRadius: 8, overflow: 'hidden' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179035!2d-73.9882796845938!3d40.74844047932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactUsPage;