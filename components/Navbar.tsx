import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC } from "react";
import Button from "./buttons/Button";

type Props = {

}



const Navbar: FC<Props> = ({ }) => {

    const router = useRouter();
    const {data: session, status} = useSession()

    if(status === "loading"){
        return(
            <p>cargando ...</p>
        )
    }else{
        return (
            <nav className="p-2 flex justify-between w-full bg-black border-b-2 border-yellow-400 shadow-sm shadow-yellow-500">
                <h2 className=" text-white text-2xl font-semibold my-auto" onClick={() => router.push("/")}> My Fit</h2>
                {
                    status === "unauthenticated" ? (
                        <Button goto="/login" bgcolor="bg-yellow-500" bgcolorhover="bg-yellow-600" textcolor="text-white" title="Ingresar" />
                    ) : (
                        <Button bgcolor="bg-red-500" bgcolorhover="bg-red-600" textcolor="text-white" title="Salir" action={()=> signOut({"redirect":true, "callbackUrl": "/"})}/>
                    )
                }
            </nav>
        )
    }
}
export default Navbar;