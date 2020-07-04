import * as React from 'react';
import { useTable } from 'react-table';

// Styles
import styles from './Table.scss';

type PropTypes = {
  columns: any;
  data: any;
};

const Table: React.FunctionComponent<PropTypes> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <table {...getTableProps()} className={styles.Root}>
      <thead className={styles.Thead}>
        {headerGroups.map((headerGroup, index) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className={styles.Tr}
            key={index}
          >
            {headerGroup.headers.map((column, index) => (
              <th
                {...column.getHeaderProps()}
                className={styles.Th}
                key={index}
                style={{ flex: `0 0 ${column.width}px` }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()} className={styles.Tbody}>
        {rows.map((row, index) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()} className={styles.Tr} key={index}>
              {row.cells.map((cell, index) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={styles.Td}
                    key={index}
                    style={{ flex: `0 0 ${cell.column.width}px` }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
