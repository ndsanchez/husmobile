const SET_PLACE = 'SET_PLACE';
const DISPLAY_NOTIFICATION = 'DISPLAY_NOTIFICATION';

interface IAction {
    type: string,
    payload: string | object | boolean,
};

type placeType = {
    code: string,
    name: string,
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

export { setPlace, displayNotification };
