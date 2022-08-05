import React from 'react';
import styled from 'styled-components';

const FaqData = () => {
  const FaqTable = {
    header: ['숙소', '기준인원', '최대인원'],
    data: [{ stay: '스테이디', min_capacity: '2', max_capacity: '3' }],
  };
  return (
    <Table>
      <Thead>
        <tr>
          {FaqTable.header.map(item => {
            // eslint-disable-next-line react/jsx-key
            return <th>{item}</th>;
          })}
        </tr>
      </Thead>
      <Tbody>
        {FaqTable.data.map(item => {
          return (
            // eslint-disable-next-line react/jsx-key
            <tr>
              <td>{item.stay}</td>
              <td>{item.min_capacity}</td>
              <td>{item.max_capacity}</td>
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default FaqData;

const Table = styled.table`
  width: 600px;
  margin: 30px;
  border: 1px solid #868e96;
  border-collapse: collapse;

  tr,
  td {
    border: 1px solid #868e96;
    height: 40px;
    vertical-align: middle;
  }
  th {
    font-weight: bold;
    border: 1px solid #868e96;
    vertical-align: middle;
  }
`;

const Thead = styled.thead`
  vertical-align: middle;
  text-align: center;
`;
const Tbody = styled.tbody``;
