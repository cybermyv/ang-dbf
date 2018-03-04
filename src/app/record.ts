export class Record {
    DOCDATE: string = '';
    DOCIMGID: string = '';
    DOCNAME: string = '';
    DOCNUM: string = '';
    DOCTYPE: string = '';
    NORMDOCID: string = '';
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
