import styled from "styled-components"
import gal1 from "../../assets/images/gallery/gal1.jpg";
import gal2 from "../../assets/images/gallery/gal2.jpg";
import gal3 from "../../assets/images/gallery/gal3.jpeg";
import gal4 from "../../assets/images/gallery/gal4.jpeg";
// import gal5 from "../../assets/images/gallery/gal5.jpeg";
// import gal6 from "../../assets/images/gallery/gal6.jpeg";
// import gal7 from "../../assets/images/gallery/gal7.jpeg";
// import gal8 from "../../assets/images/gallery/gal8.jpeg";

const Main = styled.main`
 max-width: 800px;
 padding: 1 rem;
 margin: 0 auto;
 display: grid;
 grid-template-columns : 150px 150px 150px 150px;
 grid-template-rows: 150px 150px 150px;
 grid-gap: .3rem;
`

const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
border-radius: 4px;

`;
const Item = styled.div`
&:nth-child(1){
    grid-row: 1/3;
    grid-column: 1 / 3;
}
&:nth-child(2){
     grid-column: 1 / 3;
}
&:nth-child(4){
        grid-row: 1 / 2;
    grid-column: 3 / 5;
}

&:nth-child(3){
    grid-row: 2 / 4;
    grid-column: 3 / 5;
}


`;
const images = [
    gal1,
    gal2,
    gal3,
    gal4,
    //gal5 , gal6, gal7, gal8
]

const MasonryGallery = () => {
    return (
        <Main >
             {images.map((image, index) => (
                <Item key={index} >
                    <Image src={image} />
                </Item>
            ))}

        </Main >
    )
}

export default MasonryGallery