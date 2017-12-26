import {
    ADD_USER,
    REMOVE_USER
} from '../actions';

let users = [
    {
        name:"马云",
        value:"马云"
    },
    {
        name:"李彦宏",
        value:"李彦宏"
    }
];

const userList = (state = users, action) => {
    switch (action.type) {

        case ADD_USER:
            return [
                ...state,{
                    name:action.text,
                    value:action.text
                }
            ];

        case REMOVE_USER:
            return [
                ...state.slice(1,state.length)
            ];

        default:
            return state;
    }
}
export default userList;
