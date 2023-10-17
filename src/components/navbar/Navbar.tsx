import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent  //variavel usada no conteúdo sobre renderização condicional
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

          <Link to='/home' className="flex justify-center">
            <img src={homeLogo} alt="" className='w-2/3' />
            </Link>
            <div className='flex gap-4'>
            <Link to='/categoria' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
            <Link to='' onClick={logout} className="flex justify-center ">
                <img src={userImage} alt="" className='w-11 h-12' />
            </Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar