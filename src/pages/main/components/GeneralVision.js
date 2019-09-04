import React, { Component } from 'react';
import styled from 'styled-components';

import generalSummaryData from '../../../data/general-summary.json';
import { Section, Container, Content } from '../../../styles';
import Pictogram from '../../../components/Pictogram';
import LinkButton from '../../../components/Button';

const { not_pulling_qty, chars } = generalSummaryData[0] || {}

const GeneralVisionContainer = styled(Section)`
  background-color: #34314D;
  color: white;

  .info {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  .pictogram-container {
    max-width: 500px;
    margin: 2rem auto;
  }
`;

export default class GeneralVision extends Component {
  render() {
    const proportion = Math.floor((not_pulling_qty / chars) * 100)

    return (
      <GeneralVisionContainer>
        <Content center>
          <Container>
            <div className="info">
              <h2> Visão Geral </h2>
              <p> A seguir, um gráfico que mostra a proporção de cadeiras ocupadas por deputados eleitos nominalmente ou por <a className="link is-inverted" href="http://www.tse.jus.br/eleitor-e-eleicoes/eleitor/glossario/termos/quociente-eleitoral" title="Acesse a explicação do TSE a respeito do termo Quociente Eleitoral">Quociente Eleitoral</a>. Sendo assim, dos <span className="mark-white">513</span> lugares disputados, apenas <span className="mark-white">26</span> foram ocupados por candidatos que conseguiram se eleger obtendo mais votos que o Quociente Eleitoral. Isso representa apenas <span className="mark-white">5%</span> das cadeiras no Congresso Nacional. </p>
            </div>

            <div className="pictogram-container">
              <Pictogram
                chars={100}
                inverted
                selected={proportion}
              />
            </div>

            <div>
              <LinkButton
                type="is-secondary"
                label="Veja os dados por Estado"
                route="/states"
              />
            </div>
          </Container>
        </Content>
      </GeneralVisionContainer>
    )
  }
}
