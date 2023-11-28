import { FC, ReactNode } from "react"

type Props = {
    children : ReactNode
}

const Container: FC<Props> = ({
    children
}) => {
    return(
        <div className=" bg-slate-100 rounded-md p-2 m-1 shadow-md">
            {children}
        </div>
    )
}

export default Container;