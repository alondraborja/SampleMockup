import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: var(--color-green);
    color: var(--color-white);
    border: none;
    border-radius: 5px;
    font-family: 'Work Sans', sans-serif;
    padding: 10px;
    font-size: 16px;
` 

export const StyledCategory = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 5px;
    background-color: var(--color-green-variant);
    color: var(--color-green);
    font-weight: 500;
`
export const CategoryNumber = styled.div`
    padding: 0 10px;
    color: var(--color-white);
    border-radius: 20px;
    background-color: var(--color-green);
`
export const BorderedNumber = styled.div`
    align-items: center;
    justify-content: center;
    padding: 2px 10px;
    border: 1px solid var(--color-gray);
    border-radius: 5px;
`