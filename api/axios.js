import axios from "axios";
import Constants from "expo-constants";
const {manifest} = Constants;

axios.defaults.baseURL = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? 'http://' + manifest.debuggerHost.split(`:`).shift().concat(`:6666`)
  : `http://api.example.com`;

export default axios
