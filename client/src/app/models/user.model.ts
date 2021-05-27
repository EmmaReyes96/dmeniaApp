export interface User {

   ok: boolean;
   token?: string;
   userDB: {
      email: string;
      name: string;
      password: string;
      _id: string;
   }

}

export class userModel {

   constructor(
      public email: string,
      public name: string,
      public password: string,
      public _id: string
   ){}

}