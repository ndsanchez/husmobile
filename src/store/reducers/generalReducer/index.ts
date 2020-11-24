const generalInitialState = {
    place: {
        code: '01',
        name: 'Bogotá', 
    },
};

interface IAction {
    type: string,
    payload: string | Object,
};

const generalReducer = (state = generalInitialState, action:IAction) => {
    switch (action.type) {
        case 'SET_PLACE':
            return {
                ...state,
                place: action.payload,
            };
        default:
            return state;
    }
};

export default generalReducer;
