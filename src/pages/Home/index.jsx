/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from '../../components/Header';
import styled from "styled-components";


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