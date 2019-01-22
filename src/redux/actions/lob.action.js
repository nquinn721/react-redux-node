import Service from './service';

export const getData = (dispatch) => () => {
    Service.dispatchGet(dispatch, 'lob', {
        init: 'GET_LOB_DATA',
        success: 'GET_LOB_DATA_SUCCESS',
        error: 'GET_LOB_DATA_FAILED'
    });
}