//Remove duplicates from array of objects

const removeDuplicateData = (data) =>{
 
    data = data.filter((data, index, self) => self.findIndex(t => t.id === data.id) === index)
  
    return data
 }
 