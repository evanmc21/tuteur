import React from 'react';

const NewClientForm = ({onNewClient = f => f}) => {
  let name, age, location, school, goals, notes, rate, userId
  const submit = e => {
    e.preventDefaut()
    onNewClient(name.value, age.value, location.value, school.value, goals.value, notes.value, rate.value, userId.value)
    name.value = ''
    age.value = ''
    location.value = ''
    school.value = ''
    goals.value = ''
    notes.value = ''
    rate.value = ''
    userId.value = ''
    name.focus()
  }

  return(
    <form onSubmit={submit}>
        <input ref={input => name = input}
            type="text"
            placeholder="Name" required />
        <input ref={input => age = input}
            type="number"
            placeholder="Age" required />
        <input ref={input => location = input}
            type="text"
            placeholder="Location" required />
        <input ref={input => school = input}
            type="text"
            placeholder="School" required />
        <input ref={input => goals = input}
            type="text"
            placeholder="Goals"  />
        <input ref={input => notes = input}
            type="text"
            placeholder="Notes"  />
        <input ref={input => rate = input}
            type="number"
            placeholder="Rate per hour" required />
        <input ref={input => rate = input}
            type="hidden"
            id="user_id"
            name="user_id"
            value={this.userId}/>
            <button>Add Client</button>
  </form>
  )
}

export default NewClientForm;
