import Navbar from "./Navbar"

const Layout = (props) => (
    <div>
        <Navbar />
        <main className="container py-4">
            {props.children}
        </main>
    </div>
)

export default Layout;