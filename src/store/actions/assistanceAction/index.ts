import { listSpecialityType, specialityOptionType } from '../../../types';

const LIST_SPECIALITIES = 'LIST_SPECIALITIES';
const SET_SPECIALITY = 'SET_SPECIALITY';

interface IAction {
  type: string,
  payload: string | object | boolean,
};

const listSpecialities = (list:listSpecialityType ): IAction => {
    return {
        type: LIST_SPECIALITIES,
        payload: list,
    };
};

const setSpeciality = (speciality:specialityOptionType ): IAction => {
    return {
        type: SET_SPECIALITY,
        payload: speciality,
    };
};

export { listSpecialities, setSpeciality };
