import React from 'react'
import homeLogo from '../../assets/logo_farmacia 1.png'
import userImage from '../../assets/user 1.png'


function Navbar() {
 
  

  return (
    <>
     < className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            {/* <div className='text-2xl font-bold uppercase'>Farmácia</div> */}
            <div className="flex justify-center ">
            <img src={homeLogo} alt="logo farmacia" className='w-2/3' />
          </div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar categoria</div>
              {/* <div className='hover:underline'>Perfil</div> */}
              <div className="flex justify-center ">
              <img src={userImage} alt="icone de usuário " className='w-2/3' />
              </div>
            </div>
        </div>
    </>
  )
}

export default Navbar