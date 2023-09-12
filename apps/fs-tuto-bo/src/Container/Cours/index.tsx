import {Table,  ScrollArea,} from '@mantine/core';
import './cours.scss'
import ModalCourse from '../../components/ModalCourse'



interface TableSelectionProps {
  datum: { cours: string; titre: string; lien: string;  }[];
}

export function TableSelection({ datum }: TableSelectionProps) {
  


  const rows = datum.map((item) => {
    return (
      <tr key={item.cours} >
        <td>
          
        </td>
        <td>{item.cours}
        </td>
        <td>{item.titre}</td>
        <td>{item.lien}</td>
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
    <div>
      <ModalCourse/>
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <thead>
          <tr>
            <th >
              
            </th>
            <th>Cours</th>
            <th>titre</th>
            <th>Lien</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
    </div>
  );
}

export default TableSelection;