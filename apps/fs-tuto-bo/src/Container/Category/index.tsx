import { CSSProperties, useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, rem } from '@mantine/core';
import './Category.scss'
import ModalCategories from '../../components/ModalCategories'
import { CoursType } from '../../Utils/Types';


const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

interface TableSelectionProps {
  donnees: CoursType[];
}

export function TableSelection({ donnees }: TableSelectionProps) {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(['']);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) => (current.length === donnees.length ? [] : donnees.map((item) => item.id)));

  const rows = donnees.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <td>{item.label}</td>
            
        </td>
            <div className='icon' 
              style={{
                '--bg': `url(${item.icon})`
              } as CSSProperties}
              />
              <td>
          <div className="action">
            <div className='icon edit'></div>
            <div className='icon delete'></div>
          </div>
        
        </td>
      </tr>
      
    );
  });

  return (
    <ScrollArea>

              <ModalCategories/>

      <Table miw={800} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: rem(40) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === donnees.length}
                indeterminate={selection.length > 0 && selection.length !== donnees.length}
                transitionDuration={0}
              />
            </th>
            <th>Label</th>
            <th>Icon</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default TableSelection;