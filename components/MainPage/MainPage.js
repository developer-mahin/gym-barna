import Banner from "./Banner/Banner";
import SecondSection from "./secondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import WorkOutSection from "./workOutSection/WorkOutSection";

const MainPage = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <WorkOutSection></WorkOutSection>
        </div>
    );
};

export default MainPage;