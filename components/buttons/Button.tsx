import { FC } from "react";
import Link from "next/link";

type Props = {
    title: string;
    bgcolor: string;
    textcolor: string;
    bgcolorhover: string;
    goto?: string;
    action?: () => {}
}

const Button: FC<Props> = ({
    title,
    bgcolor,
    textcolor,
    bgcolorhover,
    goto,
    action
}) => {

    return (
        <>
        
        {
            goto?(
                <Link
                    className = {`p-2 rounded-md ${bgcolor} ${textcolor} hover:${bgcolorhover}`}
                    href = { goto }
                >
                    { title }
                </Link >
            ) : (
                <button
                    className = {`p-2 rounded-md ${bgcolor} ${textcolor} hover:${bgcolorhover}`}
                    onClick = { action }
                >
                    { title }
                </button >
            )
        }
        </>
    )
}

export default Button;