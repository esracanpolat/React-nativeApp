import axios from 'axios';


const getAllList = async (setData) => {
    const resp = axios.get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons');
    return resp.data;
}

export { getAllList }