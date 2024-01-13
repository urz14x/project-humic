export interface IMidwife {
  id: number;
  fullname?: string;
  username?: string;
  email?: string;
}
// interface links {
//   active: boolean;
//   label: string;
//   url: null | string;
// }
export interface IAuth {
  check?: boolean;
  id?: number;
  midwife?: IMidwife[];
}
export interface ILogin {
  email: string;
  password: string;
}
export interface ISignup {
  fullname: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}
export interface ILinks {
  first: string;
  last: string;
  next: string;
  prev: null;
}
export interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    active: boolean;
    label: string;
    url: null | string;
  };
  path: string;
  per_page: number;
  to: number;
  total: number;
}
export interface INewPatient {
  id: number;
  midwife_id: number;
  fullname: string;
  date_of_birth: string;
  place_of_birth: string;
  address: string;
  status: string;
  nik: string;
  no_rm: string;
  created_at: string;
  midwife?: string[];
}
