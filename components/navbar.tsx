import { MoveRight } from 'lucide-react';

const Navbar = () => {
    return ( 
        <div className="h-16 bg-black flex flex-row justify-between items-center px-4 " >
            <div className="text-white text-2xl font-bold font-['Satoshi']">
                FinanceX
            </div>
            <div>
                <ul className="text-white text-opacity-70 hover:text-opacity-100 text-base font-normal flex flex-row gap-5  font-['Rubik']" >
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
            <div className="text-white text-base font-medium font-['Satoshi'] flex flex-row justify-center items-center ">
                Sign Up
                <MoveRight className='w-3 h-3'  />
            </div>
        </div>
     );
}
 
export default Navbar;