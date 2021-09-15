import classNames from 'classnames';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Column, useTable } from 'react-table';
import { v1 } from 'uuid';

// Components
import Loader from '@components/Loader';

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
  count?: number;
  data: any[];
  hasMore?: boolean;
  onFetchMore?(): void;
  onTrClick?(event: any): void;
}

const Table: React.FC<PropTypes> = ({
  columns,
  count,
  data,
  hasMore = false,
  onFetchMore,
  onTrClick
}) => {
  const [id] = useState(v1());

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

      <div {...getTableBodyProps()} className={styles.Tbody} id={id}>
        <InfiniteScroll
          className={styles.Scroll}
          dataLength={count || data.length}
          hasMore={hasMore}
          loader={<Loader className={styles.Loader} />}
          next={onFetchMore!}
          scrollableTarget={id}
        >
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
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Table;
