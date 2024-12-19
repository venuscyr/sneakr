import { Menu } from 'lucide-react';
import { House } from 'lucide-react';
import { User } from 'lucide-react';
import { Heart } from 'lucide-react';
import { UserPen } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Biensur = () => {

    return (
        <div className='bg-current rounded bg-violet-400 flex items-center justify-between'>

            <div className='pl-2 flex items-center gap-3'>
                <Menu size={40}  />
                <Link to="/ProfilPage">
                    <User size={40} />
                </Link>
                <h2 className=''>SNEAKER SHOP</h2>
            </div>

            <div className='pr-2 flex items-center gap-3'>
                <Link to="/">
                    <House size={40} />
                </Link>
                <Link to="/wishlist">
                    <Heart size={40} /> 
                </Link>
                <Link to="/login">
                    <UserPen size={40} />
                </Link> 
                <Link to="/Deconnexion">
                    <LogOut size={40}  />
                </Link> 
                
    
            </div>

        </div>
    );
}

export default Biensur;


