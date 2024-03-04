import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegSmile, FaHeart } from "react-icons/fa";
import { RiMovieLine } from "react-icons/ri";
import { useState } from "react";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="flex flex-col items-center mb-10 h-32 absolute top-[5.5rem]
				"
        >
            <div className="cursor-pointer " onClick={toggleSideBar}>
                <GiHamburgerMenu size={20} className="relative bottom-16" />
            </div>
            {isOpen && (
                <div className="pt-2 flex flex-col w-52 justify-start items-center  h-[93vh] space-y-2">
                    <span>친구</span>
                    <hr className="w-10" />
                    <div className="flex flex-col items-center cursor-pointer">
                        <FaRegSmile />
                        <span>롤문챗</span>
                    </div>
                    <hr className="w-10" />
                    <div className="flex flex-col items-center cursor-pointer">
                        <FaHeart />
                        <span>좋아요</span>
                    </div>
                    <hr className="w-10" />
                    <div className="flex flex-col items-center cursor-pointer">
                        <RiMovieLine />
                        <span>나</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideBar;
