import { BannerArea } from "./BannerArea";
import { Header } from "./Header";
import { Teams } from "./Players";

export const Home = () => {
    return (
        <>
            <div className="min-h-screen">
                <Header />
                <BannerArea />
            </div>
            <Teams />
        </>
    );

}
