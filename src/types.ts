type specialityOptionType = {
  activeSpeciality: string
};
  
type specialityType = {
  GEECODIGO: string,
  GEEDESCRI: string
};
  
type listSpecialityType = {
  all: [specialityType] | [];
}

export {
  listSpecialityType,
  specialityOptionType,
  specialityType,
}
