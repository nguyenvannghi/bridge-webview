/* eslint-disable eqeqeq */
import { PROTOTYPE_NAME_CONNECT } from './bridge';

export const getNativeLocalService = (callback, context = PROTOTYPE_NAME_CONNECT.MOBILE_RESPONE) => {
    window[context] = async (res, flag) => {
        if (res && typeof callback === 'function') {
            await callback(res, flag);
        }
    };
};

export const fetchAPISucceed = (flagName, callback, context = PROTOTYPE_NAME_CONNECT.API_RESPONE_SUCCESS) => {
    window[context] = async (res, flag) => {
        if (flag === flagName && typeof callback === 'function') {
            await callback(res);
        }
    };
};
export const fetchAPIFailed = (callback, context = PROTOTYPE_NAME_CONNECT.API_RESPONE_ERROR) => {
    window[context] = async res => {
        if (res && typeof callback === 'function') {
            await callback(res);
        }
    };
};
