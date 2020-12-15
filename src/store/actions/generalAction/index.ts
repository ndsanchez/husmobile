const SET_PLACE = 'SET_PLACE';
const DISPLAY_NOTIFICATION = 'DISPLAY_NOTIFICATION';
const DISPLAY_ALERT = 'DISPLAY_ALERT';
const CLOSE_ALERT = 'CLOSE_ALERT';

interface IAction {
    type: string,
    payload: string | object | boolean,
};

type placeType = {
    code: string,
    name: string,
};

const displayAlert = (payload: boolean ): IAction => {
    return {
        type: DISPLAY_ALERT,
        payload,
    };
};

const closeAlert = (payload: boolean ): IAction => {
    return {
        type: CLOSE_ALERT,
        payload,
    };
};

const displayNotification = (payload: boolean ): IAction => {
    return {
        type: DISPLAY_NOTIFICATION,
        payload,
    };
};

const setPlace = (place:placeType ): IAction => {
    return {
        type: SET_PLACE,
        payload: place,
    };
};

export { closeAlert, displayAlert, displayNotification, setPlace };
