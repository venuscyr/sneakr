import { Menu } from 'lucide-react';
import { House } from 'lucide-react';
import { User } from 'lucide-react';

const Biensur = () => {

    return (
    
    <div className='bg-current bg-violet-400 flex items-center justify-between '>

     <div className=' flex flex items-center gap-3 '>
      <Menu size={50} />
      <p className=''>SNEAKER SHOP</p>
     </div>


     <div className='flex items-center gap-3 '>
      <House size={50}/>
      <User size={50}/>
      </div>

    </div>
    )



}



export default Biensur