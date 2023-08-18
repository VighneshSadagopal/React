import React, { useState, useEffect } from 'react';

const Ticket = ({ ticket, groupBy, updateTicketStatus,users }) => {
  const [isDone, setIsDone] = useState(ticket.status === 'Done');

  useEffect(() => {
    const storedIsDone = JSON.parse(localStorage.getItem(ticket.id));
    if (storedIsDone !== null) {
      console.log(ticket.id);
      setIsDone(storedIsDone);
    }
  }, [ticket.id]);

  const handleCheckboxChange = async () => {
    setIsDone(!isDone);
    console.log(!isDone);
    if (groupBy === 'user') {
      try {
        // Update the ticket status on the server
        // ...

        // Update the local storage with the ticket's new status
        // localStorage.setItem(ticket.id, JSON.stringify(!isDone));
        const data = localStorage.getItem('jsonApi');
        if (data) {
          const parsedData = JSON.parse(data);
          // Find the index of the ticket you want to update based on its id
          const ticketIdToUpdate = ticket.id; // Replace this with the actual ticket id you want to update
          const ticketIndex = parsedData.tickets.findIndex(ticketValue => ticketValue.id === ticketIdToUpdate);
          console.log(ticketIndex);
          if (ticketIndex !== -1 && !isDone === true) {
            // Modify the data of the ticket
            parsedData.tickets[ticketIndex].status = 'Done';

            // Update the modified data back into localStorage
            localStorage.setItem('jsonApi', JSON.stringify(parsedData));

            console.log('Ticket data updated successfully.');
          } 
          else if(ticketIndex !== -1 && !isDone === false){
            let ogData = JSON.parse(localStorage.getItem('jsonApiDefault'));
            parsedData.tickets[ticketIndex].status = ogData.tickets[ticketIndex].status;

            localStorage.setItem('jsonApi', JSON.stringify(parsedData));
          }
          else {
            console.log('Ticket not found in the data.');
          }
        } else {
          console.log('Data not found in localStorage.');
        }
        // Update the ticket's moveTicketToDone property
        updateTicketStatus(ticket.id, !isDone);
      } catch (error) {
        // Handle error
      }
    }
  };

  return (
    <div className={`ticket priority-${ticket.priority} ${isDone ? 'done' : ''}`}>
      <div className="ticket-title">{ticket.title}</div>
      <div className="ticket-status">{ticket.status}</div> 
      <div className="ticket-user">{users[users.findIndex(element => element.id ===ticket.userId)].name}</div>
      <div className='id'>{ticket.id}</div>
      {groupBy === 'user' && (
        <div className="ticket-done">
          Done{' '}
          <input
            type="checkbox"
            checked={isDone}
            onChange={handleCheckboxChange}
          />
        </div>
      )}
    </div>
  );
};

export default Ticket;
