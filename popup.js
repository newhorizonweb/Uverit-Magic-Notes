


    /* Text Area & Buttons */

const arrowIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><polyline class='cls-1' points='8.57 54.29 100 145.71 191.43 54.29'/></svg>";

const deleteIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><line class='cls-1' x1='57.48' y1='72.67' x2='71.43' y2='168.31'/><line class='cls-1' x1='100' y1='72.67' x2='100' y2='168.31'/><path class='cls-1' d='M24.14,49.93l21.5,124.49c2.58,11.66,8.41,17.29,23.7,17.29h61.44c15.19,0,21.02-5.64,23.6-17.29l21.5-124.49'/><path class='cls-1' d='M95.6,49.27h88.09c4.39-.1,7.92-3.64,8.03-8.03h0c-.05-4.4-3.63-7.93-8.03-7.93H16.3c-4.4,0-7.97,3.54-8.03,7.93h0c.1,4.39,3.64,7.92,8.03,8.03h79.3Z'/><path class='cls-1' d='M140.13,32.55l-8.5-16.15c-2.39-4.01-7.26-8.12-12.9-8.12h-37.45c-5.64,0-10.51,4.11-12.8,8.12l-8.5,16.15'/><line class='cls-1' x1='142.52' y1='72.67' x2='128.57' y2='168.31'/><line class='cls-1' x1='177.77' y1='49.27' x2='22.32' y2='49.27'/></svg>";

const emojiListIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path class='cls-1' d='M130.36,131.85c-4.52,2.73-16.34,8.44-30.31,8.44-13.97,0-25.8-5.7-30.31-8.44'/><path class='no-stroke' d='M148.74,66.99c-10.89.47-19.06,1.9-26.97,3.28-3.09.54-6.12,1.07-9.21,1.52,1.5,2.44,2.53,5.09,3.1,8.05.49,2.55.77,5.06,1.04,7.49.35,3.15.67,6.13,1.43,8.81,2.89,10.21,15.51,14.49,25.6,16.28,7.89,1.4,14.36,1.28,19.78-.37,10.98-3.34,16.01-13.07,16.83-32.53.16-3.86.22-7.92.18-12.33-10.53-.59-21.18-.66-31.77-.2Z'/><circle class='cls-1' cx='100' cy='100' r='94'/><path class='cls-1' d='M185.53,63.86c-8.29-.68-21.22-1.4-37.07-.71-20.93.9-31.35,5.58-48.42,5.58-17.07,0-27.48-4.68-48.42-5.58-15.85-.68-28.78.03-37.07.71'/><path class='cls-1' d='M16.63,65.26c-.12,5.17-.11,10.34.11,15.5.61,14.57,3.7,30.16,19.5,34.97,6.67,2.03,13.86,1.72,20.72.5,11.18-1.99,24.52-6.98,27.92-19.03,1.4-4.95,1.38-10.23,2.36-15.27.6-3.11,1.87-5.48,3.69-7.55,2.29-2.6,5.64-4.04,9.11-4.04h0c3.47,0,6.81,1.43,9.11,4.04,1.82,2.07,3.09,4.44,3.69,7.55.97,5.04.96,10.32,2.36,15.27,3.41,12.05,16.75,17.05,27.92,19.03,6.87,1.22,14.05,1.53,20.72-.5,15.8-4.81,18.89-20.4,19.5-34.97.22-5.16.22-10.34.11-15.5'/><path class='no-stroke' d='M51.34,66.99c-10.6-.46-21.25-.38-31.77.21-.04,4.41.02,8.47.18,12.33.82,19.46,5.85,29.19,16.83,32.53,5.42,1.65,11.89,1.77,19.78.37,10.08-1.79,22.71-6.07,25.59-16.28.76-2.69,1.09-5.66,1.43-8.82.27-2.43.54-4.93,1.03-7.49.57-2.95,1.6-5.61,3.1-8.05-3.09-.45-6.12-.98-9.21-1.52-7.9-1.38-16.08-2.81-26.97-3.28Z'/></svg>";

const randomDiceIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path class='cls-1' d='M178.26,60.45l-73.57,51.73c-1.41.99-3.05,1.48-4.69,1.48-1.64,0-3.29-.49-4.69-1.48L21.74,60.45'/><path class='cls-1' d='M179.12,64.09v71.82c0,2.66-1.29,5.15-3.47,6.67l-70.96,49.89c-2.82,1.98-6.57,1.98-9.39,0l-70.96-49.89c-2.17-1.53-3.47-4.02-3.47-6.67v-71.82c0-2.66,1.29-5.15,3.47-6.67L95.31,7.52c2.82-1.98,6.57-1.98,9.39,0l70.96,49.89c2.17,1.53,3.47,4.02,3.47,6.67Z'/><line class='cls-1' x1='100' y1='113.67' x2='100' y2='193.96'/><ellipse class='cls-2' cx='136.16' cy='56.43' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='96.33' cy='84.43' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='116.25' cy='70.43' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='103.67' cy='33.58' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='63.84' cy='61.59' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='83.75' cy='47.58' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='42.45' cy='100.03' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='78.43' cy='125.34' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='42.45' cy='130.21' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='78.43' cy='155.51' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='157.55' cy='100.03' rx='2.04' ry='1.53'/><ellipse class='cls-2' cx='121.57' cy='155.51' rx='2.04' ry='1.53'/></svg>";

const bpListIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><line class='cls-1' x1='64.06' y1='36.9' x2='193.93' y2='36.9'/><circle class='cls-1' cx='11.07' cy='36.9' r='5'/><line class='cls-1' x1='64.06' y1='163.1' x2='193.93' y2='163.1'/><circle class='cls-1' cx='11.07' cy='163.1' r='5'/><line class='cls-1' x1='64.06' y1='100' x2='193.93' y2='100'/><circle class='cls-1' cx='11.07' cy='100' r='5'/></svg>";

const numberListIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><line class='cls-2' x1='64.06' y1='36.9' x2='193.93' y2='36.9'/><path class='no-stroke' d='M15.91,11.7c-.53,0-1.09.07-1.69.22-.6.14-1.14.38-1.62.72l-10.37,6.91c-1.49.96-2.23,2.21-2.23,3.74,0,1.2.43,2.23,1.3,3.1.86.86,1.87,1.3,3.02,1.3,1.01,0,1.85-.26,2.52-.79l4.25-3.14v33.96c0,1.25.43,2.29,1.3,3.13.86.84,1.97,1.26,3.31,1.26s2.53-.42,3.42-1.26c.89-.84,1.33-1.88,1.33-3.13V16.09c0-1.25-.41-2.29-1.22-3.13-.82-.84-1.92-1.26-3.31-1.26Z'/><path class='no-stroke' d='M39.2,53.28c-.75-.74-1.81-1.12-3.2-1.12h-.94c-1.39,0-2.46.37-3.2,1.12s-1.12,1.81-1.12,3.2v1.22c0,1.39.37,2.46,1.12,3.2.74.74,1.81,1.12,3.2,1.12h.94c1.39,0,2.46-.37,3.2-1.12.74-.74,1.12-1.81,1.12-3.2v-1.22c0-1.39-.37-2.46-1.12-3.2Z'/><line class='cls-2' x1='64.06' y1='100' x2='193.93' y2='100'/><path class='no-stroke' d='M29.02,117.64h-14.8l9.11-9.72c2.64-2.83,4.74-5.87,6.3-9.11,1.56-3.24,2.34-6.18,2.34-8.82,0-3.17-.65-5.92-1.94-8.24s-3.13-4.13-5.51-5.4c-2.38-1.27-5.17-1.91-8.39-1.91-1.49,0-3.02.25-4.61.76-1.58.5-3.12,1.21-4.61,2.12-1.49.91-2.83,1.97-4.03,3.17-.82.82-1.5,1.61-2.05,2.38-.55.77-.83,1.56-.83,2.38,0,1.06.44,1.98,1.33,2.77.89.79,1.86,1.19,2.92,1.19.48,0,1.01-.1,1.58-.29.58-.19,1.15-.67,1.73-1.44.77-1.01,1.6-1.9,2.48-2.66.89-.77,1.81-1.37,2.77-1.8.96-.43,1.9-.65,2.81-.65,2.3,0,4.15.73,5.54,2.2,1.39,1.46,2.09,3.4,2.09,5.8,0,1.49-.52,3.24-1.55,5.26-1.03,2.02-2.44,3.99-4.21,5.9L1.8,118.29c-.86.91-1.3,1.97-1.3,3.17s.36,2.18,1.08,2.95c.72.77,1.7,1.15,2.95,1.15h24.48c1.15,0,2.11-.37,2.88-1.12.77-.74,1.15-1.67,1.15-2.77s-.38-2.11-1.15-2.88c-.77-.77-1.73-1.15-2.88-1.15Z'/><path class='no-stroke' d='M49.64,116.74c-.75-.74-1.81-1.12-3.2-1.12h-.94c-1.39,0-2.46.37-3.2,1.12-.74.74-1.12,1.81-1.12,3.2v1.22c0,1.39.37,2.46,1.12,3.2.74.74,1.81,1.12,3.2,1.12h.94c1.39,0,2.46-.37,3.2-1.12.74-.74,1.12-1.81,1.12-3.2v-1.22c0-1.39-.37-2.46-1.12-3.2Z'/><line class='cls-2' x1='64.06' y1='163.1' x2='193.93' y2='163.1'/><path class='no-stroke' d='M26.03,157.99c-1.95-1.37-4.23-2.09-6.84-2.18l9.61-10.31c.48-.48.89-1.02,1.22-1.62.34-.6.5-1.21.5-1.84,0-1.25-.37-2.28-1.12-3.1-.74-.82-1.86-1.22-3.35-1.22H4.03c-1.15,0-2.11.37-2.88,1.12-.77.74-1.15,1.67-1.15,2.77s.38,2.11,1.15,2.88c.77.77,1.73,1.15,2.88,1.15h14.21l-11.11,11.81c-.53.62-.92,1.2-1.19,1.73-.26.53-.4,1.13-.4,1.8,0,1.06.3,1.97.9,2.74.6.77,1.45,1.15,2.56,1.15.86,0,1.62-.11,2.27-.32.65-.22,1.32-.42,2.02-.61.7-.19,1.57-.29,2.63-.29,1.39,0,2.7.31,3.92.94,1.22.62,2.21,1.54,2.95,2.74.74,1.2,1.12,2.71,1.12,4.54,0,1.92-.43,3.56-1.3,4.93-.86,1.37-1.96,2.42-3.28,3.17-1.32.75-2.72,1.12-4.21,1.12s-2.8-.24-3.92-.72c-1.13-.48-2.1-1.03-2.92-1.66-.62-.43-1.19-.72-1.69-.86-.5-.14-.97-.22-1.4-.22-1.2,0-2.2.49-2.99,1.48-.79.98-1.19,2.03-1.19,3.13,0,.62.18,1.28.54,1.98.36.7,1.07,1.33,2.12,1.91,1.25.72,2.74,1.3,4.46,1.73,1.73.43,3.48.65,5.26.65,3.84,0,7.2-.7,10.08-2.09s5.11-3.38,6.7-5.98c1.58-2.59,2.38-5.66,2.38-9.22,0-2.69-.56-5.2-1.69-7.52-1.13-2.33-2.74-4.22-4.82-5.69Z'/><path class='no-stroke' d='M48.42,178.94c-.75-.74-1.81-1.12-3.2-1.12h-.94c-1.39,0-2.46.37-3.2,1.12-.74.75-1.12,1.81-1.12,3.2v1.22c0,1.39.37,2.46,1.12,3.2.74.75,1.81,1.12,3.2,1.12h.94c1.39,0,2.46-.37,3.2-1.12s1.12-1.81,1.12-3.2v-1.22c0-1.39-.37-2.46-1.12-3.2Z'/></svg>";

const pageUrlIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><circle class='cls-1' cx='100' cy='100' r='94'/><path class='cls-1' d='M100,194c29.09,0,52.64-42.05,52.64-94S129.09,6,100,6'/><path class='cls-1' d='M100,6c-29.09,0-52.64,42.05-52.64,94s23.55,94,52.64,94'/><path class='cls-1' d='M175.79,44.39c-17.12,13.06-44.72,21.57-75.79,21.57s-58.68-8.51-75.79-21.57'/><path class='cls-1' d='M175.79,155.61c-17.12-13.06-44.72-21.57-75.79-21.57s-58.68,8.51-75.79,21.57'/><line class='cls-1' x1='100' y1='6' x2='100' y2='194'/></svg>";

const noteEmojis = [

    // Faces
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', 
    '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', 
    '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥳', '😏', 
    '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', 
    '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', 

    // Hearts
    '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', 

    // Symbols
    '⭐', '🔥', '💦', '🌀', '🌈', '💡', '🔔', '🎵', '💰', '📌',

    // Animals
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', 

    // Food
    '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', 
    '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥒',

    // Activities
    '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸'

];

const createEmojiList = () => {

    const emojiList = document.createElement("div");
    emojiList.classList.add("emoji-list", "container");

    const emojiListInner = document.createElement("div");
    emojiListInner.classList.add("emoji-list-inner");

    emojiListBtn.addEventListener("click", () => {
        emojiList.classList.toggle("open-emoji-list");
    });

    noteEmojis.forEach((emoji) => {

        const emojiItem = document.createElement("p");
        emojiItem.classList.add("emoji-item"); 
        emojiItem.innerHTML = emoji;

        emojiItem.addEventListener("click", () => {
            insertAtCursor(emoji);
            saveDataBtn();
        });
        
        emojiListInner.appendChild(emojiItem);

    });
   
    emojiList.appendChild(emojiListInner);
    emojiListBtn.appendChild(emojiList);

}

// Set focus after the last character
const setFocus = (element) => {

    element.focus();
  
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);
  
    const selection = window.getSelection();

    if (selection){
        selection.removeAllRanges();
        selection.addRange(range);
    }

}

// Set focus after the last character
const insertAtCursor = (text) => {

    let sel, range;

    if (window.getSelection){

        sel = window.getSelection();

        // Check if there is a selection
        if (sel.getRangeAt && sel.rangeCount){

            // Get the first range of the selection
            range = sel.getRangeAt(0);

            // Set the focus at the end of the notes area
            // If the cursor is not focused inside of it
            if (!noteFieldInput.contains(range.commonAncestorContainer)){
                setFocus(noteFieldInput);
                range = sel.getRangeAt(0);
            }

            // Delete any existing content inside the selection
            range.deleteContents();

            // Create a node with the element to insert
            const nodeElem = document.createElement("span");
            nodeElem.innerHTML = text;

            // Insert the node element
            range.insertNode(nodeElem);
            
            // Move the cursor after the inserted text
            range.setStartAfter(nodeElem);
            range.collapse(true);

            // Clear existing selections
            sel.removeAllRanges();

            // Select the new range
            sel.addRange(range);

        }

    }

}

// Note Elements
const noteField = document.querySelector(".mn-field-section");
const noteFieldInput = noteField.querySelector(".mn-text-field");
const noteFieldBtnsDiv = noteField.querySelector(".mn-list-btns");

const pageListBtn = document.querySelector(".dropdown-btn");
const deleteNoteBtn = document.querySelector(".mn-delete-btn");

const emojiListBtn = noteField.querySelector(".emoji-list-btn");
const randEmojiBtn = noteField.querySelector(".rand-emoji-btn");

const nrListBtn = noteField.querySelector(".nr-list-btn");
const bpListBtn = noteField.querySelector(".bp-list-btn");



    /* Insert Button Icons */

const insertButtonIcons = () => {
    pageListBtn.innerHTML = arrowIcon;
    deleteNoteBtn.innerHTML = deleteIcon;

    emojiListBtn.innerHTML = emojiListIcon;
    randEmojiBtn.innerHTML = randomDiceIcon;
    
    nrListBtn.innerHTML = numberListIcon;
    bpListBtn.innerHTML = bpListIcon;
}

insertButtonIcons();



    /* Note Textarea Buttons */

const noteFieldButtons = () => {

    if(!noteFieldInput){
        return;
    }

    noteFieldInput.innerHTML = "";

    // Create the emoji list
    createEmojiList();

    // Random Emoji
    randEmojiBtn.addEventListener("click", () => {

        // Random number - range 0 to the number of emojis -1
        // Cuz the array counts from 0
        const randNum = Math.floor(Math.random() * noteEmojis.length);
        const emoji = noteEmojis[randNum];

        insertAtCursor(emoji);
        saveDataBtn();

    });

    // List - Numbers
    nrListBtn.addEventListener("click", () => {

        // Get the text
        getData().then(data => {

            let currListNr = 1;
    
            // See what's the last number matching the "[number]." scheme
            const regex = /\d+\./g;

            let dataVal = "";

            if (data && data.mn_val){
                dataVal = data.mn_val;
            }

            const matches = dataVal.match(regex);

            // Check the highest number
            if (matches && matches.length > 0){

                // Initialize with the first number
                currListNr = parseInt(matches[0]);

                // Iterate over all matches to find the highest number
                for (let i = 1; i < matches.length; i++){
                    const number = parseInt(matches[i]);
                    if (number > currListNr) {
                        currListNr = number;
                    }
                }

                // Increment the highest number found by 1
                currListNr++;

            }
            
            // Set the next list number
            if (noteFieldInput.innerHTML != "") {
                insertAtCursor(`<br>${currListNr}.&nbsp;`);
            } else {
                insertAtCursor(`${currListNr}.&nbsp;`);
            }

            saveDataBtn();
    
        });

    });

    // List - Bullet Points
    bpListBtn.addEventListener("click", () => {

        if (noteFieldInput.innerHTML != "") {
            insertAtCursor(`<br>&#x2022;&nbsp;`);
        } else {
            insertAtCursor(`&#x2022;&nbsp;`);
        }

        saveDataBtn();
        
    });

}

noteFieldButtons();



    /* Local Storage - Get Data */

const getData = () => {

    return new Promise((resolve) => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

            // Current page URL
            const currURL = tabs[0].url;

            chrome.storage.sync.get("uveritNotesData", function(result){

                // Check if the uveritNotesData already exists
                if (result &&
                    result.uveritNotesData &&
                    result.uveritNotesData[currURL]
                ){
                    resolve(result.uveritNotesData[currURL]);
                } else {
                    resolve(null);
                }
                
            });

        });
    });

}



    /* Local Storage - Save Data */

// Save to the extension's storage
const saveData = (noteVal) => {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

        // Current page URL
        const currURL = tabs[0].url;

        // Current page title
        const currTitle = tabs[0].title;

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

    });

}

// Text Area Input
noteFieldInput.addEventListener("input", (e) => {
    const val = e.target.innerHTML;
    saveData(val);
});

// Text Area Button Click
const saveDataBtn = () => {
    const val = noteFieldInput.innerHTML;
    saveData(val);
}



    /* Popup Load */

const currPageTitle = document.querySelector(".current-page-title");

const popupLoad = () => {
    getData().then(data => {

        if (data){
            noteFieldInput.innerHTML = data.mn_val;
            currPageTitle.innerHTML = data.mn_title;
        } else {
            noteFieldInput.innerHTML = "";
            noteFieldInput.focus();

            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                currPageTitle.innerHTML = tabs[0].title;
            });
        }

    });
}

popupLoad();



    /* Title List */

const pageListInner = document.querySelector(".mn-page-list-inner");

const newTitleElem = (data, url) => {

    const page = data[url];

    const pageDiv = document.createElement("div");
    pageDiv.classList.add("page-item");

    const pageTitle = document.createElement("p");
    pageTitle.classList.add("page-title");
    pageTitle.innerHTML = page.mn_title;

    const pageUrlBtn = document.createElement("a");
    pageUrlBtn.classList.add("page-btn", "page-url", "svg-icon");
    pageUrlBtn.setAttribute("href", url);
    pageUrlBtn.setAttribute("target", "_blank");
    pageUrlBtn.innerHTML = pageUrlIcon;

    pageDiv.appendChild(pageTitle);
    pageDiv.appendChild(pageUrlBtn);
    pageListInner.appendChild(pageDiv);

}

const titleList = () => {

    chrome.storage.sync.get("uveritNotesData", function(result){

        if (result.uveritNotesData){

            const data = result.uveritNotesData;

            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

                // Current page URL
                const currURL = tabs[0].url;

                Object.keys(data).forEach((url) => {
                    if (url !== currURL){
                        newTitleElem(data, url);
                    }
                });

            });

        }

    });

}

titleList();

// Toggle the page list visibility
const pageList = document.querySelector(".mn-page-list");

pageListBtn.addEventListener("click", () => {
    pageList.classList.toggle("open-list");
});



    /* Delete Note */

const buttonErrorTime = 1000;   // in ms

deleteNoteBtn.addEventListener("click", () => {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

        // Current page URL
        const currURL = tabs[0].url;

        chrome.storage.sync.get("uveritNotesData", function(result){

            let data = result.uveritNotesData || {};
        
            // Check if the object for the specific URL exists
            if (data[currURL]){
                delete data[currURL];
                chrome.storage.sync.set({ "uveritNotesData": data });
                window.close();
            } else {
                deleteNoteBtn.classList.add("delete-error");
                setTimeout(() => {
                    deleteNoteBtn.classList.remove("delete-error");
                }, buttonErrorTime)
            }

        });

    });

});



    /* Delete All notes */

const deleteAllBtn = document.querySelector(".delete-all-btn");

deleteAllBtn.addEventListener("click", () => {

    chrome.storage.sync.get("uveritNotesData", function(result){
        
        if (result.uveritNotesData){
            const confirmation = confirm("Are you sure you want to delete all of your notes?\nYou will lose them forever on all your synced devices.");

            if (confirmation){
                chrome.storage.sync.remove("uveritNotesData");
                window.close();
            }
        } else {
            deleteAllBtn.classList.add("delete-error");
            setTimeout(() => {
                deleteAllBtn.classList.remove("delete-error");
            }, buttonErrorTime)
        }

    });

});

// Credits
console.log("|-+-|--> Magic Notes by Uverit <--|-+-|");