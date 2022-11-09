import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: translateY(8px);
    opacity: 0;
  }
`;

const ContainerScroll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 20px;
    margin-left: calc(50% - 13px);
    opacity: 0;
    @media (min-width: 768px) {
            opacity: 1;
        }

    > p {
        font-size: 0.6rem;
    }

    .iconLine {
        width: 10px;
        height: 20px;
        border: 1px solid var(--color1);
        border-radius: 20px;
        margin-bottom: 10px;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .iconFill {
        width: 3px;
        height: 8px;
        background-color: var(--color1);
        border-radius: 10px;
        position: absolute;
        top: 2px;
        animation: ${rotate} 1s ease-out infinite;
    }
`

const IconScroll = () => {
    return (
        <ContainerScroll>
            <div className="iconLine">
                <div className="iconFill"></div>
            </div>
            <p>Scroll</p>
        </ContainerScroll>
    )
}

export default IconScroll;