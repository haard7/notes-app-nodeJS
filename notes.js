const { timeLog } = require('console');
const fs = require('fs');
const { title } = require('process');
const chalk = require('chalk')
const getnotes = function(){
      return 'here is the notes..'
}
const addNote = function(title,body){
      const notes = loadNotes();

      const duplicateNote = notes.filter(function(note){
            return note.title === title;
      })

      if(duplicateNote.length === 0){
            notes.push({
                  title: title,
                  body: body
            })
           console.log(chalk.green("successflly added"));
      }else{
            console.log('You cannot add due to already existence !!');
      }
       saveNote(notes);
}

const removeNotes = function(title){
      const notes = loadNotes();
      // for(const i=0; i<notes.length; i++){
      //       if(notes[i].title === title){
      //             delete notes[i].title;
      //             console.log('item deleted');
      //       }                                                     //Whats wrong with this logic ???
      //       else{
      //             console.log('no such item available to delete');
      //       }
      // }

      const notesToKeep = notes.filter(function(note){  //can't we use for loop here ???
            return note.title !== title;
            
      })
      
       if(notes.length > notesToKeep.length){
            
            console.log(chalk.green('sucessfully removed'));
            saveNote(notesToKeep); 
      }
       else{
             console.log(chalk.red('failed to remove'));
       }
     
}

const saveNote = function(notes){
  const dataJSON = JSON.stringify(notes);
  const parsedDataJSON = JSON.parse(dataJSON);
  fs.writeFileSync('notes.json', dataJSON);

}



const loadNotes = function(){
      try{
            const dataBuffer = fs.readFileSync('notes.json');
            const dataJSON = dataBuffer.toString();
            return JSON.parse(dataJSON);
      }catch(e){
             return [];
      }
    

}

const listNotes = () => {
      const notes = loadNotes();
      console.log(chalk.blue("Listing  the notes"));
      notes.forEach((note) => {
            console.log(note.title);
      });
}

const readNotes= (title) => {

      const notes = loadNotes();
      const note = notes.find((note) => note.title === title)


      if(note){
            console.log(chalk.yellow(note.title));
            console.log(note.body);
            
      }
      else{
            console.log(chalk.red("note not found"));
      }
} 

module.exports = {
      getnotes: getnotes,
      addNote: addNote,
      removeNotes: removeNotes,
      listNotes: listNotes,
      readNotes: readNotes

} 
