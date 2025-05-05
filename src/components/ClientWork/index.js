import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer,  } from '../Projects/ProjectsStyle'
import { clientWorks as projects } from '../../data/constants'
import { useTheme } from 'styled-components'
import styled from 'styled-components'
import DOMPurify from 'dompurify';

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 75%;
    height: fit-content;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    margin-top: 3%;
    display: flex;
    gap: 20px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 90%;
    height: 20vh;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const TitleDiv = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 0.8rem;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`
const WrapperDiv = styled.div`
    width: 50%;
`

const ButtonTag = styled.a`
    width: 20%;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 8px 10px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;
const ClientWorks = ({openModal,setOpenModal}) => {
  const theme = useTheme()
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Client Work</Title>
        <Desc>
        Collaborated with a Top-Tier EdTech Startup in India.
        </Desc>
        <CardContainer>
        {toggle === 'all' && projects
            .map((project) => (
                <Card onClick={() => {if (setOpenModal) 
                    setOpenModal({state: true, project: project})}}>
                        <WrapperDiv >
                        <Image src={project.image}/>
                        <Tags>
                            {project.tags?.map((tag, index) => (
                            <Tag>{tag}</Tag>
                            ))}
                        </Tags>
                        </WrapperDiv>
                      
                        <Details>
                            <TitleDiv>{project.title}</TitleDiv>
                            <Date>{project.date}</Date>
                            <Description dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.description) }}/><br/>
                            <ButtonTag href={project?.webapp} target='new'>View Live Website</ButtonTag>
                        </Details>

                        {/* <Button>View Project</Button> */}
                    </Card>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default ClientWorks