interface CompanyInterface {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface AddressInterface {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: any;
}

export class DoctorInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressInterface;
  phonte: string;
  website: string;
  company: CompanyInterface;
}
