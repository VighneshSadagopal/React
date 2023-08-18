import React, { useState, useEffect } from 'react';
import Ticket from './Ticket';

import './KanbanBoard.css'; // Import the CSS file

const KanbanBoard = ({ tickets,users }) => {
  const [groupBy, setGroupBy] = useState('status');
  const [sortOrder, setSortOrder] = useState('priority');

  const [groupedTickets, setGroupedTickets] = useState({
    Backlog: [],
    Todo: [],
    InProgress: [],
    Done: [],
    Cancelled: [],
  });

  useEffect(() => {
    const grouped = {
      Backlog: [],
      Todo: [],
      InProgress: [],
      Done: [],
      Cancelled: [],
    };
    tickets.forEach(ticket => {
      const status = ticket.status || '';


      if (status === 'Done') {
        grouped.Done.push(ticket);
      } else if (status === 'In progress') {
        grouped.InProgress.push(ticket);
      } else if (grouped[status]) {
        grouped[status].push(ticket);
      }
    });

    setGroupedTickets(grouped);
  }, [tickets, groupBy]);

  const updateTicketStatus = (ticketId, isDone) => {
    setGroupedTickets(prevGroupedTickets => {
      // Rest of the updateTicketStatus function code...
      const updatedGroupedTickets = {
        ...prevGroupedTickets,
        Done: [...prevGroupedTickets.Done],
        InProgress: [...prevGroupedTickets.InProgress],
      };

      const targetGroup = isDone ? 'Done' : 'InProgress';
      const sourceGroup = isDone ? 'InProgress' : 'Done';

      const movedTicketIndex = updatedGroupedTickets[sourceGroup].findIndex(
        ticket => ticket.id === ticketId
      );

      if (movedTicketIndex !== -1) {
        const movedTicket = updatedGroupedTickets[sourceGroup][movedTicketIndex];
        movedTicket.status = targetGroup;

        updatedGroupedTickets[targetGroup].push(movedTicket);
        updatedGroupedTickets[sourceGroup].splice(movedTicketIndex, 1);

        console.log(updatedGroupedTickets);
      }

      return updatedGroupedTickets;
    });
  };

  const sortedTickets = Object.values(groupedTickets).map(group =>
    group.sort((a, b) =>
      sortOrder === 'priority'
        ? b.priority - a.priority
        : a.title.localeCompare(b.title)
    )
  );

  return (
    <div className="kanban-board">
      <div className="kanban-header">
        <div className="options-header">
          <select value={groupBy} onChange={e => setGroupBy(e.target.value)}>
            <option value="status">By Status</option>
            <option value="user">By User</option>
            <option value="priority">By Priority</option>
          </select>
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
      <div className="kanban-content">
        <div className="kanban-columns">
          {Object.keys(groupedTickets).map(groupKey => (
            <div key={groupKey} className="column">
              <h2>{groupKey === 'InProgress' ? 'In progress' : groupKey}</h2>
              {groupedTickets[groupKey].map(ticket => (
                <Ticket
                  key={ticket.id}
                  ticket={ticket}
                  groupBy={groupBy}
                  updateTicketStatus={updateTicketStatus}
                  users={users}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
