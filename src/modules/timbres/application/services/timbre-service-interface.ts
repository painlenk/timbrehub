export interface ITimbreServiceInterface {
    findAll(): Promise<any[]>
    find(id: string): any[] | null
    create(data: any): Promise<any | null>
    delete(id: string): boolean
}

//@TODO criar os tipos