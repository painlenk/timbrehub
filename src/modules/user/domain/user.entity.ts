export class UserEntity {
    private id?: string
    private createdAt?: Date
    private updatedAt?: Date


    constructor(private name: string, private email: string, private password: string, id?: string, createdAt?: Date, updatedAt?: Date) { }


    getId(): string | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    getCreatedAt(): Date | undefined {
        return this.createdAt;
    }

    getUpdatedAt(): Date | undefined {
        return this.updatedAt;
    }

    getUser() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }

    setId(id: string) {
        this.id = id
    }

}

