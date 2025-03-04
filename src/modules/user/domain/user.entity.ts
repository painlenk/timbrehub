export class UserEntity {
    private createdAt: Date
    private updatedAt: Date

    constructor(private name: string, private email: string, private password: string) {
        this.name = name
        this.email = email
        this.password = password
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    getUser() {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }

}

