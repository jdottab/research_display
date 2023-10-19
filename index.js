const search_result = document.querySelector('#search')
const sites = document.querySelectorAll('.col2')
const id = document.querySelectorAll('.col1')
const rows = document.querySelectorAll('.info')
const filter = document.querySelector('#filter')
const table = document.querySelector('table')
const sections = document.querySelectorAll('.tables')
const selectors = document.querySelectorAll('.tbl-option')


let match
//regex match
//turns search result into regex
//returns a regex object
function GenRegEx(){
    let temp1 = "[a-zA-Z]*" + document.querySelector('#search').value + "."
    match = new RegExp(temp1)
    return match
}

//search function
//checks if regex pattern matches title
//displays matches and hides non-matches
function Search(){
    for(let i = 0; i < sites.length; i++){
        if(GenRegEx().test(sites[i].children[0].innerHTML)){
            sites[i].parentElement.style.display = 'table-row'
        }
        else{
            sites[i].parentElement.style.display = 'none'
        }
    }
    search_result.value = ''
}

//sort
//if value == 'name' websites appear in alphabetical order
//if value == 'id' items appear in numerical order
/* function SortID(){
    for(let i = 0; i < id.length; i++){
        if(id[i + 1] != undefined){
            if(id[i+1].innerHTML < id[i].innerHTML){
                //switch
                id[i + 1].parentElement.insertBefore(id[i].parentElement, id[i + 1].parentElement)
            }
            else{
                break;
            }
        }
    }
} */
function SortID() {
    const elements = Array.from(id);
  
    // Bubble Sort Algorithm
    for (let i = 0; i < elements.length; i++) {
      let swapped = false;
  
      for (let j = 0; j < elements.length - 1 - i; j++) {
        const currentNumber = parseInt(elements[j].innerHTML);
        const nextNumber = parseInt(elements[j + 1].innerHTML);
  
        if (currentNumber > nextNumber) {
          elements[j + 1].parentElement.insertBefore(elements[j], elements[j + 1]);
          swapped = true;
        }
      }
  
      // If no swaps occurred in the inner loop, the array is already sorted
      if (!swapped) {
        break;
      }
    }
  }
  

function SortName() {
    // Convert NodeList to Array for easier sorting
    const sitesArray = Array.from(sites);
  
    // Sort the array based on the content of the first column
    sitesArray.sort((a, b) => {
      const textA = a.children[0].innerHTML.toLowerCase();
      const textB = b.children[0].innerHTML.toLowerCase();
  
      if (textA < textB) {
        return -1;
      }
      if (textA > textB) {
        return 1;
      }
      return 0;
    });
  
    // Reinsert the sorted elements back into the parent node
    const parent = sites[0].parentNode.parentNode;
    sitesArray.forEach((site) => {
      parent.appendChild(site.parentNode);
    });
  }
  

function Sort(){
    if(filter.value == 'name'){
        SortName();
    }
    else if(filter.value == 'id'){
        location.reload()
    }
}

/* //open table
function OpenTable(){
  //remove current
  current.classList.remove('current')
  for(let i = 0; i < sections.length; i++){
    if(this.id == sections[i].classList[1]){
      sections[i].classList.add('.current')
    }
  }
  console.log('click')
} */

selectors.forEach(e =>{
  e.addEventListener('click', function(){
    let current = document.querySelector('.current')
    current.classList.remove('current')
    for(let i = 0; i < sections.length; i++){
      if(this.id == sections[i].classList[1]){
        sections[i].classList.add('current')
      }
    }
    console.log('click')
  })
})