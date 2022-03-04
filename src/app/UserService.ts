import { Injectable } from "@angular/core";
import User from "./entity/User";
import { Http } from "@angular/http";

@Injectable() 
export default class UserService{
    constructor(private http:Http) {}
    save(user:User){
        console.log(user);
        return this.http.post("http://localhost:8000/users",user,)
        
    }
}