import { FaWhatsapp } from 'react-icons/fa'
import { Fragment,} from 'react'
import {  Menu, Transition,} from '@headlessui/react'
import {BellIcon, MenuIcon,MailIcon, } from '@heroicons/react/solid'
  
const userNavigationmd = [
  { name: 'Página Principal', href: '#' },
  { name: 'Sair', href: '#' },
]
const userNavigation= [
  { name:'Página Principal', href:'#'},
  { name: 'Minha Conta', href: '#'},
  { name: 'Sair', href:'#'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  
  return (
    <>
      {

      }
      <div>
        <div class="box-content  h-16 w-full p-0 border-0">
        <div className="fixed z-50 w-full   flex flex-col flex-1">
          <div className="  top-0 z-5 flex-shrink-0 flex h-16 bg-white shadow-lg">{/*cabeçalho */} 
            <div className="flex-1 px-4 flex justify-between">
             
                    
                     <img
                        className="h-16 w-36 pt-1"
                        src="./imag/Logo-3.png"
                        alt="Logo avancy"
                        />
                  
            <div className="ml-4 flex items-center md:ml-6">
                  
                  <a
                    href="#top"
                    className="pr-6 invisible md:visible border-transparent h-16 text-center text-gray-900 hover:border-blue-700 hover:text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                   Minha Conta
                  </a>  
                <button
                  type="button"
                  className="ml-16 sm:ml-40 md:ml-0 rounded-full text-gray-400 hover:text-blue-600 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
                  <span className="sr-only">Nova Notificação</span>
                  <BellIcon className="h-9 w-9 -ml-5 md:-ml-0 md:h-8 md:w-8" aria-hidden="true" />
                </button>
                <Menu as="div" className="ml-1  -pr-7 relative  visible md:invisible">
                  <div>
                <Menu.Button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-blue-600" >
                  <span className="sr-only">Menu</span>
                  <MenuIcon className="h-9 w-9 sm:h-1 sm:w-1" aria-hidden="true" />               
                </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="origin-top-right absolute right-3  w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                            active ? 'bg-gray-100' : '',
                                     'block px-4 py-2 text-sm text-gray-700'
                                      )}>
                              {item.name}
                          </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Menu as="div" className="ml-1  pr-1 relative  invisible md:visible">
                  <div>
                <Menu.Button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-blue-600" >
                  <span className="sr-only">Menu</span>
                  <MenuIcon className="h-1 w-1 sm:h-9 sm:w-9" aria-hidden="true" />               
                </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="origin-top-right absolute right-3  w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigationmd.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                            active ? 'bg-gray-100' : '',
                                     'block px-4 py-2 text-sm text-gray-700'
                                      )}>
                              {item.name}
                          </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>

              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=" max-w-7xl mx-auto md:grid md:grid-cols-4 ">
        <div className=" py-16 px-4  ">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl text-center sm:text-center font-extrabold tracking-tight text-gray-900 sm:text-3xl">Entrar em contato</h2>
            <dl className="mt-8 grid justify-items-center text-base text-gray-500">
                <a href="https://api.whatsapp.com/send?phone=5566996280492">
                   <div className="mt-6 hover:text-blue-500 ">
                    <dt className="sr-only">Numero de Telefone</dt>
                    <dd className="flex">
                      < FaWhatsapp className="flex-shrink-0 h-6 w-6 hover:text-blue-500 text-gray-400 -ml-4" aria-hidden="true" />
                        <span className="ml-3">+55 (66) 9.9628-0492</span>
                    </dd>
                    </div>
                </a>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className=" flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">suporte@agrovagas.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white   py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto ">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="Nome Completo" className="sr-only">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="Nome Completo"
                  id="Nome Completo"
                  autoComplete="nome"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Nome Completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="E-mail"
                />
              </div>
              <div>
                <label htmlFor="Telefone" className="sr-only">
                  Telefone
                </label>
                <input
                  type="text"
                  name="Telefone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Telefone"
                />
              </div>
              <div>
                <label htmlFor="Mensagem" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  id="Mensagem"
                  name="Mensagem"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                  placeholder="Mensagem"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-14 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-400 "
                >
                 Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
                                                            
      </div>
    </>
  )
}