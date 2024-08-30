
import HostDe from "./components/hostDetail";
import HostNavbar from "./components/hostNav";
import Footer from "../common/footer";

const HostDetail = () => {
    return (
        <>
            <HostNavbar />
            <HostDe />
            <div className="hidden md:block">
                <Footer />
            </div>

        </>
    )
}

export default HostDetail;