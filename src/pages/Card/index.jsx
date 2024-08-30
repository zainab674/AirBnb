import CardNavbar from "./components/navbar";
import Detail from "./components/details";
import Footer from "./../common/footer"
import FixedNav from "./components/fixednavbar";
const CardDetail = () => {
    return (
        <>

            <FixedNav />
            <CardNavbar />
            <Detail />
            <div className="pb-20 md:pb-0">

                <Footer />
            </div>
        </>
    )
}

export default CardDetail;