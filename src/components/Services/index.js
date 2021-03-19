import React from 'react';
import { Input, Row, Col } from 'antd'; 
import { SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import capitalize from '../../helpers/capitalize';
import PageHeader from '../PageHeader';
import { Header, Title, InputStyle, Container, CompanyContainer, CompanyWrapper, CompanyLogo, CompanyName, HeaderBox, HeaderTitle } from './style';

const tempCompany = [
  {
    id: 1,
    name: 'Netflix',
    img: 'https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png'
  },
  {
    id: 2,
    name: 'YouTube',
    img: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-512.png'
  },
  {
    id: 3,
    name: 'Disney+',
    img: 'https://i.pcmag.com/imagery/reviews/06d8Po5VgMWjpiRU0RpZoul-5..1582729388.png'
  },
  {
    id: 4,
    name: 'Viu',
    img: 'https://newcastlebeach.org/images/viu-logo-8.jpg'
  },
  {
    id: 5,
    name: 'Hulu',
    img: 'https://icon-library.com/images/hulu-icon/hulu-icon-8.jpg'
  },
  {
    id: 6,
    name: 'HBO Max',
    img: 'https://1.bp.blogspot.com/-NwBWQLKcrZ0/XuzAIu1FibI/AAAAAAAAPp0/x-D7VE_vpgsIZevz_KIpBbyVCYcLZE0RwCLcBGAsYHQ/s1600/square%2Bsocial%2Blogo%2B400%2Bx%2B400_0.png'
  },
];

const Services = () => {
  const { service } = useParams();

  return (
    <>
      {/*<PageHeader title={capitalize(Company)}/>
      <div className={Header}>
        <div className={Title}>Streaming</div>
      </div>*/}

      <Row justify="center">
        <Col xs={24} md={12}>
          <div className={Container}>
            <div className={HeaderTitle}>
              <span><ArrowLeftOutlined/></span>
            </div>
            <div className={HeaderBox}>
              <div style={{margin: "0% 4%"}}>
                <div>Services and plans</div>
                <div className={Title}>Streaming</div>
              </div>
            </div>
            <div style={{marginTop: "132px"}}>
            <Input className={InputStyle} placeholder="Search Provider" prefix={<SearchOutlined />} />
            <Row className={CompanyContainer} gutter={[16,16]}>
              {tempCompany.map(Company => (
                <Col xs={12} md={8} key={Company.id}>
                  <a href={`/Company/1`}>
                    <div className={CompanyWrapper}>
                      <img className={CompanyLogo} src={Company.img} alt={Company.name} />
                      <div className={CompanyName}>{Company.name}</div>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
};

export default Services;