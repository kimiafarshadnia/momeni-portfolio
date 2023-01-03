const SocialMedia = () => {
    return ( 
        <div className="h-full flex flex-row md:flex-col items-center justify-around">
            <div className="bg-violet-200 rounded-full p-2 mx-4 md:mx-0 dark:bg-sky-800">
                <a href="#">
                    <box-icon name='phone' class="flex"></box-icon>
                </a>
            </div>
            <div className="bg-violet-200 rounded-full p-2 mx-4 md:mx-0 dark:bg-sky-800">
                <a href="#">
                    <box-icon name='whatsapp' type='logo' class="flex"></box-icon>
                </a>
            </div>
            <div className="bg-violet-200 rounded-full p-2 mx-4 md:mx-0 dark:bg-sky-800">
                <a href="#">
                    <box-icon name='telegram' type='logo' class="flex"></box-icon>
                </a>
            </div>
        </div>
     );
}
 
export default SocialMedia;