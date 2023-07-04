RiContactsLine
import { } = "react-"

export const NavBar = () => {
    const alto = window.innerHeight;
    console.log(alto)
    return (
        <div className={`w-[300px] h-[${alto}px] bg-black/10 px-[50px] py-[90px]`}>
            <div className="container w-full h-full flex flex-col ">
                <div className="navItems namePage h-[50px] bg-white" ></div>

                <div className="navItems Contacts h-[50px] bg-white" ></div>

                <div className="navItems Chats h-[50px] bg-white" ></div>

                <div className="navItems Config h-[50px] bg-white" ></div>


            </div>
        </div>
    )
}