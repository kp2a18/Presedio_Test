import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyItem from './PropertyItem';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost:8081/propertyform');
      setProperties(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8081/propertyform');
      setProperties(properties.filter(property => property._id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {properties.map(property => (
        <PropertyItem key={property._id} property={property} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PropertyList;
