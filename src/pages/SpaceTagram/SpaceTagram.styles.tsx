import styled from "styled-components";

const SpaceTagramMain = styled.div`
    display: grid;
    grid-gap: 1rem;
    margin-top: 2rem;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 820px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const SpaceTagramMainTitle = styled.h1`
    text-align: center;
    fon-family: 'Inter-Bold';
    padding-bottom: 2rem;
`;

const SpaceTagramCalendar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;
`;

export { SpaceTagramMain, SpaceTagramMainTitle, SpaceTagramCalendar };
