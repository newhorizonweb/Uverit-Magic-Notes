


    /* Local Storage - Save Data */

// Throttle duration is ms
const timeoutTimer = 2000;

// Timeout Throttle
let saveDataThrottle;

// Listen for the messages from the popup script
chrome.runtime.onMessage.addListener((message) => {

    if (message.type === "saveDataMsg"){

        clearTimeout(saveDataThrottle);

        // Save the data after a delay
        saveDataThrottle = setTimeout(() => {

            saveData(
                message.noteVal,
                message.currURL,
                message.currTitle
            );

        }, timeoutTimer);
        
    }
    
    if (message.type === "saveDataMsgInstant"){

        clearTimeout(saveDataThrottle);

        // Save the data immediately
        saveData(
            message.noteVal,
            message.currURL,
            message.currTitle
        );

    }
    
});

// Save the data to storage
const saveData = (noteVal, currURL, currTitle) => {

    if (!currURL || !currTitle) return;

    chrome.storage.sync.get("uveritNotesData", function(result){

        // Set the notes & check if the uveritNotesData already exists
        const data = result.uveritNotesData || {};

        // New data
        const currData = {
            mn_title: currTitle,
            mn_val: noteVal
        }
   
        if (data){
            data[currURL] = currData;
        } else {
            let newData = {};
            newData[currURL] = currData;
            data = newData;
        }

        // Update the local storage data
        chrome.storage.sync.set({ "uveritNotesData": data });

    });

};