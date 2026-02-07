export function Header(){
    return (
        <>
        <nav className="flex w-full h-15 bg-orange-200 text-black justify-between pt-1.5">
            <h1 className="text-black text-4xl font-bold ml-5">FIX<span className="text-orange-700">BUDDY</span></h1>
            <ul className="flex gap-8 text-[1.2rem] ml-7 pr-40 pt-1 mt-1 font-serif">
                <a href=""><li>Home</li></a>
                <a href=""><li>About</li></a>
                <select className="h-9 pb-2" name="Location" id="">
                    <option value="palakkad">Palakkad</option>
                    <option value="Kannur">Kannur</option>
                    <option value="Calicut">Calicut</option>
                </select>
            </ul>
        </nav>
        </>
    )
}
