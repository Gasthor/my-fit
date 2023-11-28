import MainLayout from "@/components/layouts/MainLayout";
import UserInformationView from "@/components/user_information/UserInformationView";

export default function Home(){
    return(
        <MainLayout title={"Inicio - My Fit"}>
            <UserInformationView/>
            
        </MainLayout>
    )
}
