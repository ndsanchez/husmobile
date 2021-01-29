const assistanceInitialState = {
  interconsultation: {
    activeSpeciality: {},
    fetched: [],
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
        case 'LIST_INTERCONSULTATIONS':
            return {
                ...state,
                interconsultation: {
                    ...state.interconsultation,
                    fetched: action.payload
                }
            };

        case 'LIST_SPECIALITIES':
            return {
                ...state,
                speciality: action.payload
            };

        case 'RESET_ASSISTANCE_STATE':
            return assistanceInitialState;

        case 'SET_SPECIALITY':
            return {
                ...state,
                interconsultation: {
                    ...state.interconsultation,
                    activeSpeciality: action.payload,
                },
                speciality: {
                    all: [{ GEEDESCRI: action.payload.label, OID: action.payload.value }]
                }
            };
        default:
            return state;
    }
};

export default AssistanceReducer;
