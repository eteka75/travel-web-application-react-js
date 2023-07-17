import React from 'react';
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Keywest from '../assets/keywest.jpg';
import Maldive from '../assets/maldives.jpg';
import Maldive2 from '../assets/maldives2.jpg';
import Maldive3 from '../assets/maldives3.jpg';
import SelectsCard from './SelectsCard';

function Selects() {
  return (
    <div className='max-w-[1240px] gap-2 mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3'>
        <SelectsCard img={BoraBora} text="New York" />
        <SelectsCard img={BoraBora2} text="Maldives" />
        <SelectsCard img={Maldive} text="Caraïbe" />
        <SelectsCard img={Maldive2} text="Louganda" />
        <SelectsCard img={Maldive3} text="Bamako" />
        <SelectsCard img={Keywest} text="Cotonou" />


    </div>
  )
}

export default Selects
