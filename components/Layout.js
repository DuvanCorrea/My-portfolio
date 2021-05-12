import Navbar from "./Navbar"
import Footer from "../components/Footer"


const Layout = (props) => (
    <div>
        <Navbar />
        <main className="container py-4">
            {props.children}
        </main>
        <Footer />
    </div>
)

export default Layout;