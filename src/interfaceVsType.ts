interface A {
    a: string;
}

interface B extends A {
    b?: string;
}

type C = {
    c: number;
}

type D = C & {
    a: string;
    d: boolean;
}

type E = A & C; // union type
type F = D | A; // intersection type

const e: E = {
    a: 'foo',
    c: 1
}

const f: F = {
    a: 'foo',
}