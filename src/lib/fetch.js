import 'whatwg-fetch';

import config from 'config';

let defaultOption = {
    //TODO
    //credentials: 'same-origin',
    credentials: 'no-cors'
    //credentials: 'include'
}

let getFullUrl = (url) => {
    if (config.isMock) {
        return `${config.host}${url}`;
    }
    return config.baseUrl + url;
}

let get = (url, data) => {
    let tmp = [];
    if(data) {
        Object.keys(data).map(key => {
            tmp.push(key + '=' + data[key]);
        });
    }

    let query = tmp.join('&');
    if(url.indexOf('?') > -1) {
        url += '&' + query;
    } else url += '?' + query;
    return fetch(getFullUrl(url), defaultOption)
        .then(res => {
            return res.json()
        });
}

let post = (url, data) => {
    let option = Object.assign({}, defaultOption, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return fetch(getFullUrl(url), option);
}


module.exports = {
    get,
    post
}