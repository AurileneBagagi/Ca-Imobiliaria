import Snavbar from "../components/navbar/index";
import Card from "../components/card/index";
import Filtro from "../components/filtros/index";


export default function Home() {
  return (
    <>
      <div className='parte1'>
        <Snavbar></Snavbar>
        <p>Somos responsaveis por realizar com satisfação sonhos de imóveis proprios oferecendo segurança, conforto e total qualidade. </p>
        <button>Serviços</button>
      </div>

      <div id='parte2'>
      <p>Somos a Cássio Andrade Imobiliaria, uma organização de fins lucrativos responsavel por vender, aluguar e indicar imoveis de excelente qualidade pelas cidades de Recife e Porto de Galinha. Estamos há 10 anos fornecendo um atendimento de referência a clientes e também aos nossos corretores. Venha fazer parte da nossa família.</p>
      <button>Serviços</button>
      </div>

      <div id="parte3">
        <Filtro></Filtro>
      </div>

      <div className="carousel">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  )
}
