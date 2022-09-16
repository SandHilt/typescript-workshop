interface Name {
    name: string;
    surname: string;
}
interface CanExit {
    onClose(): Promise<void>;
}

abstract class AbstractName implements CanExit {
    async onClose(): Promise<void> {
        console.log('Saindo...');
    }

    abstract sayMyName(): Name;

    protected saySomeName(name: string, surname = 'Typescript'): Name {
        return {
            name,
            surname,
        };
    }
}

class ManagerName extends AbstractName {
    constructor(private readonly name: string, public surname?: string) {
        super();
    }

    sayMyName(): Name {
        return this.saySomeName(this.name, this.surname);
    }
}
const example = new ManagerName('Bruno');
example.surname = 'Calindra';
console.log(example.sayMyName()); // { "name": 'Bruno', "surname": 'Calindra'}
example.onClose();
