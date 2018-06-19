import { User } from './User';

export class Conseiller extends User { 

	constructor(
		conseiller : User,
		public matricule : int,
		public contractStartingDate: Date) 

	{super(conseiller.id, conseiller.name, conseiller.email, conseiller.password, conseiller.address, conseiller.phonenumber);} 
	
	}