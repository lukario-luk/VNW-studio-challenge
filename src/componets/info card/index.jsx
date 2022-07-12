import React from "react";
import {CardContainer,CardContent,CardTitle,ContentP,CirclesBox,SmallCircle,Line,SubContentP,ALink} from "./styles"
export default function InfoCard(){
    return(
        <>
        <CardContainer>
            <CardContent>
            <div>
                <CirclesBox>
                    <SmallCircle></SmallCircle>
                    <SmallCircle></SmallCircle>
                    <SmallCircle></SmallCircle>
                </CirclesBox>
                <Line/>
            </div>
            <CardTitle>Inscreva-se no Vai na Web!</CardTitle>
            <ContentP>Inscrições 02 a 21 de Agosto</ContentP>
            </CardContent>
            <SubContentP>Link para o formulário: <ALink href='https://bit.ly/CarreiraVaiNaWeb'>bit.ly/CarreiraVaiNaWeb</ALink></SubContentP>
        </CardContainer>
        </>
    )
}