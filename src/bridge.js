export const METHOD_REQUEST = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export const CONTEXT_KEY_CONNECT = 'insurance';

export const PROTOTYPE_NAME_CONNECT = {
    MOBILE_RESPONE: 'mobileServiceAppResponse',
    API_RESPONE_SUCCESS: 'APIRequestAppResponse',
    API_RESPONE_ERROR: 'errorServiceAppResponse',
    REQUEST_MOBILE_SERVICE: 'requestMobileService',
    REQUEST_API_SERVICE: 'requestAPIService',
};

export const callNativeLocalService = (fowardUrl, funcName = PROTOTYPE_NAME_CONNECT.REQUEST_MOBILE_SERVICE) => {
    const fowardParams = JSON.stringify(fowardUrl);
    if (window.androidAppProxy) {
        window.androidAppProxy[funcName](fowardParams);
    }

    if (window.webkit) {
        window.webkit.messageHandlers[funcName].postMessage(fowardParams);
    }
};

export const callNativeHttp = (fowardUrl, funcName = PROTOTYPE_NAME_CONNECT.REQUEST_API_SERVICE) => {
    const fowardParams = JSON.stringify(fowardUrl);
    if (window.androidAppProxy) {
        window.androidAppProxy[funcName](fowardParams);
    }

    if (window.webkit) {
        window.webkit.messageHandlers[funcName].postMessage(fowardParams);
    }
};

export const postApi = (flag, data, urlServer) => {
    const param = { flag, method: METHOD_REQUEST.POST, url: urlServer, url_params: data };
    return callNativeHttp(param);
};

export const getApi = (flag, urlServer) => {
    const param = { flag, method: METHOD_REQUEST.GET, url: urlServer };
    return callNativeHttp(param);
};

export const deleteApi = (flag, urlServer) => {
    const param = { flag, method: METHOD_REQUEST.DELETE, url: urlServer };
    return callNativeHttp(param);
};

export const putApi = (flag, data, urlServer) => {
    const param = { flag, method: METHOD_REQUEST.PUT, url: urlServer, url_params: data };
    return callNativeHttp(param);
};
