// I'm a backend developer and I'm not proud of this don't judge

function tag() {
    const tagForm = document.getElementById('tagForm');
    tagForm.style.display = "block";
}

function tagCheck() {
    const currentTags = document.getElementById('tags').value;

    const tagContainer = document.getElementById('tagContainer');
    tagContainer.innerHTML = "";

    const tagsInArray = currentTags.split(" ");
    for (i=1; i<tagsInArray.length; i++) {
        let cTag = tagsInArray[i];
        tagContainer.innerHTML = tagContainer.innerHTML + "\
        <button class='tag-btn' onclick='delTag("+i+")' type='button'>@"+ cTag +"&times;</button>";
    }
}

function delTag(id) {
    const currentTags = document.getElementById('tags').value;
    const tagsInArray = currentTags.split(" ");

    const ret =  tagsInArray
    .slice(0, id)
    .concat(tagsInArray
        .slice(id+1, tagsInArray.length))
        

    document.getElementById('tags').value = ret.join(" ")
    tagCheck();
}

function tagFormSubmit() {
    const currentTags = document.getElementById('tags').value;
    const name = document.getElementById('tagFormName').value;
    if (name.length > 20) {
        alert("Must be less than 20 chars");
        return;
    }
    document.getElementById('tags').value = currentTags + " " + name;

    tagCheck();
    name = document.getElementById('tagFormName').value = "";
    return false;
}


function ingridiantCall() {
    const ingridiantForm = document.getElementById('ingridiantForm');
    ingridiantForm.style.display = "block";
}

function ingridiantCheck() {
    const currentingridiants = document.getElementById('ingridiants').value;

    const ingridiantContainer = document.getElementById('ingridiantContainer');
    ingridiantContainer.innerHTML = "";

    const ingridiantsInArray = currentingridiants.split(" ");
    for (i=1; i<ingridiantsInArray.length; i++) {
        let cingridiant = ingridiantsInArray[i];
        ingridiantContainer.innerHTML = ingridiantContainer.innerHTML + "\
        <button class='tag-btn' onclick='delIngridiant("+i+")' type='button'>@"+ cingridiant +"&times;</button>";
    }
}

function delIngridiant(id) {
    const currentingridiants = document.getElementById('ingridiants').value;
    const ingridiantsInArray = currentingridiants.split(" ");

    const ret =  ingridiantsInArray
    .slice(0, id)
    .concat(ingridiantsInArray
        .slice(id+1, ingridiantsInArray.length))
        

    document.getElementById('ingridiants').value = ret.join(" ")
    ingridiantCheck();
}

function ingridantFormSubmit() {
    const currentingridiants = document.getElementById('ingridiants').value;
    const name = document.getElementById('ingridiantFormName').value;
    if (name.length >= 50) {
        alert("Must be less than 50 chars");
        return;
    }
    document.getElementById('ingridiants').value = currentingridiants + " " + name;
    ingridiantCheck();

    document.getElementById('ingridiantFormName').value = "";

    return false;
}





class Dish {
    constructor(id) {
        this.id = id;
    }

    tags=[]
    ingridiant=[]
}

const dishes = []
function tagCheckChange(id) {
    const currentTags = document.getElementById('tags-'+ id).value;

    const tagContainer = document.getElementById('tagContainer-'+id);
    tagContainer.innerHTML = "";

    const tagsInArray = currentTags.split(" ");
    for (i=1; i<tagsInArray.length; i++) {
        let cTag = tagsInArray[i];
        tagContainer.innerHTML = tagContainer.innerHTML + "\
        <button class='tag-btn' onclick='delTagChange("+id+", "+i+")' type='button'>@"+ cTag +"&times;</button>";
    }
}

function delTagChange(id, i) {
    const currentTags = document.getElementById('tags-'+id).value;
    const tagsInArray = currentTags.split(" ");

    const ret =  tagsInArray
    .slice(0, i)
    .concat(tagsInArray
        .slice(i+1, tagsInArray.length))
        

    document.getElementById('tags-'+id).value = ret.join(" ")
    tagCheckChange(id);
}

function addTagDish(id, name) {
    
    flag = false;
    for (i=0; i<dishes.length; i++) {
        if (dishes[i].id == id) {
            flag = true;
            var cDish = dishes[i];
            break;
        }
    }

    if (!flag) {
        var cDish = new Dish(id);
    }

    cDish.tags.push(name);

    let currentTags = document.getElementById('tags-'+ id).value;
    document.getElementById('tags-'+id).value = currentTags + " " + name;

    tagCheckChange(id)
    
}

function ingridiantCheckChange(id) {
    const currentTags = document.getElementById('ingridiants-'+ id).value;

    const tagContainer = document.getElementById('ingridiantContainer-'+id);
    tagContainer.innerHTML = "";

    const tagsInArray = currentTags.split(" ");
    for (i=1; i<tagsInArray.length; i++) {
        let cTag = tagsInArray[i];
        tagContainer.innerHTML = tagContainer.innerHTML + "\
        <button class='tag-btn' onclick='delInChange("+id+", "+i+")' type='button'>@"+ cTag +"&times;</button>";
    }
}

function delInChange(id, i) {
    const currentingridiants = document.getElementById('ingridiants-'+id).value;
    const ingridiantsInArray = currentingridiants.split(" ");

    const ret =  ingridiantsInArray
    .slice(0, i)
    .concat(ingridiantsInArray
        .slice(i+1, ingridiantsInArray.length))
        

    document.getElementById('ingridiants-'+id).value = ret.join(" ")
    ingridiantCheckChange(id);
}

function addIngridiantDish(id, name) {
    
    flag = false;
    for (i=0; i<dishes.length; i++) {
        if (dishes[i].id == id) {
            flag = true;
            var cDish = dishes[i];
            break;
        }
    }

    if (!flag) {
        var cDish = new Dish(id);
    }

    cDish.ingridiant.push(name);
    
    let currentTags = document.getElementById('ingridiants-'+ id).value;
    document.getElementById('ingridiants-'+id).value = currentTags + " " + name;

    ingridiantCheckChange(id)
}

function redirect(path) {
    window.location = path;
}

/*
To any frontend developer reading this on github or otherwise... I'm sorry
I'm sorry you had to see this code and I have already put spaghetty sauce on my computer.
Once again... I'm sorry.
*/