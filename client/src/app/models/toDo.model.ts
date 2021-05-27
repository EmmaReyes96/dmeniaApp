export interface toDo {
    
    ok: boolean,
    toDoDB: [
    {
      _id: string,
      txt: string,
      checkOut: boolean,
      uid: string
    }
  ]
        
}

export class toDoModel {
    
    constructor(
       public _id: string,
       public txt: string,
       public checkOut: true,
       public uid: string
    ){}
        
}