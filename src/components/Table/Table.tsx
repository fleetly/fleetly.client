import classNames from 'classnames';
import * as React from 'react';
import { Column, useTable } from 'react-table';

// Styles
import styles from './Table.scss';

interface Classes extends ExtendedClasses {
  tbody?: string;
  td?: string;
  thead?: string;
  tr?: string;
}

interface PropTypes {
  classes?: Classes;
  columns: Column[];
  data: any[];
  onTrClick?(event: any): void;
}

const Table: React.FC<PropTypes> = ({ columns, data, onTrClick }) => {
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
        {rows.map((row: any, index) => {
          prepareRow(row);

          const handleRowClick = () => onTrClick && onTrClick(row.original);

          return (
            <div
              {...row.getRowProps()}
              className={classNames(styles.Tr, {
                [styles.TrHasAction]: !!onTrClick
              })}
              key={index}
              onClick={handleRowClick}
            >
              {row.cells.map((cell: any, index: number) => {
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
