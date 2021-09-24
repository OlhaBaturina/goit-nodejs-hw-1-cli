const fs = require('fs/promises');
const path = require('path')
const crypto = require('crypto');
const { readSync } = require('fs');

const contactsPath = path.join(__dirname, '/db', '/contacts.json');


const readFile = async () => {
    try{
         const result = await fs.readFile(
           path.join(contactsPath),
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
  
  function getContactById(contactId) {
    // ...твой код
  }
  
  function removeContact(contactId) {
    // ...твой код
  }
  
  function addContact(name, email, phone) {
    // ...твой код
  }

  module.exports = {
      listContacts,
      getContactById,
      removeContact,
      addContact
  }