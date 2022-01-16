import styled from "styled-components";

const CardMain = styled.div`
  background: #fff;
  border-radius: 6px;
`;

const CardHeader = styled.div`
  border-radius: 6px 6px 0 0;
`;

const CardHeaderImg = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 6px 6px 0 0;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 20rem;
  border-radius: 6px 6px 0 0;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardBodyTitle = styled.p`
   font-family: 'Inter-Bold';
`;

const CardBodyExplanation = styled.p`
    padding: 1rem 0 1.5rem 0;
    height: 25rem;

    @media (max-width: 820px) {
      height: auto;
    } 
`;

const CardFooter = styled.div`
    padding: 1rem;
`;

export { CardMain, CardHeader, CardHeaderImg, CardBody, CardBodyTitle, CardBodyExplanation, Iframe, CardFooter };
