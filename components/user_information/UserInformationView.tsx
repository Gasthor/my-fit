import { useSession } from "next-auth/react"
import { FC } from "react"
import Container from "../Container"

type Props = {

}

const UserInformationView: FC<Props> = ({

}) => {

    const { data: session, status } = useSession()



    return (
        <Container>
            {
                status === "loading" ? (
                    <p>Cargando...</p>
                ) : (
                    <>
                        <h2 className=" text-2xl font-bold">Hola!</h2>
                        <div className="flex flex-row gap-2 my-2">
                            <img className=" rounded-xl w-20 object-scale-down md:w-24" src={session?.user?.image as string} />
                            <div>
                                <p className=" font-medium text-xl">{session?.user?.name}</p>
                                <p className=" font-light">{session?.user?.email}</p>
                                <p>Ultimo entrenamiento no definido*</p>
                            </div>
                        </div>
                    </>
                )
            }

        </Container>
    )
}
export default UserInformationView;