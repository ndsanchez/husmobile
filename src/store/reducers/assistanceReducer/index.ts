const assistanceInitialState = {
    interconsultation: {
        activeSpeciality: {},
    },
    speciality: {
        all: [],
    },
};

interface IAction {
    type: string,
    payload: any,
    otro: any
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
                interconsultation: {
                    ...state.interconsultation,
                    codigo: action.payload,
                },
            };
        default:
            return state;
    }
};

export default AssistanceReducer;
