import ApiManager from "./ApiManager";

export const user_login = async data => {
  try {
    const result = await ApiManager('/signIn', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data:{"loginType": "password",
      "email":"aravindtsa@gmail.com",
      "password":"tsa123"},
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};