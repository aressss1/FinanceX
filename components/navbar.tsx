import { MoveRight } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
    return ( 
        <div className="h-16 bg-black flex flex-row justify-between items-center px-10 " >
            <div className="text-white text-2xl font-bold">
                FinanceX
            </div>
            <div>
                <ul className="text-white text-opacity-70  text-base font-normal flex flex-row gap-7 " >
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
            <Button className="flex flex-row gap-1 bg-lime-400 text-white " >
                SignUp
                <MoveRight />
            </Button>
        </div>
     );
}
 
export default Navbar;