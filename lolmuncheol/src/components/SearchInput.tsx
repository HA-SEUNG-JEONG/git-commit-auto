import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
    return (
        <div className="relative w-full">
            <input
                type="text"
                className="rounded-[2.5rem] w-[500px] min-w-0 flex items-center border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="닉네임, 게임 영상 검색"
                aria-label="Search"
                aria-describedby="button-addon1"
            />
            <IoMdSearch className="absolute right-3 bottom-2 cursor-pointer" />{" "}
        </div>
    );
};

export default SearchInput;
