import {
  RegisterParams,
  RegisterResponse,
} from '../../../../common/types/auth';
import { axiosClient } from '../../axios.service';

export const authRegisterMutation = (args: RegisterParams) => {
  const { email, nama, pass, repass } = args;

  const formData = new FormData();
  formData.append('email', email);
  formData.append('nama', nama);
  formData.append('pass', pass);
  formData.append('repass', repass);

  return axiosClient.post<RegisterResponse>('/ws/user/register', formData);
};
