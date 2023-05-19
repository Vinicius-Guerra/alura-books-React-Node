import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import ImagemLivro from '../../imagens/livro2.png';
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section `
    backgroumd-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00"
                tamanhoFonte="36px" 
            >
                Ultimos Lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez voce se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma API com a plataforma Google"
                img={ImagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;