let count = 0
let countEl = document.getElementById("count-el")
function increment(){
    count += 1;
    countEl.textContent = count
}
let saveEl = document.getElementById("saved")
function save(){
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0

}