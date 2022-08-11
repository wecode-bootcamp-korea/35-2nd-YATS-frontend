import React from 'react';
import styled from 'styled-components';

const FaqData = ({ stayData }) => {
  const name = stayData.length && stayData[0].stay_name;
  const capacity = stayData.length && stayData[0].stay_rooms[0];

  const FaqTable = {
    header: ['숙소', '기준인원', '최대인원'],
    data: [
      {
        stay: name,
        min_capacity: capacity.room_min_capacity,
        max_capacity: capacity.room_max_capacity,
      },
    ],
  };
  return (
    <Table>
      <Thead>
        <tr>
          {FaqTable.header.map(item => {
            // eslint-disable-next-line react/jsx-key
            return <th key={Math.random()}>{item}</th>;
          })}
        </tr>
      </Thead>
      <Tbody>
        {FaqTable.data.map(item => {
          return (
            // eslint-disable-next-line react/jsx-key
            <tr key={Math.random()}>
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
