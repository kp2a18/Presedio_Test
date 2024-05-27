import React from 'react';
import PropertyForm from './PropertyForm';

const PropertyItem = ({ property, onDelete }) => {
  const handleDelete = () => {
    onDelete(property._id);
  };

  return (
    <div>
      <h3>{property.title}</h3>
      <p>{property.address}</p>
      <p>{property.area} sq ft</p>
      <p>{property.bedrooms} Bedrooms</p>
      <p>{property.bathrooms} Bathrooms</p>
      <p>${property.price}</p>
      <p>{property.description}</p>
      <p>Nearby Hospitals: {property.nearbyHospitals}</p>
      <p>Nearby Colleges: {property.nearbyColleges}</p>
      <p>Contact: {property.contact}</p>
      <button onClick={handleDelete}>Delete</button>
      <PropertyForm property={property} />
    </div>
  );
};

export default PropertyItem;
