enum STATUS {
    OFFLINE= 0xf1,
    ONLINE,
    GET_OUT,
    DELETED = 0x00
}

interface UserChat {
    name: string;
    status: STATUS;
}

const userChat: UserChat = {
    name: "Foo",
    status: STATUS.GET_OUT
}