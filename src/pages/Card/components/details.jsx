import Images from "./detailParts/images";
import Section2 from "./detailParts/section2";
import MobileFooter from "./detailParts/mobilefooter";
import Location from "./detailParts/location";
import Rooms from "./detailParts/rooms";
import Amenities from "./detailParts/amenities";
import Calender from "./detailParts/calender";
import Reviews from "./detailParts/reviews";

const Detail = () => {
    return (<>
        <>
            <div id="photos">
                <Images />
            </div>
            <Section2 />
            <div id="amenities">
                <Amenities />
            </div>

            <Rooms />


            <Calender />

            <div id="reviews">
                <Reviews />
            </div>
            <div id="location">
                <Location />
            </div>
            <MobileFooter />
        </>

    </>
    )
}

export default Detail;