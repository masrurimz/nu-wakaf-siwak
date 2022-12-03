import { ApiResponse } from './apiResponse';

export interface AccountProfileParams {}
export interface AccountProfileResponse extends ApiResponse<AccountProfile> {}
export interface AccountProfile {
  iduser: string;
  nama: string;
  avatar: string;
  kode_lokasi: string;
  notelp: string;
  email: string;
  prov: string;
  kab: string;
  kec: string;
  kel: string;
}
export interface AccountProfileState extends AccountProfile {
  nameInitial: string;
  nameFormatted: string;
}

export interface AccountProfileAvatarParams {}
export interface AccountProfileAvatarResponse extends ApiResponse<string> {}
