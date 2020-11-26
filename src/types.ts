type specialityOptionType = {
  activeSpeciality: string
};
  
type specialityType = {
  OID: string,
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
