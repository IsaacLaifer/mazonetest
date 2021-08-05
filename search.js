const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `127.0.0.1:5500/${urlinfo}.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
          
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); 
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
         
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active");
    }
}
function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;

    switch(selectData){
        case'Formation Anglais':
        var urlInfo = `formationAnglais`
        var done = 'oui'
        break;
        case'Formation Français':
        var urlInfo = `formationFrançais`
        var done = 'oui'
        break;
        case'Formation Espagnol':
        var urlInfo = `formationEspagnol`
        var done = 'oui'
        break;
        case'Formation Excel':
        var urlInfo = `formationExcel`
        var done = 'oui'
        break;
        case'Formation Word':
        var urlInfo = `formationWord`
        var done = 'oui'
        break;
        case'Formation Powerpoint':
        var urlInfo = `formationPowerpoint`
        var done = 'oui'
        break;
        case'Formation Informatique':
        var urlInfo = `formationInformatique`
        var done = 'oui'
        break;
        case'Formation Bureautique':
        var urlInfo = `formationBureautique`
        var done = 'oui'
        break;
        case'Formation InDesign':
        var urlInfo = `formationIndesign`
        var done = 'oui'
        break;
        case'Formation Photoshop':
        var urlInfo = `formationPhotoshop`
        var done = 'oui'
        break;
        case'Formation Illustrator':
        var urlInfo = `formationIllustrator`
        var done = 'oui'
        break;
        case'Formation PAO':
        var urlInfo = `formationPAO`
        var done = 'oui'
        break;
        case'Formation Secrétariat':
        var urlInfo = `formationSecrétariat`
        var done = 'oui'
        break;
        case'Formation Comptabilité':
        var urlInfo = `formationComptabilité`
        var done = 'oui'
        break;
        case'Formation Hygiène Alimentaire':
        var urlInfo = `formationHACCP`
        var done = 'oui'
        break;
        case'Anglais':
        var urlInfo = `formationAnglais`
        var done = 'oui'
        break;
        case'Français':
        var urlInfo = `formationFrançais`
        var done = 'oui'
        break;
        case'Espagnol':
        var urlInfo = `formationEspagnol`
        var done = 'oui'
        break;
        case'Allemand':
        var urlInfo = `formationAllemand`
        var done = 'oui'
        break;
        case'Excel':
        var urlInfo = `formationExcel`
        var done = 'oui'
        break;
        case'Word':
        var urlInfo = `formationWord`
        var done = 'oui'
        break;
        case'Powerpoint':
        var urlInfo = `formationPowerpoint`
        var done = 'oui'
        break;
        case'Informatique':
        var urlInfo = `formationInformatique`
        var done = 'oui'
        break;
        case'Bureautique':
        var urlInfo = `formationBureautique`
        var done = 'oui'
        break;
        case'InDesign':
        var urlInfo = `formationIndesign`
        var done = 'oui'
        break;
        case'Photoshop':
        var urlInfo = `formationPhotoshop`
        var done = 'oui'
        break;
        case'Illustrator':
        var urlInfo = `formationIllustrator`
        var done = 'oui'
        break;
        case'PAO':
        var urlInfo = `formationPAO`
        var done = 'oui'
        break;
        case'Secrétariat':
        var urlInfo = `formationSecrétariat`
        var done = 'oui'
        break;
        case'Comptabilité':
        var urlInfo = `formationComptabilité`
        var done = 'oui'
        break;
        case'Hygiène Alimentaire':
        var urlInfo = `formationHACCP`
        var done = 'oui'
        break;
        case'Hygiène':
        var urlInfo = `formationHACCP`
        var done = 'oui'
        break;
        case'Alimentaire':
        var urlInfo = `formationHACCP`
        var done = 'oui'
        break;
        case'HACCP':
        var urlInfo = `formationHACCP`
        var done = 'oui'
        break;

    }
    if (done != 'oui'){
        urlInfo=`#`
    }
    icon.onclick = ()=>{
        webLink = `${urlInfo}.html`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
