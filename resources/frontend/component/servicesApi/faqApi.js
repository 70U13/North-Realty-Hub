import apiService from './apiService';  // Import your apiService

// This function will call the /faqs endpoint
export const fetchFaqs = async () => {
  try {
    const response = await apiService.get('/faqs');  // Adjust this path based on your Laravel API
    console.log(response.data);  // Log the response to check its structure
    return response.data;  // Return the data received from the API
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];  // Return an empty array if there is an error
  }
};
