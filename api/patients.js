import axios from "./axios";

export default {
  get: () => axios.get('/patients'),
  add: values => axios.post('/patients', values),
  allAppointmentsByPatientId: id => axios.get(`/patients/${id}`)
}
