/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from '../../components/Header';
import styled from "styled-components";
import Leftside from '../../components/Leftside';
import Main from '../../components/Main';
import Rightside from '../../components/Rightside';


const Container = styled.div`
   padding-top : 52px;
   max-width: 100%;
`;

const Section = styled.section`
   min-height: 50px;
   padding: 16px 0;
   box-sizing: content-box;
   text-align: center;
   text-decoration: underline;
   display: flex;
   justify-content: center;
   h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
        font-weight: 700;
    }
   }
   p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
   }

   @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
   }
`;

// const Content = styled.div`
    
// `

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

const Home = (props) => {
    return (
        <Container>
            <Header />
            <Section>
            <h5>
                <a>Vous cherchez de nouveau talents?</a>
            </h5>
            <p>Trouvez des pros talentueux en un temps record avec Upwork et maintenez vos affaires
          en mouvement.</p>
            </Section>
            <Layout>
                <Leftside />
                <Main />
                <Rightside />
            </Layout>

        </Container>
    );
};

export default Home;

// const Home = () => {
//     return (

//         <div>
//             <Header />
//             Home
//         </div>
//     );
// };

// export default Home;