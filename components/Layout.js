import Navbar from "./Navbar"
import Footer from "../components/Footer"
import nProgress from "nprogress"
import { useEffect } from "react"
import { useRouter } from "next/router"


const Layout = ({ children, footer = true }) => {

    const router = useRouter()

    useEffect(() => {



        const handleRouteChange = (url) => {
            nProgress.start();
        }

        router.events.on("routeChangeStart", handleRouteChange)
        router.events.on("routeChangeComplete", () => nProgress.done())

        // se comenta por que no se ejecuta correctamente, pendiente de correccion
        // return (
        //     router.events.off("routeChangeStart", handleRouteChange)
        // )
    }, [])

    return (
        <div>
            <Navbar />
            <main className="container py-4">
                {children}
            </main>

            {footer ? <Footer /> : ""}

        </div>
    )
}

export default Layout;