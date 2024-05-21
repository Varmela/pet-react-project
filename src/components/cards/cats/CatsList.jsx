import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getAllCats } from '../../../api/petsApi';
import CatsCards from './CatsCards';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../header/Header';
import { PuffLoader } from 'react-spinners';
import Footer from '../../footer/Footer';

const CatsList = ({cats}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['pet-list'],
    queryFn: getAllCats,
  });
console.log(data)
if (isLoading) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <PuffLoader color="#36d7b7" />
    </div>
  );
}

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
    <Header/>
    <h1 style={{textAlign:'center',color:'#8d6e63'}}>List of Cat Breeds</h1>
    <section style={{padding:'20px'}} className="cats-list">
      <Row xs={1} md={4} className="g-4">
        {data && data.map((cat, index) => (
          <Col key={index}>
            <CatsCards cats={cat} />
          </Col>
        ))}
      </Row>
    </section>
    <Footer/>
    </>
    
  );
};

export default CatsList;
