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
                        <h2 className=" text-xl font-bold">Hola!</h2>
                        <div className="flex flex-row gap-2">
                            <img className=" rounded-xl w-3/12" src={session?.user?.image as string} />
                            <div>
                                <p>{session?.user?.name}</p>
                                <p>{session?.user?.email}</p>
                            </div>
                        </div>
                    </>
                )
            }

        </Container>
    )
}
export default UserInformationView;