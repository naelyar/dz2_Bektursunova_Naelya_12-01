import { Header } from "../../components/header/Header";
import { Serverses } from "../../components/serverses/Serverses";


function AboutPage() {
    const servises = ["Each ready-to-use layout rocks the latest trends and regulations to ensure mobile-readiness and cross-browser compatibility.", "Magazine Pro", "OceanWP","Noozbeat","Noozbeat" ,"Noozbeat","Noozbeat"]

    return(
        <div>
        <Header/>
        <Serverses servises = {servises}/>
        
        </div>
    )
}

export default AboutPage;