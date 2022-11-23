import { create, Whatsapp, Message, SocketState } from 'venom-bot';

class Sender {
	// private client: Whatsapp;

	constructor() {
		this.initialize();
	}

	private initialize() {
		const qr = (base64Qrimg: string) => {
			console.log();
		}
		const statusBeluga = (statusSession: string, session:string) => {
			return statusSession;
		}

		const start = (client: Whatsapp) => {
			// this.client = client;
		}

		create('statusBeluga', qr, statusBeluga)
		.then((client) => start(client))
		.catch((error) => console.error(error));
	}
}

export default Sender;