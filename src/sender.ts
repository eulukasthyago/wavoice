import { create, Whatsapp, Message, SocketState } from 'venom-bot';
import audioTetse from './assets/audio.json';
class Sender {
  private client: Whatsapp | undefined;

  constructor() {
    this.initialize();
  }

  async sendText(to: string, body: string) {
      await this.client?.sendText(to, body);
  }

  async sendAudio(to: string, body: string){
    await this.client?.sendVoiceBase64(to, body).then((result: any) => {
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
      this.sendText('5514991254954@c.us', "Estou fazendo um teste");
      this.sendAudio('5514991254954@c.us', audioTetse.mp3);
    }

    create('wavoice-teste', qr, undefined, {
      // debug: true,
      // devtools: true,
      // headless: false,
      // useChrome: true
    })
    .then((client) => {
      start(client);
// 			console.log("Teste", client);
    })
    .catch((error) => console.error(error));
  }
}

export default Sender;
