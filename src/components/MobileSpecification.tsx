import {
  Row,
  Col,
  Card,
  Accordion,
  Tab,
  Tabs,
  Badge,
  ListGroup,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

interface MobileSpecificationProps {
  specifications: any;
}

function generateImageUrls(baseUrl: string): string[] {
  const urls: string[] = [];

  for (let i = 1; i <= 10; i++) {
    const newUrl = baseUrl.replace("-1.jpg", `-${i}.jpg`);
    urls.push(newUrl);
  }

  return urls;
}

function MobileSpecification({ specifications }: MobileSpecificationProps) {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    const checkImageExists = async () => {
      try {
        const response = await fetch(specifications.general.image, {
          method: "HEAD",
        });
        setImageExists(response.ok);
      } catch (error) {
        setImageExists(false);
      }
    };

    checkImageExists();
  }, [specifications.general.image]);
  return (
    <>
      <h1 className="text-center mb-4">
        <Badge bg="secondary">{specifications.general.name}</Badge>
      </h1>

      <Tabs defaultActiveKey="overview" className="mb-3">
        <Tab eventKey="overview" title="Overview">
          <Row>
            <Col md={5} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    imageExists
                      ? specifications.general.image
                      : "https://dummyimage.com/600x800/0B5ED7/ffffff"
                  }
                />
                <Card.Body>
                  <Card.Title className="text-center mb-4">
                    Key Features
                  </Card.Title>
                  <ListGroup variant="flush" style={{ textAlign: "left" }}>
                    <ListGroup.Item>
                      <strong>Released:</strong>{" "}
                      {specifications.general.launchDate}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Display:</strong> {specifications.display.size},{" "}
                      {specifications.display.resolution}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Camera:</strong> {specifications.camera.rear}{" "}
                      (rear), {specifications.camera.front} (front)
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Battery:</strong>{" "}
                      {specifications.battery.capacity}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col md={7}>
              <Accordion defaultActiveKey="0" style={{ textAlign: "left" }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>General</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Name:</strong> {specifications.general.name}
                    </p>
                    <p>
                      <strong>Weight:</strong> {specifications.general.weight}
                    </p>
                    <p>
                      <strong>Height:</strong> {specifications.general.height}
                    </p>
                    <p>
                      <strong>Thinkness:</strong>{" "}
                      {specifications.general.thinkness}
                    </p>
                    <p>
                      <strong>Width:</strong> {specifications.general.width}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Memory & Storage</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>RAM:</strong> {specifications.memory.ram}
                    </p>
                    <p>
                      <strong>Storage:</strong> {specifications.memory.storage}
                    </p>
                    <p>
                      <strong>Expandable:</strong>{" "}
                      {specifications.memory.expandable}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Performance</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Chipset:</strong>{" "}
                      {specifications.performance.chipset}
                    </p>
                    <p>
                      <strong>CPU:</strong> {specifications.performance.cpu}
                    </p>
                    <p>
                      <strong>Architecture:</strong>{" "}
                      {specifications.performance.architecture}
                    </p>
                    <p>
                      <strong>Fabrication:</strong>{" "}
                      {specifications.performance.fabrication}
                    </p>
                    <p>
                      <strong>Graphics:</strong>{" "}
                      {specifications.performance.graphics}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Battery</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Capacity:</strong>{" "}
                      {specifications.battery.capacity}
                    </p>
                    <p>
                      <strong>Type:</strong> {specifications.battery.type}
                    </p>
                    <p>
                      <strong>Removable:</strong>{" "}
                      {specifications.battery.removable}
                    </p>
                    <p>
                      <strong>Quick Charging:</strong>{" "}
                      {specifications.battery.quickCharging}
                    </p>
                    <p>
                      <strong>USB Type C:</strong>{" "}
                      {specifications.battery.usbTypeC}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Camera</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Rear Camera:</strong> {specifications.camera.rear}
                    </p>
                    <p>
                      <strong>Front Camera:</strong>{" "}
                      {specifications.camera.front}
                    </p>
                    <p>
                      <strong>Features:</strong>{" "}
                      {specifications.camera.features}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Display</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Type:</strong> {specifications.display.type}
                    </p>
                    <p>
                      <strong>Size:</strong> {specifications.display.size}
                    </p>
                    <p>
                      <strong>Resolution:</strong>{" "}
                      {specifications.display.resolution}
                    </p>
                    <p>
                      <strong>Aspect Ratio:</strong>{" "}
                      {specifications.display.aspectRatio}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Connectivity</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Wi-Fi:</strong> {specifications.connectivity.wifi}
                    </p>
                    <p>
                      <strong>Bluetooth:</strong>{" "}
                      {specifications.connectivity.bluetooth}
                    </p>
                    <p>
                      <strong>GPS:</strong> {specifications.connectivity.gps}
                    </p>
                    <p>
                      <strong>NFC:</strong> {specifications.connectivity.nfc}
                    </p>
                    <p>
                      <strong>USB:</strong> {specifications.connectivity.usb}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>Multimedia</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>FM Radio:</strong> {specifications.multimedia.fm}
                    </p>
                    <p>
                      <strong>Loud Speaker:</strong>{" "}
                      {specifications.multimedia.loudSpeaker}
                    </p>
                    <p>
                      <strong>Audio Jack:</strong>{" "}
                      {specifications.multimedia.audioJack}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>Sensors</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Finger Print:</strong>{" "}
                      {specifications.sensors.fingerPrint}
                    </p>
                    <p>
                      <strong>Finger Print Sensor Position:</strong>{" "}
                      {specifications.sensors.fingerPrintSensorPosition}
                    </p>
                    <p>
                      <strong>Finger Print Sensor Type:</strong>{" "}
                      {specifications.sensors.fingerPrintSensorType}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Tab>

        {imageExists && (
          <Tab eventKey="gallery" title="Gallery">
            <Carousel
              indicators={false}
              controls={true}
              className="image-gallery"
            >
              {generateImageUrls(specifications.general.image).map(
                (image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 carousel-image"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                )
              )}
            </Carousel>
          </Tab>
        )}
      </Tabs>
    </>
  );
}

export default MobileSpecification;
