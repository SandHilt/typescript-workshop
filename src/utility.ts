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

type UpdateUser = Partial<Userbase>; // ou interface updateUser extends Partial<User> {}
type Adminer = Omit<Userbase, "address">;
type Visitor = Pick<Userbase, "name" | "surname">;
function updateThisUser({
  isAdmin,
  ...adminUp
}: Partial<Adminer>): Record<string, string> {
  return {
    name: "Foo",
    surname: "Bar",
    isAdmin: "true",
    isOk: "true",
    ...adminUp,
  };
}
