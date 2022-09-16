interface Userbase {
  name: string;
  surname: string;
  isAdmin: boolean;
  address: {
    street: string;
    city: string;
    country: string;
  };
}

type updateUser = Partial<Userbase>; // interface updateUser extends Partial<User> {}
type Adminer = Omit<Userbase, 'address'>;
