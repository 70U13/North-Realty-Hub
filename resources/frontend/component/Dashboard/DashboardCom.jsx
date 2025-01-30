import React, { useEffect, useState } from 'react'
import apiService, { imgUrl } from '../servicesApi/apiService';

const DashboardCom = () => {
  const [file, setFile] = useState(null);
  const [propertyData, setPropertyData] = useState([]);
  const getData = async () => {
    const response = await apiService.get('get-property');
    setPropertyData(response.data);
  };


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await apiService.post('upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Assuming your backend returns the image URL
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='text-red-500 flex'>
      {propertyData.map((item, index)  => {
        const {picture} = item;
        const img_url = `${imgUrl}/fileupload/property/${picture}`
        return (
          <div key={index}>
          <img src={img_url} alt={`Property ${index}`} />
        </div>
        )
      })}
      
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default DashboardCom
