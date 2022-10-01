import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color:#1A1C1D;
    padding: 20px;
    box-shadow: 0px 0px 5px #DDE6E3;
    border-radius: 10px;
    margin-top: 20px;
    color: #FFF

`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
`;