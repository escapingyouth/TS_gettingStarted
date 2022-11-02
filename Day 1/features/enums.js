"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const client = {
    name: 'Connor',
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
