//function returnRecords (obj) {
  //  return `Record List: ${obj}`;

//}
//delete recordCollection[1245].tracks;

//const getRecord = returnRecords(recordCollection[2548].tracks);
//const getNextRecord = returnRecords(recordCollection[2468].tracks);
//const getNextRecord2 = returnRecords(recordCollection[1245].tracks);
//const getNextRecord3 = returnRecords(recordCollection[5439].tracks);

//console.log(getRecord , getNextRecord , getNextRecord2 , getNextRecord3);






const recordCollection = { 
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop]; // Rule 1
  } else if (prop !== "tracks") {
    records[id][prop] = value; // Rule 2
  } else {
    // Rule 3 and 4
    if (!records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = []; // create empty array if missing
    }
    records[id]["tracks"].push(value); // add to tracks array
  }

  return records; // Rule 0
}