namespace CatImage{
    export interface IcatImage{
        alt: string;
        src: string;
        className: string;
    };

    export type catsImageJSX = JSX.Element[];

    export class CatImageClass<U extends IcatImage>{
        private catImageArray: U[];

        constructor(catImageArray: U[]){
            this.catImageArray = catImageArray;
        }

        public generateCatImages():catsImageJSX{
            return this.catImageArray.map((elem:U):JSX.Element=>{
                return <img alt={elem.alt} src={elem.src} className={elem.className} />
            });
        };
    }
};

export default CatImage;