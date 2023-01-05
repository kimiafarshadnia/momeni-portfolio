import { useEffect, useState } from "react";
import 'boxicons';

const DarkMode = () => {
    const [theme , setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );
    const elemets = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark");
    console.log(darkQuery, "darkQuery")
    const themeOptions =[
        {
            icon:"sun",
            text:"light"
        },
        {
            icon:"moon",
            text:"dark"
        },
        {
            icon:"desktop",
            text:"system"
        }
    ]
 
    function onWindowMatch(){
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
            elemets.classList.add('dark');
          } else {
            elemets.classList.remove('dark');
          }
    }

    

    useEffect(() => {
       switch (theme) {
        case 'dark':
            elemets.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            break;
        case 'light':
            elemets.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            break;

        default:
            localStorage.removeItem("theme");
            onWindowMatch();
            break;
       }
    }, [theme]);

darkQuery.addEventListener("change", (e)=>{
    if(!("theme" in localStorage)){
        if(e.matches){
            elemets.classList.add('dark');
        }
        else{
            elemets.classList.remove('dark');
        }
    }
})

    return ( 
        <div className="md:mx-4 flex items-center justify-around">
            {
                themeOptions?.map((option)=>(
                    <button
                        key={option.text}
                        onClick={()=> setTheme(option.text)}
                        className={`flex p-1 ${theme === option.text && "bg-white dark:bg-sky-100 rounded-full "}`}
                    >
                        <box-icon name={option.icon}></box-icon>
                    </button>
                ))
            }
        </div>
     );
}
 
export default DarkMode;