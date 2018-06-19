import { User } from './User';

export class Admin extends User { 

	constructor(
		admin : User,
		public matricule: number,
		public fonction: string,
		public contractStartingDate: Date) 

	{super(admin.id, admin.name, admin.email, admin.password, admin.address, admin.phonenumber);} 
	
	}