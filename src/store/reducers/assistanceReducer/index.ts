const assistanceInitialState = {
  interconsultation: {
    activeSpeciality: {},
    fetched: [/*
      {
        'NAME': 'NEIL DAVID SANCHEZ QUINTANA',
        'HISTORIA': '105416846'
      },
      {
        'NAME': 'ANA GOMEZ',
        'HISTORIA': '10578946'
      },
    */]
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
            console.log('payload: ', action.payload);
            return {
                ...state,
                interconsultation: {
                    ...state.interconsultation,
                    activeSpeciality: action.payload,
                },
                speciality: {
                    all: [{ GEEDESCRI: action.payload.label, GEECODIGO: action.payload.value }]
                }
            };
        default:
            return state;
    }
};

export default AssistanceReducer;
