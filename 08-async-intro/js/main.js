fetch('/data/test.txt').then((res) => {
    if (res.ok) {
        return res.text();
    } else {
        throw Error(`Failed to fetch: ${res.status} - ${res.statusText}`);
    }
}).then((text) => {
    document
        .querySelector('.text-output')
        .innerText = text;
});

fetch('/data/people.json').then((res) => {
    if (res.ok) {
        return res.json();
    } else {
        throw Error(`Failed to fetch: ${res.status} - ${res.statusText}`);
    }
}).then((people) => {
    people.forEach((person) => {
        document
            .querySelector('.json-output')
            .innerHTML += `<p>${person.firstName}</p>`;
    });
});
