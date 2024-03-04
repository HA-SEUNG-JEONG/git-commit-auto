const Thumbnail = () => {
    return (
        <div className="w-[30rem] h-[354px] bg-gray-200 ">
            <div className="flex">
                {/* 프로필 */}
                <img
                    src="../../public/logo512.png"
                    alt=""
                    className="w-10 h-10 rounded-full ml-[12px]"
                />
                {/* 닉네임 */}
                <div className="flex flex-col">
                    <div>무언의_소나</div>
                    {/* 매너온도 */}
                    <div className="space-x-1">
                        <span className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-2 py-1">
                            99.9°
                        </span>
                        {/* 조회수 */}
                        <span className="text-[12px]">조회 수 5.9만회</span>
                        {/* 업로드 시간 */}
                        <span>.</span>
                        <span className="text-[12px]">6시간 전</span>
                    </div>
                    <div>
                        <img src="../../public/logo512.png" alt="" />
                    </div>
                </div>
                {/* 3dot */}
            </div>
            {/* 이미지 */}

            {/* 승률? */}
            {/* 멘트 */}
        </div>
    );
};

export default Thumbnail;
