import { Navigate } from "react-router-dom";
import { useLocalStorage } from 'react-use'
export function Home() {
  const [auth] = useLocalStorage('auth', {})
  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className="h-full bg-red-700 text-white p-4 flex flex-col items-center space-y-6">
      <header className="container flex justify-center max-w-3xl p-4">
      <img 
        src="../images/logo-fundo-vinho.svg"
        className="w-40"
      />
      </header>
      <div className="container max-w-3xl flex-1 p-4 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:flex-1 flex justify-center">
          <img src="../images/img.png" className="w-full max-w-md" />
        </div>
        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-3xl text-center font-bold">
            Dê o seu palpite na copa do mundo do CATAR 2022!
          </h1>
          <a href="/signup" className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
            Criar minha Conta
          </a>
          <a  href="/login" className="text-white border border-white text-xl px-8 py-4 rounded-xl">
            Fazer login
          </a>
        </div>
      </div>
    </div>
  );
}