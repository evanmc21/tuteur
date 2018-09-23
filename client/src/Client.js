import React from 'react';

const Client = ({client}) =>

      <div>
        <p>{client.name}</p>
        <p>{client.location}</p>
        <p>{client.age}</p>
        <p>{client.school}</p>
        <p>{client.goals}</p>
        <p>{client.notes}</p>
        <p>{client.rate}</p>
      </div>


export default Client;
