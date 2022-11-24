import { create, Whatsapp, Message, SocketState } from 'venom-bot';

class Sender {
	private client: Whatsapp | undefined;

	constructor() {
		this.initialize();
	}

	async sendText(to: string, body: string) {
			await this.client?.sendVoice(to, body).then((result: any) => {
				console.log('Foi', result);
			}).catch((error: string) => {
				console.log('Deu erro', error);
			});
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
			this.sendText('5514991254954@c.us', "/home/eulukasthyago/Documentos/projetos/Node/wavoice/assets/audio.mp3");
		}

		create('wavoice', qr, undefined)
		.then((client) => {
			start(client);
// 			console.log("Teste", client);
		})
		.catch((error) => console.error(error));
	}
}

export default Sender;
