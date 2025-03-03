export interface ITimbreServiceInterface {
    findAll(): any[]
    find(id: string): any[] | null
    create(data: any): any[] | null
    delete(id: string): boolean
}

//@TODO criar os tipos