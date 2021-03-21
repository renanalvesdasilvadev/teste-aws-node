import { IPaginationRequest } from "./pagination-request.interface";
import { IPaginationResponse } from "./pagination-response.interface";

export interface IRepository<CreateDTO, UpdateDTO,Entity> {

    findAll(pagination: IPaginationRequest) : 
                Promise<IPaginationResponse<Entity>>;

    findOne(id: number): Promise<Entity>;

    create(object: CreateDTO): Promise<Entity>;

    update(id:number, object: UpdateDTO): Promise<Entity>;    

    delete(id: number): Promise<void>;
    
}