import styled from "styled-components";
import { Titulo } from "../Titulo";

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 26px 20px;
    justify-content: space-around;
    width: 100%;
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weigth: 900;
    display: blocl;
    text-align: center;
    width: 150px;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 10px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 150px;
`

const Descricao = styled.p`
    max-width: 300px;
`

function CardRecomenda([titulo, subtitulo, descricao, img]) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="16px" cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                 <ImgLivro src={img}/>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda;