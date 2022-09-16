interface User {
  name: string;
}

class Teacher implements User {
  constructor(public name: string, public readonly register: number) {}
}

const teacher = new Teacher("Foo", 200910);

const user = teacher as User;
const anotherUser = <User>teacher;

const teacher2: User = new Teacher("Bar", 200710);
