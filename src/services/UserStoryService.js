import { serviceurl } from '../config/serviceurl.js'

export default class UserStoryService {
    
    baseUrl = serviceurl.apiURLDatiGov + "/user-stories";

    constructor() {

    }

    async getLast() {
        const response = await fetch( this.baseUrl + "/getLast" );
        return response.json();
    }
    
    async getSimili(id) {
        const response = await fetch( this.baseUrl + "/getLast" );
        return response.json();
    }
    
    async getCommunity() {
        const response = await fetch( this.baseUrl + "/getLast" );
        return response.json();
    }

    async get(id) {
        const response = await fetch( this.baseUrl + "/" + id );
        return response.json();
    }

}