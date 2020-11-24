const SET_PLACE = 'SET_PLACE';

interface IAction {
    type: string,
    payload: string | object | boolean,
};

type placeType = {
    code: string,
    name: string,
};

const setPlace = (place:placeType ): IAction => {
    return {
        type: SET_PLACE,
        payload: place,
    };
};

export { setPlace };
