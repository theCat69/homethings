import { User } from './User';

export class Client extends User { 

	constructor(
		client : User,
		public idClient: number) 

	{super(client.id, client.name, client.email, client.password, client.address, client.phonenumber);} 
	
	}