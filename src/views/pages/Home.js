import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import 'primeicons/primeicons.css';

//Components
import GoToTop from '../components/GoToTop'
import Title from '../components/Title_Section'
import SectionBox from '../components/Section_Box'
import Section from '../components/Section'
import TitleEffect from '../components/Title_Effect'
import CardsExperinces from '../components/Cards_Experinces'
import curriculo from '../../public/pdf/curriculo_22.pdf'
import Picture from '../components/Picture'
import ListGroup from '../components/ListGroup'
import ListItem from '../components/ListItem'

//Styles
import styles from '../components/Title_Section.module.css'
import stylesSection from '../components/Section.module.css'
//import stylePicture from '../components/Pictures.module.css'

//Images
import IMGBanner250 from '../../public/images/img-home/Logo_Brancox250.png'
import IMGBanner500 from '../../public/images/img-home/Logo_Brancox500.png'
import AgrimecLogo from '../../public/images/experiences/agrimec-implementos-agricolas-logo.jpg'
import FrigSilva from '../../public/images/experiences/frigorifico-silva128..jpg'
import CofelmaLogo from '../../public/images/experiences/logo-cofelma.png'
import ImgWelder1 from '../../public/images/carousel/solda-robo.jpg'
import ImgWelder2 from '../../public/images/carousel/trabalhador-soldagem.jpg'
import ImgWelder3 from '../../public/images/carousel/badWelde2.jpg'
import lider from '../../public/images/softskills/png/001-lideranca.png'
import profissional from '../../public/images/softskills/png/002-empregado.png'
import teamwork from '../../public/images/softskills/png/004-socios.png'
import weld from '../../public/images/hardskills/solda-teste-250x155.jpg'
import mig from '../../public/images/hardskills/solda-mig-250x155.jpg'
import pipelineWelder from '../../public/images/hardskills/soldagem-de-tubulacao-250x155.jpg'
import ReadMore from '../components/ReadMore';
import GetDataCompanies from '../../public/getAPIData/GetAPIData';

const Home = () => {
  return (
    <Container>
      <Section classes='banner'>
        <Row className='d-flex align-items-center'>
          <Col sm={6}>
            <SectionBox
              titles={
                <Title
                  classes={`${styles.Title_box} mb-sm-2`}
                  title="Aldomar Assolin"
                  subtitle="Soldador"
                  effect={<TitleEffect />}
                />
              }
              text="O Crescimento profissional ?? um dos meus objetivos dentro de uma empresa, exercendo a fun????o ?? mim destinada, 
                  aplicando as normas de seguran??a e zelando pela sa??de, integridade e seguran??a de todos os trabalhadores, 
                  bem como o crescimento em equipe."
              classes={`${stylesSection.Section_Box_Left} ${stylesSection.justify} d-flex flex-column align-items-start justify-content-center`}
            >
              <div className='text-end w-100'>
                <Button variant=''>
                  <a className="links" href={curriculo} target="_blank" rel="noreferrer">Curr??culo em PDF</a>
                </Button>
                <Button variant=''>
                  <Link to='/About' className='links'>Saiba Mais...</Link>
                </Button>
              </div>
            </SectionBox>
          </Col>
          <Col sm={6}>
            <SectionBox classes={`${stylesSection.Section_Box_Right} d-flex align-items-center justify-content-center`}>
              <Picture
                widthSM="768"
                widthLG="769"
                alt="Logomarca"
                src={IMGBanner500}
                srcSetLG={IMGBanner500}
                srcSetSM={IMGBanner250}

              />
            </SectionBox>
          </Col>
        </Row>
      </Section>

      <Section className='about'>
        <Title classes={styles.Title_Section} title="Quem Sou?" subtitle="Soldador, T??cnico em Soldagem, Operador de Soldagem" />
        <SectionBox
          classes={`${stylesSection.justifyText}`}
          text="Ao longo de muitos anos atuando no setor metal??rgico, me identifiquei com a soldagem, determinado a desenvolver 
              minhas habilidades e conhecimentos acerca deste t??pico me dediquei a aprender tudo que pude na ??rea. Desenvolvi habilidades desde a 
              montagem de estruturas gerais ?? soldagem de tubul????es. Com o desenvolvimento acelerado de novas tecnologias, vieram novos desafios
              e com isso equipamentos e processos mais modernos, significando a necessidade de atualiza????es peri??dicas. Al??m da automa????o dos processos, 
              temos corrente pulsada nos processos MAG e TIG, nos trazendo mais complexidade no procedimento de soldagem e opera????o desses equipamentos. 
              No curso T??cnico em Soldagem, cursado no Col??gio T??cnico Industrial de Santa Maria, RS, tive a portunidade de conhecer, estudar e entender 
              diversas dessas tecnologias, com os quais desenvolvo meu trabalho e compartilho esse conhecimento com demais colegas."
        />
        <Section classes={stylesSection.Section}>
          <Row>
            <Col sm={6} className='p-0 mb-5'>
              <SectionBox
                titles={
                  <Title
                    classes={`${styles.Title_box}`}
                    title="Soldador"
                    subtitle="De estruturas met??licas ?? tubula????es"
                    effect={<TitleEffect />}
                  />
                }
                text="Soldagem nos processos GMAW, GMAWP, FCAW, SMAW, GTAW, SAW. Soldagem automatizada, fontes eletr??nicas, com corrente 
                          pulsada."
                classes={`${stylesSection.Section_Box_Left} ${stylesSection.justify} px-3`}
              >
                <ReadMore linkClass='links' to='/About' textLink='Saiba mais...' />
              </SectionBox>
            </Col>
            <Col sm={6}>
              <SectionBox
                classes={stylesSection.Section_Box_Right}
              >
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100  rounded-3"
                      src={ImgWelder1}
                      alt="First slide"
                    />
                    <Carousel.Caption className='fs-6'>
                      <Title title='Automa????o' subtitle='Operador de Soldagem' />
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-3"
                      src={ImgWelder2}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <Title title='Processos' subtitle='Todos os processos de soldagem' />
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-3"
                      src={ImgWelder3}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <Title classes='text-secondary' title='Forma????o' subtitle='t??cnico em Soldagem' />
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </SectionBox>
            </Col>
          </Row>
        </Section>
      </Section>

      <Section id='experiences'>
        <Title
          classes={styles.Title_Section}
          title="Experi??ncias Profissionais"
          subtitle="Uma carreira de sucesso traz junto muitos desafios"
        />
        <Section>
          <GetDataCompanies/>
          <CardsExperinces
            className='text-start'
            cardImg={AgrimecLogo}
            cardTitle='Agrimec Agro Industrial e Mec??nica LTDA'
            cardSubtitle='Soldador'
            cardText="Soldagem de estruturas gerais, implementos agr??colas."
            cardDataIn='22/02/2022'
            cardDataOut='22/05/2021'
          />
          <CardsExperinces
            className='text-start'
            cardImg={CofelmaLogo}
            cardTitle='Metalurgica Cofelma LTDA'
            cardSubtitle='Soldador'
            cardText="Montagem e soldagem de roscas transportadoras."
            cardDataIn='07/05/2020'
            cardDataOut='04/08/2020'
          />
          <CardsExperinces
            className='text-start'
            cardImg={FrigSilva}
            cardTitle='Frigor??fico Silva Industria e Com??rcio LTDA'
            cardSubtitle='Soldador'
            cardText="Soldagem e manuten????o de m??quinas, equipamentos , estruturas e depend??ncias frigor??ficas."
            cardDataIn='11/11/2019'
            cardDataOut='08/02/2020'
          />
          {/* button link to read more */}
          <ReadMore
            divClass='my-3'
            linkClass='links'
            to='/Experience'
            textLink='Saiba mais...'
          />
        </Section>
      </Section>

      <Section id='competences' classes='bg-grey rounded-2 px-sm-2'>
        <Container>
          <Section>
            <Title
              classes={styles.Title_Section}
              title='Compet??ncias'
              subtitle='Nos ??ltimos anos, os processos seletivos para vagas de emprego t??m levado em considera????o aspectos e 
                      caracter??sticas que est??o al??m da experi??ncia profissional e da forma????o acad??mica do candidato.'
            />
            <Section>
              <SectionBox classes="py-2 d-sm-flex flex-wrap flex-s align-items-center justify-content-center justify-content-sm-around">
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={lider} className='p-2' />
                  <Card.Body>
                    <Card.Title>Lideran??a</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Gerenciar Projetos' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Resolver Conflitos' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Delegar Tarefas' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Dar Feedback' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Supervisionar' />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={profissional} className='p-2' />
                  <Card.Body>
                    <Card.Title>Profissionalismo</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Compet??ncia' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Honestidade' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Autorregula????o' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Buscar Solu????es' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Intelig??ncia Emocional' />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={teamwork} className='p-2' />
                  <Card.Body>
                    <Card.Title>Trabalho em Equipe</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Aceitar Feedback' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Colaborar' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Aceitart a Divercidade' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Ter empatia' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Respeitar opini??es' />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={weld} className='p-2' />
                  <Card.Body>
                    <Card.Title>Qualidade e Inspe????o</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Inspe????o Dimensional' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Medi????o dos Par??metros' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Controle de Qualidade' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Padr??o nos Processos' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Normais de Soldagem' />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={mig} className='p-2' />
                  <Card.Body>
                    <Card.Title>Processos de Soldagem</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='GMAW ou MAG' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='FCAW (arame tubular)' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='GMAW-P (MAG - Pulsado)' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='SAW (Aco Submerso)' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='GTAW ou TIG' />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={pipelineWelder} className='p-2' />
                  <Card.Body>
                    <Card.Title>T??cnico em Soldagem</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Qualifica????o de Procedimento' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Acompanhamento do setor e soldadores' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Qualifica????o e Treinamento para soldadores' />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SectionBox>
              <ReadMore
                divClass='my-3'
                linkClass='links'
                to='/about'
                textLink='Saiba mais...'
              />
            </Section>
          </Section>

          <Section id='softskill'>
            <Title
              classes={styles.Title_Section}
              title='Soft Skills'
              subtitle='Reconhecer e ampliar essas capacidades ?? t??o importante quanto ter uma forma????o 
                    espec??fica na ??rea de atua????o.'
            />
            <SectionBox
              classes={`${stylesSection.justifyText} px-sm-3`}
              text='Com o avan??o das transforma????es no mercado e nas rela????es de trabalho, cada vez mais empresas est??o percebendo 
                    que precisam de colaboradores com habilidades que v??o muito al??m da t??cnica. Soft skills s??o compet??ncias relacionadas
                    ao comportamento do indiv??duo, muito mais atreladas ?? personalidade e ??s experi??ncias, do que ?? forma????o profissional.'
            >
              <ListGroup>
                <ListItem classes='mb-3' item='Cordialidade e simpatia no trato com as pessoas' />
                <ListItem classes='mb-3' item='Capacidade de planejamento e organiza????o para o cumprimento de prazos' />
                <ListItem classes='mb-3' item='Zelo pela higiene e organiza????o do local de trabalho' />
                <ListItem classes='mb-3' item='Dinamismo para execu????o de m??ltiplas tarefas' />
                <ListItem classes='mb-3' item='Bom relacionamento interpessoal para trabalho em equipe' />
                <ListItem classes='mb-3' item='Capacidade de lideran??a e tomada de decis??es assertivas' />
              </ListGroup>
            </SectionBox>
          </Section>

          <Section id='hardskill'>
            <Title
              classes={styles.Title_Section}
              title='Hard Skills'
              subtitle='As hard skills est??o relacionadas ao que desejamos aprender ao escolher uma gradua????o, por exemplo.'
            />
            <SectionBox
              classes={`${stylesSection.justifyText} px-sm-3`}
              text='Ao se tratar de hard skills, estamos falando das compet??ncias t??cnicas, ou seja, adquiridas no ensino superior, 
                    p??s-gradua????o, cursos t??cnicos, cursos livres, leituras e de outras maneiras. S??o as habilidades ligadas ao conhecimento 
                    adquirido e utilizadas para realizar a atividade profissional. Desse modo, as empresas podem comprovar que os candidatos 
                    t??m essas compet??ncias com certificados, diplomas, etc.'
            >
              <ListGroup>
                <ListItem classes='mb-3' item='Soldagem de tubula????es' />
                <ListItem classes='mb-3' item='Interpreta????o de projetos e desenhos t??cnicos' />
                <ListItem classes='mb-3' item='Inspe????o e controle de qualidade' />
                <ListItem classes='mb-3' item='Solda MIG, TIG e arco el??trico' />
                <ListItem classes='mb-3' item='Metalurgia' />
                <ListItem classes='mb-3' item='Soldagem estrutural' />
              </ListGroup>
            </SectionBox>
          </Section>
        </Container>
      </Section>
      <GoToTop />
    </Container>
  )
}

export default Home