const assistanceInitialState = {
    interconsultation: {
        activeSpeciality: '00',
    },
    speciality: {
        all: []
    }
};

interface IAction {
    type: string,
    payload: string | Object,
};

const AssistanceReducer = (state = assistanceInitialState, action:IAction) => {
    switch (action.type) {
        case 'LIST_SPECIALITIES':
            return {
                ...state,
                speciality: action.payload
            };
        case 'SET_SPECIALITY':
            return {
                ...state,
                interconsultation: action.payload
            };
        default:
            return state;
    }
};

export default AssistanceReducer;
