import { LoginResponse } from '../../../../common/types/auth';
import { axiosClient } from '../../axios.service';

export const authLoginMutation = (args: {
  email: string;
  password: string;
}) => {
  const { email, password } = args;

  const formData = new FormData();
  formData.append('user', email);
  formData.append('pass', password);

  return axiosClient.post<LoginResponse>('/ws/user/login', formData);
};
