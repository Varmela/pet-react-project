import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getAllDogs } from '../../../api/petsApi';
import DogsCards from './DogsCards';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../header/Header';
import { PuffLoader } from 'react-spinners';
import Footer from '../../footer/Footer';

const DogsLists = ({dogs}) => {
  const { data:dogList, isLoading, isError } = useQuery({
    queryKey: ['pet-list'],
    queryFn: getAllDogs,
  });
  console.log(dogList)

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
    <h1 style={{textAlign:'center',color:'#8d6e63'}}>List of Dog Breeds</h1>
    <section style={{padding:'20px'}} className="dogs-list">
      <Row xs={1} md={4} className="g-4">
        {dogList&& dogList.map((dog, index) => (
          <Col key={index}>
            <DogsCards dogs={dog} />
          </Col>
        ))}
      </Row>
    </section>
    <Footer/>
    </>
  );
};

export default DogsLists;
