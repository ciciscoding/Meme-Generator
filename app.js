const form = document.querySelector('#memeform');
let topInput = document.querySelector('input[name="toptxt"]');
let bottomInput = document.querySelector('input[name="bottomtxt"]');
const section = document.querySelector('section');


document.addEventListener('click', function(e) {
    
    if(hasClass(e.target, 'delete')) {
        
        e.target.parentElement.remove();
    };
}, false);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTop = makeTopText(
    );
    const newBottom = makeBottomText(
    );
    const newMeme = makeMeme(
    );
    const newBtn = makeButton(
    );
    const newDiv = makeContainer(
    );

    newDiv.append(newTop, newMeme, newBottom, newBtn);
    results.append(newDiv);
    form.reset();
});

function makeTopText() {
    let topMsg = document.getElementById('toptext').value;
    let top = document.createElement('div');

    top.innerText = topMsg;
    if(top.classList.contains("top") !== true ) {
        top.classList.add("top")
    };
    return top;
};
function makeBottomText() {
    let bottomMsg = document.getElementById('bottomtext').value;
    let bottom = document.createElement('div');

    bottom.innerText = bottomMsg;
    if(bottom.classList.contains("bottom") !== true ) {
        bottom.classList.add("bottom")
    };
    return bottom;
};
function makeMeme() {
    let meme = document.createElement('img');
    let imgInput = document.querySelector('input[name="memeimage"]');
    
    meme.setAttribute("src", imgInput.value);

    return meme;
};
function makeButton() {
    let removeBtn = document.createElement('button');
    
    removeBtn.innerText = 'X';
    removeBtn.classList.add("delete");

    return removeBtn;
};

function makeContainer() {
    let delDiv = document.createElement('div');
    delDiv.classList.add("remove");
    
    return delDiv;
}

function hasClass(elem, className) {
    return elem.classList.contains(className);
};