import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Thumbnail from "./components/Thumbnail";

const App = () => {
    return (
        <>
            <Header />

            <div className="flex pt-1">
                <SideBar />

                <div className="flex flex-col w-full justify-start mt-3">
                    <div className="pl-[13rem]">
                        <div>Hot!</div>
                        <div className="font-bold">놓치지 마세요!</div>
                        <div className="font-bold">실시간 인기 롤문철.</div>
                    </div>
                    <div className="flex flex-wrap justfiy-center items-center gap-4 mt-4 justify-center">
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
