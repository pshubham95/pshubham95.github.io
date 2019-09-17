import React from 'react';
import {
  Row, Col, Divider, Icon,
} from 'antd';
import ImageGallery from 'react-image-gallery';
import Card from '../customcard/customcard';


const projects = () => {
  const images = [...Array(13).keys()].map((_, i) => ({
    original: `/img/project_images/cfRedis/cfRedis_${i + 1}.png`,
    thumbnail: `/img/project_images/cfRedis/cfRedis_${i + 1}.png`,
  }));
  const imagesAspyra = [...Array(8).keys()].map((_, i) => ({
    original: `/img/aspyra/aspyra_${i + 1}.png`,
    thumbnail: `/img/aspyra/aspyra_${i + 1}.png`,
  }));
  return (
    <div className="lesspaddingtop">
      <Card>
        <h2>Projects</h2>
        <div className="divBorder" />
        <div className="mt-15 ml-15">
          <h3 style={{ textTransform: 'capitalize' }}>Redis GUI Client</h3>
          <div className="divBorderDashed" />
        </div>
        <div className="mt-5 ml-20">
          <p>
            This is a redis web based GUI client to connect to a redis server. The application was originally built to connect to a redis instance running on
            {' '}
            <b>predix</b>
            {' '}
but can be easily modified to make it work on any other cloud platform,
            {' '}
            <b>like I have hosted it on heroku</b>
.
          The motivation behind this app was that if we spin up a redis instance on pivotal, bluemix depending on the cloud's security policy the redis instance can only be accessed from the cloud's network and not externally from a redis GUI client running on a local machine.
          Thus, debugging or accessing the state of the redis instance (data in it, CRUD operations) becomes externally difficult. The idea is to push a GUI web application on the same cloud where the redis instance is running so that a database connection can be opened up.

          The application is built using the following techstack:
          </p>
          <ul>
            <li>Angular JS</li>
            <li>Express</li>
          </ul>
          To access the application open up the demo link mentioned below. The username and password is:
          <ul>
            <li>
            Username:
              {' '}
              <b>h</b>
            </li>
            <li style={{ wordBreak: 'break-word' }}>
          Password:
              {' '}
              <b>p128fa7ca6dc693467f5d39fdf433fa3bba33ad68cde29842375ffb9aa9768e4f</b>
            </li>
          </ul>
          <b>Some Screenshots of the app:</b>
          <div className="mt-10">
            <ImageGallery items={images} style={{ height: '300px' }} />
          </div>
          <Divider className="mb-10" />
          <Row>
            <Col span={12}>
              <a rel="noopener noreferrer" href="https://salty-scrubland-44008.herokuapp.com" target="_blank">
                <Icon type="link" />
                <span className="ml-5">
                Demo on heroku
                </span>
              </a>
            </Col>
            <Col span={12}>
              <a rel="noopener noreferrer" href="https://github.com/pshubham95/cf-Redis-UI" target="_blank">
                <Icon type="github" />
                <span className="ml-5">Github link</span>
              </a>
            </Col>
          </Row>
        </div>
        <div className="mt-15 ml-15">
          <h3 style={{ textTransform: 'capitalize' }}>Distributed Job Scheduler</h3>
          <div className="divBorderDashed" />
        </div>
        <div className="mt-5 ml-20">
          <p>
            This projects implements distributed job scheduling across multiple app instances. For instance, if there's an app running on a cloud platform
            which performs a task X every 10 seconds. If there's a single app instance running then there won't be any problems. However, let's say to we horizontally
            scale the app so we might now have five instances of the app running behind a reverse proxy server. In this scenario, every instance would perform the same task
            X every 10 seconds which is unecessary, only one node out of the five should perform the job. This project solves this problem using redis as a communication mechanism, maintaining queues
            between multiple instances. 

            <b>
              The demo is available on heroku. The UI displays output of tasks executed by jobs running at different intervals in different queues.
            </b>
          </p>
          <Divider className="mb-10" />
          <Row>
            <Col span={12}>
              <a rel="noopener noreferrer" href="https://distributed-redis-scheduler.herokuapp.com/" target="_blank">
                <Icon type="link" />
                <span className="ml-5">
                Demo on heroku
                </span>
              </a>
            </Col>
            <Col span={12}>
              <a rel="noopener noreferrer" href="https://github.com/pshubham95/distributed_predix_scheduler" target="_blank">
                <Icon type="github" />
                <span className="ml-5">Github link</span>
              </a>
            </Col>
          </Row>
        </div>
        <div className="mt-30 ml-15">
          <Row>
            <Col span={18}>
              <h3 style={{ textTransform: 'capitalize' }}>COEP Aspyra - Docker Container based Cloud Platform for college students</h3>
            </Col>
            <Col span={6} className="textAlignRight">
              <h4 className="textGray">August 2015 - May 2016</h4>
            </Col>
          </Row>
          <div className="divBorderDashed" />
        </div>
        <div className="mt-5 ml-20">
          <p>
        This project was done by me and my teammates in the final year of our Bachelors of Computer Engineering. The main goal of our project was to design and deploy a basic private cloud platform on the college server. For this purpose we made use of a number of Open Source Technologies. Docker Containers were used extensively in this project as isolated application deployment environments.
        The final product was a web-based platform which could perform the following functions -
          </p>
          <ul>
            <li>Deploy applications developed by college students in customised Docker Containers.</li>
            <li>Assist in creating and deploying CMS websites based on Wordpress, Joomla and Drupal using containers.</li>
            <li>Store and share data</li>
            <li>Perform dynamic code execution and store and display results (useful particularly in cases where large calculations had to be performed)</li>
          </ul>
          <b>Some Screenshots of the app:</b>
          <div className="mt-10">
            <ImageGallery items={imagesAspyra} style={{ height: '300px' }} />
          </div>
          <Divider className="mb-10" />
          <Row>
            <Col span={12}>
              <a rel="noopener noreferrer" href="https://drive.google.com/file/d/12zDFHZEJhUtM3XRDJQ8lmPwa1S67TGIk/view?usp=sharing" target="_blank">
                <Icon type="file" />
                <span className="ml-5">
                Project report
                </span>
              </a>
            </Col>
            <Col span={12}>
              <a rel="noopener noreferrer" href="https://github.com/pshubham95/Aspyra-Paas" target="_blank">
                <Icon type="github" />
                <span className="ml-5">Github link</span>
              </a>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default projects;
