import Button from "@/components/buttons/Button";
import Container from "@/components/Container";
import MainLayout from "@/components/layouts/MainLayout";
import { signIn } from "next-auth/react";


export default function Login() {
    return (
        <MainLayout title={"Iniciar sesion - My-Fit"}>
            <Container>
                <div className="flex flex-col md:flex-row md:justify-around">
                    <div className="mb-4">
                        <h2 className=" font-semibold text-2xl text-center">Hola musculo!!</h2>
                    </div>
                    <div className="mt-4">
                        
                        <h3 className="text-center">Ingresa con tu cuenta de Google</h3>
                        <div className="flex justify-center my-2">
                        <Button 
                            title={"Iniciar sesion con Google"} 
                            bgcolor={"bg-slate-300"} 
                            textcolor={""} 
                            bgcolorhover={"bg-slate-400"} 
                            action={() => signIn("google", {"redirect": true, "callbackUrl": "/home"})}/>
                        </div>
                    </div>
                </div>
            </Container>
        </MainLayout>
    )
}