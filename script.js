function addHero() {
    const heroInput = document.getElementById('hero');
    const atributInput = document.getElementById('atribut');
    const LineInput = document.getElementById('Line');

    const hero = heroInput.value.trim();
    const atribut = atributInput.value.trim(); 
    const Line = LineInput.value.trim();
    const hera = {
        hero: hero,
        atribut: atribut,

        Line: Line,
        displayInfo: function () {
            return ` Герой ${this.hero}, Атрибут ${this.atribut}, Линия ${this.Line}.`;
        }
    };
    hers.push(hera);
    updateHeroList();
    heroInput.value = '';
    atributInput.value = '';
    LineInput.value = '';
}

function updateHeroList() {
    const heraList = document.getElementById('hero-list');
    heraList.innerHTML = '';
    hers.forEach((hera, index) => {
        const li = document.createElement('li');
        li.classList.add('hera-item');
        li.textContent = hera.displayInfo();

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.onclick = function() {
            editHer(index);
        };
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function() {
            deleteHer(index);
        };
        li.appendChild(deleteButton);

        heraList.appendChild(li);
    });
}

function editHer(index) {
    const hera = hers[index];
    const newBrand = prompt('Введите нового героя', hera.hero);
    const newModel = prompt('Введите новый атрибут', hera.atribut);
    const newColor = prompt('Введите новую линию:', hera.Line);

    hera.hero = newBrand;
    hera.atribut = newModel;
    hera.Line = newColor;

    updateHeroList();
}

function deleteHer(index) {
    hers.splice(index, 1);
    updateHeroList();
}
let hers = [];