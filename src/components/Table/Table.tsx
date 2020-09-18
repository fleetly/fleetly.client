import * as React from 'react';
import { useTable } from 'react-table';

// Styles
import styles from './Table.scss';

const Table: React.FunctionComponent<Table.Props> = ({
  columns,
  data,
  onTrClick
}) => {
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
    <div {...getTableProps()} className={styles.Root}>
      <div className={styles.Thead}>
        {headerGroups.map((headerGroup, index) => (
          <div
            {...headerGroup.getHeaderGroupProps()}
            className={styles.Tr}
            key={index}
          >
            {headerGroup.headers.map((column) => {
              const { key, role } = column.getHeaderProps();

              return (
                <div
                  {...column.getHeaderProps()}
                  className={styles.Th}
                  key={key}
                  role={role}
                  style={{
                    flex: `${column.width} 0 auto`,
                    maxWidth: column.maxWidth,
                    width: column.width
                  }}
                >
                  {column.render('Header')}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()} className={styles.Tbody}>
        {rows.map((row, index) => {
          prepareRow(row);

          return (
            <div {...row.getRowProps()} className={styles.Tr} key={index}>
              {row.cells.map((cell, index) => {
                return (
                  <div
                    {...cell.getCellProps()}
                    className={styles.Td}
                    key={index}
                    style={{
                      flex: `${cell.column.width} 0 auto`,
                      maxWidth: cell.column.maxWidth,
                      width: cell.column.width
                    }}
                  >
                    {cell.render('Cell')}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;

// onClick={onTrClick?.bind(null, row.original)}
