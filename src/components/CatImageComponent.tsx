import CatImage from "./namespaces/CatImage";

export default ({className}:any):JSX.Element =>{

    const catImageArray:CatImage.IcatImage[] = [
        {alt:"nekosuke", src: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg", className},
        {alt:"nekosuke", src: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg", className},
        {alt:"nekosuke", src: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg", className},
        {alt:"nekosuke", src: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg", className},
        {alt:"nekosuke", src: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg", className},
        {alt:"nekosuke", src: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg", className},
        {alt:"nekosuke", src: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg", className},
        {alt:"nekosuke", src: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg", className},
        {alt:"nekosuke", src: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg", className}
    ]; 

    const catImageInstance = new CatImage.CatImageClass<CatImage.IcatImage>(catImageArray);

    const getCatImages:CatImage.catsImageJSX = catImageInstance.generateCatImages();

    return (
        <>
            {getCatImages}
        </>
    );
};