import { Menu } from 'lucide-react';
import { House } from 'lucide-react';
import { User } from 'lucide-react';
import { Heart } from 'lucide-react';
import { UserPen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Biensur = () => {

    return (
        <div className='bg-current bg-violet-400 flex items-center justify-between'>

            <div className='flex items-center gap-3'>
                <Menu size={50} />
                <Link to="/ProfilPage">
                    <User size={50} />
                </Link>
                <p className=''>SNEAKER SHOP</p>
            </div>

            <div className='flex items-center gap-3'>
                <Link to="/">
                    <House size={50} />
                </Link>
                <Link to="/wishlist">
                    <Heart size={50} /> 
                </Link>
                <Link to="/login">
                    <UserPen size={50} />
                </Link>       
            </div>

        </div>
    );
}

export default Biensur;


