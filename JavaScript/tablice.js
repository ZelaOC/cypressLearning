//tablice

//

const firstTable = ['Adam','Michal','Marcin', 'Belzebub', 'Jan', 'Alicja', 'Izabela'];

// 1. Weryfikacja dlugosci tabeli
console.log(firstTable.length)

// 2. Dostęp do wybranego elementu tablicy
console.log(firstTable[2])

// 3. Napisywanie danego elementu w tablicy

firstTable[1] = 'Andrzej';
console.log(firstTable);

// 4. Dodawanie elementu do tablicyu

firstTable.push('Julka');
console.log(firstTable);

// 5. Usuwanie elementu z konca tablicy

firstTable.pop();
console.log(firstTable);

// 6. Usuwanie elementu z poczatku tablicy

firstTable.shift();
console.log(firstTable);

// 7. Dodawanie elementu na poczatku tablicy

firstTable.unshift('Kryspin');
console.log(firstTable);

// 8. Usuwanie wskazanego elementu tablicy

const searchIndex = firstTable.indexOf('Andrzej');
firstTable.splice(searchIndex, 1) // podajemy ktory element chcemy usunac, oraz liczbe ile elementow na prawo od niego chcemy usunac
console.log(firstTable);

// 9. Przkształcenie tablicy na zmienna string

const stringTable = firstTable.join(";");
console.log(stringTable);

// 10. Przekszatałcenie tablicy (odwrócenie wartości)

firstTable.reverse();
console.log(firstTable);

// 11. Sortowanie tablicy

firstTable.sort();
console.log(firstTable);

// 12. Mapowanie elementow tablicy

firstTable.map(name => {
    if(name.length <= 6){
        console.log("Name of " + name + " have a 6 or less characters")
    } else {
        console.log("Name of " + name + " have a 7 or more characters")
    }
})

const secondTable = ['Uwu', 'Awa', 'Avalogy'];

// 13. Łączenie tablic

const mergedTable = firstTable.concat(secondTable);
console.log(mergedTable);