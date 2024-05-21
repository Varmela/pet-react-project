import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import DogsCards from '../components/cards/dogs/DogsCards';
import CatsCards from '../components/cards/cats/CatsCards';
import BirdsCards from '../components/cards/birds/BirdsCards';
import { useQuery } from '@tanstack/react-query';
import { getAllBirds, getAllCats, getAllDogs } from '../api/petsApi';
import axios from 'axios';
import { PuffLoader } from 'react-spinners';

const AnimalSearch = () => {
  const { query } = useParams();
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: dogsList } = useQuery({
    queryFn: getAllDogs,
  });
  const { data: catsList } = useQuery({
    queryFn: getAllCats,
  });
  const { data: birdsList } = useQuery({
    queryFn: getAllBirds,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogsResponse = await axios.get(`https://freetestapi.com/api/v1/dogs?search=${query}`);
        setDogs(dogsResponse.data);
        const catsResponse = await axios.get(`https://freetestapi.com/api/v1/cats?search=${query}`);
        setCats(catsResponse.data);
        const birdsResponse = await axios.get(`https://freetestapi.com/api/v1/birds?search=${query}`);
        setBirds(birdsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div>
      <Header />
      {loading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {loading && <PuffLoader color="#36d7b7" />}
    </div>}
      {!loading && dogs.length === 0 && cats.length === 0 && birds.length === 0 && <p>No animals found</p>}
      {!loading && dogs.length > 0 && <DogsCards dogs={dogs[0]} />}
      {!loading && cats.length > 0 && <CatsCards cats={cats[0]} />}
      {!loading && birds.length > 0 && <BirdsCards birds={birds[0]} />}
    </div>
  );
};

export default AnimalSearch;
