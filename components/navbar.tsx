import { Menu, MoveRight } from 'lucide-react';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    return (
        <div className="h-[68px] bg-black flex flex-row justify-between items-center px-2 py-2 lg:px-20 md:px-12" >
            <div className="text-white text-xl font-bold roboto ">
                FinanceX
            </div>
            <div >
                <ul className="text-white text-opacity-70 roboto text-base font-normal hidden  md:flex flex-row gap-10 " >
                    <li>
                        why FinanceX
                    </li>
                    <li>
                        Features
                    </li>
                    <li>
                        Updates
                    </li>
                    <li>
                        Blog
                    </li>
                </ul>
            </div>
            <Button className="hidden  md:flex flex-row gap-2 items-center justify-center rounded-none bg-special hover:bg-lime-600 text-black roboto " >
                SignUp
                <MoveRight />
            </Button>

            {/* Responive Navbar / Hamburger-Menu */}
            <Sheet >
                <SheetTrigger asChild>
                    <Button className="md:hidden  h-10 items-center justify-center rounded-none bg-special hover:bg-lime-600 text-black  " >
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent >
                    <div className='flex flex-col gap-12 mt-9' >
                        <ul className="text-white text-opacity-70  text-base font-normal flex flex-col gap-6 roboto " >
                            <li>
                                why FinanceX
                            </li>
                            <li>
                                Features
                            </li>
                            <li>
                                Updates
                            </li>
                            <li>
                                Blog
                            </li>
                        </ul>
                        <Button className="flex w-[111px] flex-row gap-2 items-center justify-center rounded-none bg-special hover:bg-lime-600 text-black " >
                            SignUp
                            <MoveRight />
                        </Button>
                    </div>

                </SheetContent>
            </Sheet>

        </div>
    );
}

export default Navbar;