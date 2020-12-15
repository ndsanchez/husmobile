import { listSpecialityType, specialityOptionType, specialityType } from '../../../types';

const LIST_SPECIALITIES = 'LIST_SPECIALITIES';
const SET_SPECIALITY = 'SET_SPECIALITY';
const SET_SPECIALITY_OPTIONS = 'SET_SPECIALITY_OPTIONS';
const LIST_INTERCONSULTATIONS = 'LIST_INTERCONSULTATIONS';
const RESET_ASSISTANCE_STATE = 'RESET_ASSISTANCE_STATE';

interface IAction {
  type: string,
  payload: string | object | boolean,
};

const listInterconsultations = (list:any ): IAction => {
    return {
        type: LIST_INTERCONSULTATIONS,
        payload: list,
    };
};

const listSpecialities = (list:listSpecialityType ): IAction => {
    return {
        type: LIST_SPECIALITIES,
        payload: list,
    };
};

const setSpeciality = (speciality:specialityType ): IAction => {
    return {
        type: SET_SPECIALITY,
        payload: speciality,
    };
};

const resetAssistanceState = () => {
    return {
        type: RESET_ASSISTANCE_STATE,
        payload: [],
    };
};

const setSpecialityOptions = (options:any ): IAction => {
    return {
        type: SET_SPECIALITY_OPTIONS,
        payload: options,
    };
};


export { listInterconsultations, listSpecialities, resetAssistanceState, setSpeciality, setSpecialityOptions };
