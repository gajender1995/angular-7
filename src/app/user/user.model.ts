export class User  { 
    public results : String;
    constructor(
        public artistId: string,
        public artistName: string,
        public artworkUrl60: string,
        public collectionName: string,
        public collectionViewUrl: string)
        {}

        getName(){
            return `${this.artistName} Collection Name :  ${this.collectionName}`
        }
}