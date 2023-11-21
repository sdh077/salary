// src/domain/user/User.js
class User {
    id: number;
    name: string;
    email: string;
    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    toPlainObject() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
        };
    }
}

export default User;
