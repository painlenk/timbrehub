import { Injectable } from "@nestjs/common";
import { ITimbreServiceInterface } from "./timbre-service-interface";

@Injectable()
export class TimbreService implements ITimbreServiceInterface {
    findAll(): any[] {
        console.log('findAll')
        return []
    }

    find(id: string): any[] | null {
        return []
    }

    create(data: any): any[] | null {
        return []
    }

    delete(id: string): boolean {
        return false
    }
}