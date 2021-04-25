
import { EventEmitter } from "events";
import db from "quick.db";

export default class Database extends EventEmitter {
   private db:any;
  constructor(){
      super();
  this.db = db;
  };

  all() {
    return this.db.all();
    };
 
    set(key:string, value:any) {
   return this.db.set(key,value);
   }

    get(key:string) {
    return this.db.get(key);
    };

    fetch(key:string) {
    return this.db.fetch(key);
    };
  
   push(key:string,element:any) {
       return this.db.push(key,element);
        };
      
    has(key:string) {
        return this.db.has(key);
         };

         delete(key:string) {
            return this.db.delete(key);
             };

             add(key:string,count:number) {
                return this.db.add(key,count);
                 };

                 sub(key:string,count:number) {
                    return this.db.subtract(key,count);
                     };

                     subtract(key:string,count:number) {
                        return this.db.subtract(key,count);
                         };

                         deleteAll() {
                            return this.db.deleteAll();
                             };
                      
};