interface User {
  name: string;
}

interface Client extends User {
  role: "client";
  user: {
    permissions: string[];
  };
}

interface Admin extends User {
  role: "admin";
  admin: {
    permissions: true;
  };
}

type UserWithRole = Client | Admin;

const userMe: UserWithRole = {
  name: "Foo",
  role: "client",
  user: {
    permissions: ["read", "write"],
  },
};

const adminMe: UserWithRole = {
  name: "Bar",
  role: "admin",
  admin: {
    permissions: true,
  },
};
