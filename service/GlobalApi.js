import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
});

const CreateNewResume = (data) => axiosClient.post('/use-resumes', data);
const GetUserResumes = (userEmail) => axiosClient.get('/use-resumes?filters[userEmail][$eq]=' + userEmail);
const UpdateResumeDetail = (id, data) => axiosClient.put(`/use-resumes/${id}`, data); 

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail
};
