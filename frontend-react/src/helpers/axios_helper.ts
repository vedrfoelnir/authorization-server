import axios from 'axios';
import { getUser } from './auth_helper';

const _callApi = (token, url) => {
    const headers = {
        Accept: "application/json",
        Authorization: "Bearer " + token
    };
    
    console.log("Called API with url: " + url + " and token: " + token);

    return axios.get(url, { headers });
}

const callApiUnsecured = (url) => {
    console.log("Called API with url: " + url + " without Token");
    return axios.get(url);
}

export const callApi = (url: String) => {
    console.log("callApi with: " + url );
    return getUser().then(user => {
        if (user && user.access_token) {
            return _callApi(user.access_token, url).catch(error => {
                throw error;
            });
        } else {
            /**return _unsecuredCallApi(url).catch(error => {
                throw error;
            });*/
            throw new Error('user is not logged in');
        }
    });
}
