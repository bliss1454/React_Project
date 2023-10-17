import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {

    useEffect(() => {
        const titleElement = document.getElementsByTagName("title")[0];
        titleElement.innerHTML = `내가 그린 기린 일기 - 새로운 일기`;
    },[])

    return <div>
        <DiaryEditor />
    </div>
};

export default New;