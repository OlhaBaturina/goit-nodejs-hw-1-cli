const fs = require('fs/promises');
const path = require('path')
const crypto = require('crypto');
const { readSync } = require('fs');
const chalk = require('chalk');

const contactsPath = path.join(__dirname, '/db', '/contacts.json');


const readFile = async () => {
    try{
         const result = await fs.readFile(
         contactsPath,
          'utf8',
          );
    const contacts  = JSON.parse(result);
    return contacts;
    }
    catch (error) {
        console.log(error)
    }
   
}


// TODO: задокументировать каждую функцию
function listContacts() {
    // ...твой код
    return readFile()
    
  }
  
 async function getContactById(contactId) {
    // ...твой код
    const contacts = await readFile();
const [result] = contacts.filter(contact => contact.id === contactId);
return result
  }
  
  async function removeContact(contactId) {
    // ...твой код
    const contacts = await readFile();
    const deleteContact = contacts.find(contact => contact.id === contactId);
    const idx = contacts.indexOf(deleteContact);
   
    const [result] = contacts.slice(idx);
    const data = contacts.filter(contact => contact !==result)

    await fs.writeFile((contactsPath),
    JSON.stringify(data),
    );
console.log(chalk.red('Delete contact:', result.name))
    return data;
  }
  
  async function addContact(name, email, phone) {
    // ...твой код
const contacts = await readFile();
const newContact = { id: crypto.randomUUID(), name, email, phone}
contacts.push(newContact);
await fs.writeFile((contactsPath),
JSON.stringify(contacts),
);
return newContact
  }

  module.exports = {
      listContacts,
      getContactById,
      removeContact,
      addContact
  }