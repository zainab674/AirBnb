import Navbar from "./Components/navbar";
import Category from "./Components/category";
import { InspirationSection } from "./Components/inspiration";
import Footer from "../common/footer";
import FixedFooter from "./Components/fixedFooter";

const HomePage = () => {
    return (<>

        <Navbar />
        <Category />
        <InspirationSection />
        <div className="pb-20 md:pb-0">

            <Footer />
        </div>
        <div className="block md:hidden">
            <FixedFooter />
        </div>

    </>)
}

export default HomePage;