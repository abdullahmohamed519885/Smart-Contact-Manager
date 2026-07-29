let contact;
let contactImageInput;
let contactNameInput;
let contactNumberInput;
let contactEmailInput;
let contactAddressInput;
let contactGroupInput;
let contactNoteInput;
let contactFavoriteInput;
let contactEmergencyInput;
let firstLitterName;
let currentIndex = 0
let btnCloseButton = document.getElementById("sectionNewContactAdd")
let btnAddButton = document.getElementById("sectionNewContactAdd")
let searchContactInput = document.getElementById("searchInput")
let contactList = []
if (localStorage.getItem("allContact") !== null){
    contactList = JSON.parse(localStorage.getItem("allContact"))
}
displayContact()
function contactAddInputs(){
    return  `<section class="vh-100 modal-body z-2000">
                <div class="add-contact h-100 add-contact-card-bg position-fixed inset-0 backdrop-filter">
                    <div class="container h-100 px-0">
                        <div class="inner h-100 d-flex-center position-fixed inset-0 overflow-hidden p-16">
                            <div class="card max-width-512 max-height-90 overflow-scroll scrollbar-width rounded-px-20 bg-white w-100 h-100">
                                <div class="titel d-flex-between p-16 main-addContact-titel-border-bottom">
                                    <div class="text">
                                        <h3 id="textHeaderInput" class="text-capitalize ain-titel-color fs-20 fw-bold">add new contact</h3>
                                    </div>
                                    <button onclick="closeContactAddBotton()" id="btnCloseButton" class="width-px-36 height-px-36 rounded-px-8 d-flex-center main-addContact-card-icon-color main-addContact-card-icon-hover border-0 bg-white fs-14">
                                        <i class="fa-solid fa-x"></i>
                                    </button>
                                </div>
                                <div class="contact-info p-16">
                                    <div class="mb-20 photo d-flex-center flex-column">
                                        <div class="image-person width-px-96 height-px-96 d-flex-center text-white fs-30 header-card1-bg rounded-circle mb-20">
                                            <i class="fa-solid fa-user"></i>
                                        </div>
                                        <label for="image" class="mr-15 header-search-color fs-14 px-16 py-8 rounded-px-8 add-contact-botton-cancel-bg add-contact-input-file-bg-hover">
                                            <i class="fa-solid fa-camera main-p-color"></i>
                                            <span class="text-capitalize">change photo</span>
                                            <input type="file" class="d-none" id="image">
                                        </label>
                                    </div>
                                    <div class="mb-20 name">
                                        <label for="fName" class="text-capitalize fs-14 mb-6 ">full name <span class="add-contact-require-color fs-16">*</span></label>
                                        <input type="text" id="fName" class="p-12 fs-14 w-100 pl-15 rounded-px-12 header-search-color header-search-border" placeholder="Enter full name">
                                    </div>
                                    <div class="mb-20 number">
                                        <label for="number" class="text-capitalize fs-14 mb-6">phone number <span class="add-contact-require-color fs-16">*</span></label>
                                        <input type="tel" id="number" class="p-12 fs-14 w-100 pl-15 rounded-px-12 header-search-color header-search-border" placeholder="e.g., 01012345678">
                                    </div>
                                    <div class="mb-20 email">
                                        <label for="email" class="text-capitalize fs-14 mb-6">email address</label>
                                        <input type="email" id="email" class="p-12 fs-14 w-100 pl-15 rounded-px-12 header-search-color header-search-border" placeholder="name@example.com">
                                    </div>
                                    <div class="mb-20 address">
                                        <label for="address" class="text-capitalize fs-14 mb-6">address</label>
                                        <input type="text" id="address" class="p-12 fs-14 w-100 pl-15 rounded-px-12 header-search-color header-search-border" placeholder="Enter address">
                                    </div>
                                    <div class="mb-20 group">
                                        <label for="group" class="text-capitalize fs-14 mb-6">group</label>
                                        <select name="" id="group" class="p-12 fs-14 w-100 pl-15 rounded-px-12 header-search-color header-search-border">
                                            <option selected hidden value="">Select a group</option>
                                            <option value="Family">Family</option>
                                            <option value="Friends">Friends</option>
                                            <option value="Work">Work</option>
                                            <option value="School">School</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div class="mb-20 notes">
                                        <label for="note" class="text-capitalize fs-14 mb-6">Notes</label>
                                        <textarea name="" id="note" class="p-12 fs-14 w-100 pl-15 rounded-px-12 header-search-color header-search-border" placeholder="Add notes about this contact" ></textarea>
                                    </div>
                                    <div class="mb-40 check d-flex-start add-contact-check-text-color fs-14">
                                        <div class="favorite mr-15 d-flex-center">
                                            <input type="checkbox" id="favorite" class="width-px-20 height-px-20 mr-10 add-contact-checkbox-border rounded-px-4 input-none">
                                            <label for="favorite" class="add-contact-check-text-color-hover">
                                                <i class="fa-solid fa-star header-conact-bottom-card-icon2-color"></i>
                                                <span>Favorite</span>
                                            </label>
                                        </div>
                                        <div class="emergency d-flex-center">
                                            <input type="checkbox" id="emergency" class="width-px-20 height-px-20 mr-10 add-contact-checkbox-border rounded-px-4 input-none">
                                            <label for="emergency" class="add-contact-check-text-color-hover">
                                                <i class="fa-solid fa-heart-pulse add-contact-require-color"></i>
                                                <span>Emergency</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mb-20 button d-flex-around">
                                        <button onclick="closeContactAddBotton()" class="w-100 border-0 mr-15 header-search-color fs-14 px-20 py-12 add-contact-botton-cancel-bg rounded-px-12 add-contact-botton-cancel-bg-hover">Cancel</button>
                                        <button id="addContact" onclick="saveContact()" class="w-100 text-white border-0 px-20 py-12 rounded-px-12 fs-14 add-contact-botton-save-bg add-contact-botton-save-shadow-hover">
                                            <i class="fa-solid fa-check"></i>
                                            <span class="text-capitalize">save contact</span>
                                        </button>
                                        <button id="updateContact"  onclick="editContact()" class="w-100 d-none text-white border-0 px-20 py-12 rounded-px-12 fs-14 add-contact-botton-save-bg add-contact-botton-save-shadow-hover">
                                            <i class="fa-solid fa-check"></i>
                                            <span class="text-capitalize">save contact</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </section>`
}
function topCard (i){
    return `<div class="col-6 col-md-4">
                            <div class="inner">
                                <div class="card bg-white p-20 rounded-px-16 mb-15 d-flex-start header-card-shadow-hover flex-direction-row">
                                    <div class="icon width-px-50 height-px-50 rounded-px-12 d-flex-center text-white header-card1-bg header-card1-shadow mr-15">
                                        <i class="fa-solid fa-users"></i>
                                    </div>
                                    <div class="text">
                                        <p class="main-p-fs main-p-color text-uppercase mb-0">total</p>
                                        <span class="main-titel-fs main-titel-color mb-0">${contactList.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-4">
                            <div class="inner">
                                <div class="card bg-white p-20 rounded-px-16 mb-15 d-flex-start header-card-shadow-hover flex-direction-row">
                                    <div class="icon width-px-50 height-px-50 rounded-px-12 d-flex-center text-white header-card2-shadow header-card2-bg mr-15">
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div class="text">
                                        <p class="main-p-fs main-p-color text-uppercase mb-0">favorites</p>
                                        <span id="totalFavorite" class="main-titel-fs main-titel-color mb-0">${contactList.filter(contact => contact.favorite).length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-4">
                            <div class="inner">
                                <div class="card bg-white p-20 rounded-px-16 mb-15 d-flex-start header-card-shadow-hover flex-direction-row">
                                    <div class="icon width-px-50 height-px-50 rounded-px-12 d-flex-center text-white header-card3-shadow header-card3-bg mr-15">
                                        <i class="fa-solid fa-heart-pulse"></i>
                                    </div>
                                    <div class="text">
                                        <p class="main-p-fs main-p-color text-uppercase mb-0">emergency</p>
                                        <span id="totalEmergency" class="main-titel-fs main-titel-color mb-0">${contactList.filter(contact => contact.emergency).length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
}
function contactDataHtmlRowDataLeft(i){
    return `   
                                        <div class="col-12 col-md-6">
                                            <div class="inner">
                                                <div class="card height-px-280 bg-white p-20 rounded-px-16 mb-15 header-card-shadow-hover">
                                                    <div class="top-card mb-15 height-px-190">
                                                        <div class="contact-ifo d-flex-start mb-15">
                                                            <div id="icon-${i}" class="icon ${contactList[i].image.includes("<img") ? "" : "header-cotact-bg-icon"} position-relative text-white width-px-56 height-px-56 fs-8 mr-15 rounded-px-12">
                                                                <div id="contactImage-${i}" class="text-capitalize fs-18 width-px-56 height-px-56 rounded-px-12 fs-8 d-flex-center overflow-hidden">${contactList[i].image}</div> 
                                                                <div id="addFavoriteIcon-${i}" class="icon-in ${contactList[i].favorite ? "" : "d-none"} width-px-20 height-px-20 rounded-circle position-absolute top-0 right--3 header-cotact-shadow-icon d-flex-center header-cotact-bg-icon2">
                                                                    <i class="fa-solid fa-star"></i>
                                                                </div>
                                                                <div id="addEmergencyIcon-${i}" class="icon-in ${contactList[i].emergency ? "" : "d-none"} width-px-20 height-px-20 rounded-circle position-absolute bottom-0 right--3 header-cotact-shadow-icon d-flex-center header-cotact-bg-icon3">
                                                                    <i class="fa-solid fa-heart-pulse"></i>
                                                                </div>
                                                            </div>
                                                            <div class="name-number">
                                                                <h3 class="main-titel-color fs-16 fw-bold">${contactList[i].name}</h3>
                                                                <div class="call-number d-flex-start">
                                                                    <div class="icon d-flex-center width-px-24 height-px-24 rounded-px-6 header-name-number-icon-bg header-name-number-icon-color fs-9 mr-8">
                                                                        <i class="fa-solid fa-phone"></i>
                                                                    </div>
                                                                    <p class="main-p-fs main-p-color text-uppercase fs-14 mb-0">${contactList[i].number}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div  class="email ${contactList[i].email ? "" : "d-none"} d-flex-start mb-15" id="btnEmailInfo-${i}">
                                                            <div class="icon d-flex-center width-px-24 height-px-24 rounded-px-6 header-name-email-icon-bg header-name-email-icon-color fs-9 mr-8">
                                                                <i class="fa-solid fa-envelope"></i>
                                                            </div>
                                                            <p class="main-p-fs main-p-color text-uppercase fs-14 mb-0">${contactList[i].email}</p>
                                                        </div>
                                                        <div class="location ${contactList[i].address ? "" : "d-none"} d-flex-start mb-15" id="btnlocationButton-${i}">
                                                            <div class="icon d-flex-center width-px-24 height-px-24 rounded-px-6 header-name-location-icon-bg header-name-location-icon-color fs-9 mr-8">
                                                                <i class="fa-solid fa-location-dot"></i>
                                                            </div>
                                                            <p class="main-p-fs main-p-color text-uppercase fs-14 mb-0">${contactList[i].address}</p>
                                                        </div>
                                                        <div id="btnGroupButton-${i}" class="group  ${contactList[i].group ? "" : "d-none"} px-8 py-1 rounded-px-6 fs-11 header-conact-group-color header-conact-group-bg d-inline mr-10">
                                                            <span class="text-capitalize fw-bold">${contactList[i].group}</span>
                                                        </div>
                                                        <div id="addEmergencySpan-${i}" class="emergency ${contactList[i].emergency ? "" : "d-none"} px-8 py-1 rounded-px-6 fs-11 header-conact-emergancy-color header-conact-emergancy-bg d-inline">
                                                            <i class="fa-solid fa-heart-pulse"></i>
                                                            <span class="text-capitalize ">emergency</span>
                                                        </div>
                                                    </div>
                                                    <div class="bottom-card header-conact-bottom-card-bg header-conact-bottom-card-border-top pt-10">
                                                        <div class="icons d-flex-between">
                                                            <div class="right-icon d-flex-start">
                                                                <button class="phone-icon width-px-36 border-0 height-px-36 fs-12 rounded-px-8 d-flex-center header-conact-bottom-card-icon1-color header-conact-bottom-card-icon1-bg header-conact-bottom-card-icon1-bg-hover mr-15">
                                                                    <i class="fa-solid fa-phone"></i>
                                                                </button>
                                                                <button id="btnEmailButton-${i}" class="email-icon ${contactList[i].email ? "" : "d-none"} width-px-36 border-0 height-px-36 fs-12 rounded-px-8 d-flex-center header-name-email-icon-bg header-name-email-icon-color header-conact-bottom-card-email-bg-hover">
                                                                    <i class="fa-solid fa-envelope"></i>
                                                                </button>
                                                            </div>
                                                            <div class="left-icon d-flex-around">
                                                                <button onclick="addFavorite(${i})" id="addFavoriteButton-${i}" class="icon width-px-36 border-0 height-px-36 fs-12 mr-6 rounded-px-8 d-flex-center ${contactList[i].favorite ? 'header-conact-bottom-card-icon2-color header-conact-bottom-card-icon2-bg header-conact-bottom-card-icon2-bg-hover' : 'main-addContact-card-icon-color header-conact-bottom-card-icon4-bg header-conact-bottom-card-icon2-colorAndBg-hover'}">
                                                                    <span id="iconStar-${i}"><i class="fa-${contactList[i].favorite ? "solid" : "regular"} fa-star"></i></span>
                                                                </button>
                                                                <button onclick="addEmergency(${i})" id="addEmergencyButton-${i}" class="icon width-px-36 border-0 height-px-36 fs-12 mr-6 rounded-px-8 d-flex-center ${contactList[i].emergency ? 'header-conact-bottom-card-icon3-color header-conact-bottom-card-icon3-bg header-conact-bottom-card-icon3-bg-hover' : 'main-addContact-card-icon-color header-conact-bottom-card-icon4-bg header-conact-bottom-card-icon3-colorAndBg-hover'}">
                                                                    <span id="iconEmergancy-${i}"><i class="fa-${contactList[i].emergency ? 'solid' : 'regular'} fa-${contactList[i].emergency ? 'heart-pulse' : 'heart'}"></i></span>
                                                                </button>
                                                                <button onclick="setDataInInput (${i})" class="icon width-px-36 border-0 height-px-36 fs-12 mr-6 rounded-px-8 d-flex-center header-conact-bottom-card-icon4-color header-conact-bottom-card-icon4-bg header-conact-bottom-card-icon4-bg-hover header-conact-bottom-card-icon4-color-hover">
                                                                    <i class="fa-solid fa-pen"></i>
                                                                </button>
                                                                <button onclick="deleteContact(${i})" class="icon width-px-36 border-0 height-px-36 fs-12 mr-6 rounded-px-8 d-flex-center header-conact-bottom-card-icon4-color header-conact-bottom-card-icon4-bg header-conact-bottom-card-icon5-bg-hover header-conact-bottom-card-icon5-color-hover">
                                                                    <i class="fa-solid fa-trash"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    `
}
function contactDataHtmlCardFavorite(i){
    return `
                                                <div class="col-12 col-md-6">
                                                    <div class="inner">
                                                        <div class="card-1 flex-direction-row d-flex-between p-10 rounded-px-12 header-conact-bottom-card-icon4-bg header-favorites-card-hover mb-15">
                                                            <div class="icon d-flex-between">
                                                                <div id="iconFavorite-${i}" class="favoriteSelect icon position-relative ${contactList[i].image.includes('<img') ? "" : "header-cotact-bg-icon"} text-white width-px-40 height-px-40 fs-8 mr-15 rounded-px-12">
                                                                    <div id="contactImageFavorite-${i}" class="text-capitalize fs-18 width-px-40 height-px-40 rounded-px-12 fs-8 d-flex-center overflow-hidden">${contactList[i].image}</div> 
                                                                </div>
                                                                <div class="call-number">
                                                                    <h3 class="main-titel-color fs-14 mb-0">${contactList[i].name}</h3>
                                                                    <p class="main-p-fs main-p-color text-uppercase fs-12 mb-0">${contactList[i].number}</p>
                                                                </div>
                                                            </div>
                                                            <div class="icon d-flex-center width-px-32 height-px-32 rounded-px-8 fs-12 mr-8 header-conact-card-icon-favorite-bg header-conact-card-icon-favorite-color header-conact-card-icon-favorite-bg-hover">
                                                                <i class="fa-solid fa-phone"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    `
}
function contactDataHtmlCardEmergency(i){
    return `
                                        <div class="col-12 col-md-6">
                                            <div class="inner">
                                                <div class="card-1 flex-direction-row d-flex-between p-10 rounded-px-12 header-conact-bottom-card-icon4-bg header-emergency-card-hover mb-15">
                                                    <div class="icon d-flex-between">
                                                        <div id="iconEmergency-${i}" class="icon position-relative ${contactList[i].image.includes('<img') ? "" : "header-cotact-bg-icon"} text-white width-px-40 height-px-40 fs-8 mr-15 rounded-px-12">
                                                            <div id="contactImageEmergency-${i}" class="text-capitalize fs-18 width-px-40 height-px-40 rounded-px-12 fs-8 d-flex-center overflow-hidden">${contactList[i].image}</div> 
                                                        </div>
                                                        <div class="call-number">
                                                            <h3 class="main-titel-color fs-14 mb-0">${contactList[i].name}</h3>
                                                            <p class="main-p-fs main-p-color text-uppercase fs-12 mb-0">${contactList[i].number}</p>
                                                        </div>
                                                    </div>
                                                    <div class="icon d-flex-center width-px-32 height-px-32 rounded-px-8 fs-12 mr-8 header-conact-card-icon-emergency-bg header-conact-emergancy-color header-conact-card-icon-emergency-bg-hover">
                                                        <i class="fa-solid fa-phone"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    `
}
function contactObject(){
    contact = {
        image : contactImageInput.files[0] ? `<img class="w-100 h-100 rounded-px-11" src="./images/${contactImageInput.files[0].name}" alt="${contactImageInput.files[0].name}">` : `${firstLitterName}` ,
        name : contactNameInput.value ,
        number : contactNumberInput.value ,
        email : contactEmailInput.value ,
        address : contactAddressInput.value,
        group : contactGroupInput.value,
        note : contactNoteInput.value ,
        favorite : contactFavoriteInput.checked,
        emergency : contactEmergencyInput.checked 
    }
}
function initContactInputs(){
    contactImageInput = document.getElementById("image")
    contactNameInput = document.getElementById("fName")
    contactNumberInput = document.getElementById("number")
    contactEmailInput = document.getElementById("email")
    contactAddressInput = document.getElementById("address")
    contactGroupInput = document.getElementById("group")
    contactNoteInput = document.getElementById("note")
    contactFavoriteInput = document.getElementById("favorite")
    contactEmergencyInput = document.getElementById("emergency")
    firstLitterName = contactNameInput.value.charAt(0)
}
function localStorageSave(){
    localStorage.setItem("allContact" , JSON.stringify(contactList))
}
function validateName() {
    let name = contactNameInput.value.trim();
    let regex = /^[A-Za-z\u0600-\u06FF ]{3,}$/;
    return regex.test(name);
}
function validatePhone() {
    let phone = contactNumberInput.value.trim();
    let regex = /^01[0125][0-9]{8}$/;
    return regex.test(phone);
}
function saveContact(i){
    initContactInputs()
    if (!validateName()) {
        alert("Name must contain at least 3 letters.");
        return;
    }
    if (!validatePhone()) {
        alert("Please enter a valid Egyptian phone number.\nIt must start with 010, 011, 012, or 015 and contain 11 digits.");
        return;
    }
    contactObject()
    contactList.push(contact)
    localStorageSave()
    clearForm()
    closeContactAddBotton()
    displayContact()
}
function displayContact(i){
    let rowDataLeft =""
    let rowTopCard = ""
    rowTopCard += topCard()
    for(let i =0 ; i< contactList.length ; i++){
        rowDataLeft += contactDataHtmlRowDataLeft(i)
    }
    if (rowDataLeft === ""){
        rowDataLeft = `
        <div class="no-contact-found mt-80 mb-80">
            <div class="icon width-px-80 height-px-80 rounded-px-16 d-flex-center add-contact-botton-cancel-bg mb-16 mx-auto">
                <i class="fa-solid fa-address-book fs-30 no-contact-found-color"></i>
            </div>
            <p class="text-center fs-14 main-addContact-card-icon-color fw-bold">No contacts found</p>
            <p class="text-center fs-14 main-addContact-card-icon-color">Click "Add Contact" to get started</p>
        </div>
        `
    }
    document.getElementById("rowDataLeft").innerHTML = rowDataLeft
    document.getElementById("rowTopCard").innerHTML = rowTopCard
    favoriteCard()
    emergancyCard()
}
function contactAddBotton(){
    let data = ""
    data += contactAddInputs()
    document.getElementById("sectionNewContactAdd").innerHTML = data
    btnAddButton.classList.remove("d-none")
}
function closeContactAddBotton(){
btnCloseButton.classList.add("d-none")
}
function clearForm(i){
    initContactInputs()
    contactImageInput.files = null
    contactNameInput.value = null
    contactNumberInput.value = null
    contactEmailInput.value = null
    contactAddressInput.value = null
    contactGroupInput.value = null
    contactNoteInput.value = null
    contactFavoriteInput.value = null
    contactEmergencyInput.value = null

}
function addFavorite(i){
    contactList[i].favorite = !contactList[i].favorite;
    localStorageSave()
    displayContact()
}
function addEmergency(i){
    contactList[i].emergency = !contactList[i].emergency;
    localStorageSave()
    displayContact()
}
function deleteContact(i){
    contactList.splice(i , 1)
    localStorageSave()
    displayContact()
}
function setDataInInput (i){
    currentIndex = i
    contactAddBotton()
    initContactInputs()
    contactImageInput.files[0] = contactList[i].image
    contactNameInput.value = contactList[i].name
    contactNumberInput.value = contactList[i].number
    contactEmailInput.value = contactList[i].email
    contactAddressInput.value = contactList[i].address
    contactGroupInput.value = contactList[i].group
    contactNoteInput.value = contactList[i].note
    contactFavoriteInput.checked = contactList[i].favorite
    contactEmergencyInput.checked = contactList[i].emergency
    let addContact = document.getElementById("addContact")
    let updateContact = document.getElementById("updateContact")
    let textHeaderInput = document.getElementById("textHeaderInput")
    updateContact.classList.remove("d-none")
    addContact.classList.add("d-none")
    textHeaderInput.innerHTML = "Edit Contact"
}
function editContact(){
    initContactInputs()
    contactObject()
    contactList.splice(currentIndex , 1 , contact)
    localStorageSave()
    clearForm()
    closeContactAddBotton()
    displayContact()
}
function searchContact(i){
    let search = searchContactInput.value
    let data = ""
    for(let i = 0 ; i < contactList.length ; i++){
        if (contactList[i].name.toLowerCase().includes(search.toLowerCase()) || contactList[i].number.toLowerCase().includes(search.toLowerCase()) || contactList[i].email.toLowerCase().includes(search.toLowerCase()) === true ){
            data += contactDataHtmlRowDataLeft(i)
        }
    }
    document.getElementById("rowDataLeft").innerHTML = data
}
function favoriteCard(i){
    let favoriteSelect = ""
    for(let i = 0 ; i < contactList.length; i++){
        if(contactList[i].favorite === true){
        favoriteSelect += contactDataHtmlCardFavorite(i)
            }
        }   
    if (favoriteSelect === ""){
        favoriteSelect = `<p class="text-center fs-14 main-addContact-card-icon-color">No favorites yet</p>`
    }
    document.getElementById("cardFavorite").innerHTML = favoriteSelect
}
function emergancyCard(i){
    let emergancySelect = ""
    for(let i = 0 ; i < contactList.length; i++){
        if(contactList[i].emergency === true){
        emergancySelect += contactDataHtmlCardFavorite(i)
            }
        }
    if (emergancySelect === ""){
        emergancySelect = `<p class="text-center fs-14 main-addContact-card-icon-color">No emergency contacts</p>`
    }
    document.getElementById("cardEmergency").innerHTML = emergancySelect
}




