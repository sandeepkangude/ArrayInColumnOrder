export class ResultModel {
    constructor(
        public category: string,
        public images: Array<string>,
        public color: string,
        public price: string,
        public itemName: string,
        public itemNum: string,
        public desc: string
    ) { }
}