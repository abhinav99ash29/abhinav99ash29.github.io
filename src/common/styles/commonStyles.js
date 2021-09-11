import styled from 'styled-components';

const MainContainer = styled.div`

    .landing {
        margin-top: 100px;
    }

    .grid-container {
        margin: auto;
        max-width: 100rem;
        padding: 0rem 1rem 0rem 1rem;
        width: 100%;
    }

    .description-paper {
        padding: 1rem 1rem 2rem 1rem;
    }

    .hover-link:hover {
        background-color: ${props => props.theme.palette.info.light};
    }

    .title-text {
        font-size: 24px;
    }

    .body-text {
        font-size: 16px;
    }

    .bottom-margin-2rem {
        margin-bottom: 2rem;
    }

    .avatar-img {
        width: 8rem;
        height: 8rem;
    }

    .max-width-45rem {
        max-width: 45rem;
    }

    .max-width-60rem {
        max-width: 60rem;
    }

    .info-text {
        font-size: 0.8rem;
        font-style: italic;
        opacity: 0.5;
    }

    .bold {
        font-weight: bold;
    }

    .font-16 {
        font-size: 1rem;
    }

    .MuiTextField-root {
        min-width: 15rem;
    }

    textarea {
        min-width: 15rem;
        font-family: sans-serif;
        font-size: 1rem;
    }

    .margin-bottom-2rem {
        margin-bottom: 2rem;
    }

    .margin-top-2rem {
        margin-top: 2rem;
    }

    .padding-left-right-2rem {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .color-info-light {
        background-color: ${props => props.theme.palette.info.light};
    }

    .color-info-light:hover {
        background-color: ${props => props.theme.palette.info.light};
    }

    .min-width-6rem {
        min-width: 6rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.values['md']}px) {
        // .hover-link {
        //     background-color: ${props => props.theme.palette.info.light};
        // }
        
    }

`;

export default MainContainer;