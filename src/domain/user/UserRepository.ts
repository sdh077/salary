import User from "./User";

class UserRepository {
    users: User[]
    constructor() {
        this.users = [];
    }

    getAllUsers() {
        return this.users.map((user) => user.toPlainObject());
    }

    addUser(name: string, email: string) {
        const newUser = new User(this.getAllUsers().length + 1, name, email);
        this.users.push(newUser);
    }
}

export default UserRepository;
