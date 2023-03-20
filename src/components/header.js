import Image from "next/image"
import mainLogo from '../../public/image.jpg';
import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
    return(
        <div>
            <header className="text-gray-600 body-font" >
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="flex items-center text-gray-900 mb-4 md:mb-0">
                        <Link href="/">
                            <Image src={mainLogo} alt="logo" width={100} height={100}/>
                        </Link>
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href="/projects" className="mr-5 hover:text-gray-900">Project</Link>
                        <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    <DarkModeToggleButton/>
                </div>
            </header>
        </div>
    )
}