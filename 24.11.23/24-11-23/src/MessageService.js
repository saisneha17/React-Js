import { Subject } from 'rxjs';

const subject = new Subject();

const MessageService = {
    sendMessage: (data) => {
        subject.next(data);
    },
    getMessage: () => {
        return subject.asObservable();
    }
}

export default MessageService;