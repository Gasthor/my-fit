import { FC, ReactNode } from "react";
import Head from "next/head"
import Navbar from "../Navbar";
type Props = {
    children: ReactNode;
    title? : String;
}

const MainLayout: FC<Props> = ({
    children, title
}) => {
    return (
        <>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar/>
        <main className=" md:mx-16 md:my-2">
            {children}
        </main>
        </>
    )
} 

export default MainLayout;