import { create, Whatsapp, Message, SocketState } from 'venom-bot';

class Sender {
	private client: Whatsapp | undefined;

	constructor() {
		this.initialize();
	}

	async sendText(to: string, body: string) {
		this.client?.sendText(to, body);
	}

	private initialize() {
		const qr = (base64QrImg: string) => {
			console.log();
		}
		const statusBeluga = (statusSession: string, session:string) => {
			console.log(statusSession);
		}

		const start = (client: Whatsapp) => {
			this.client = client;
			this.sendText('5514991254954@c.us', "Olá tudo bem, esse é um teste");
			console.log(client);
		}

		create('wavoice', qr, undefined,)
		.then((client) => start(client))
		.catch((error) => console.error(error));
	}
}

export default Sender;