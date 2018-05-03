var books = []

function getBooks() {
    var imgs = document.getElementsByClassName("img")
    var titles = document.getElementsByClassName("title")
    var authors = document.getElementsByClassName("author")
    var dates = document.getElementsByClassName("date")
    var rates = document.getElementsByClassName("rate")
    for (var i = 0; i < imgs.length; i++) {
        books.push({
        
        title: titles[i].innerHTML,
        date_published: dates[i].innerHTML,
        author: authors[i].innerHTML,
        rate: rates[i].innerHTML,
        img: imgs[i].src
    })
    }
}


function createBookItem(bookObj) {
    var lists = document.getElementById("listOfBooks");
    var liElem = document.createElement('li')


    var img = document.createElement('img')
    img.src = bookObj.img;
    liElem.appendChild(img);

    var BTitle = document.createElement("p")
    var Ttext = document.createTextNode(bookObj.title)
    BTitle.appendChild(Ttext)
    liElem.appendChild(BTitle)

    var author = document.createElement("p")
    var atext = document.createTextNode(bookObj.author)
    author.appendChild(atext)
    liElem.appendChild(author)

    var date = document.createElement("p")
    var dtext = document.createTextNode("Year of publish: "+bookObj.date_published)
    date.appendChild(dtext)
    liElem.appendChild(date);

    var rev = document.createElement("p")
    var rtext = document.createTextNode("Rate: "+bookObj.rate)
    rev.appendChild(rtext)
    liElem.appendChild(rev)


    return liElem
}


function sortByTitle() {
    books.sort(function (a, b) {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
        return 0;

    })

}

function sortByRate() {
    books.sort(function (a, b) {

        return b.rate - a.rate;
    })

}

function sortByAuthor() {
    books.sort(function (a, b) {
        var x = a.author.toLowerCase();
        var y = b.author.toLowerCase();
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
        return 0;

    })

}

function sortByDate() {
    books.sort(function (a, b) {
        return b.date_published - a.date_published;
    })

}



function upDateDOM() {
    var ulBooks = document.getElementById('listOfBooks')
    ulBooks.innerHTML = ''
    var item;
    for (item of books) {
        ulBooks.appendChild(createBookItem(item))
    }
}

// Sort by, select event
var select = document.getElementById("sort")
select.onchange = function () {
    if (select.value === 'byTitle') {
        sortByTitle();
        upDateDOM();
    } else if (select.value === 'byAuthor') {
        sortByAuthor();
        upDateDOM()
    } else if (select.value === 'byRate') {
        sortByRate()
        upDateDOM()
    } else if (select.value === 'byDate') {
        sortByDate()
        upDateDOM()
    }
}
getBooks();
