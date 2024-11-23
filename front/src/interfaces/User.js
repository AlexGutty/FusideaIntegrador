export function createUpdateUserDto(user) {
    const {
      id_speciality,
      id_role,
      name,
      last_name,
      gender,
      phoneNumber,
      aboutname,
      password,
      avatar,
      banner
    } = user;
  
    return {
      id_speciality,
      id_role,
      name,
      last_name,
      gender,
      phoneNumber,
      aboutname,
      password,
      avatar,
      banner
    };
  }