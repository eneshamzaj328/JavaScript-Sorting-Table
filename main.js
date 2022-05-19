// Companies
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


// Sort Buttons
const companiesContainer = document.getElementById('sort-companies');
const companiesNameBtn = document.getElementById('sort__names');
const companiesStartYearBtn = document.getElementById('sort__start-years');
const companiesEndYearBtn = document.getElementById('sort__end-years');


let order = false;
let showCompanies = '';
const companiesSorting = (companies) => {
    showCompanies = companies
        .map((company, index) => `
        <tr>
            <th>${++index}</th>
            <td><strong>${company.name}</strong></td>
            <td>${company.start}</td>
            <td>${company.end}</td>
        </tr>
        `)
        .sort((a, b) => {
            const x = a.name, y = b.name;

            if (order) {
                companiesNameBtn.innerText = 'ASC';
                return x > y ? 1 : -1;
            } else {
                companiesNameBtn.innerText = 'DESC';
                return y > x ? -1 : 1;
            }
        }).join(''); // remove commas

    order = !order;
    companiesContainer.innerHTML = showCompanies;

    function sortCompanyStart(companies) {
        showCompanies = companies
            .map(company => company)
            .sort((a, b) => {
                const x = a.start, y = b.start;

                if (order) {
                    companiesStartYearBtn.innerText = 'ASC';
                    return x - y;
                } else {
                    companiesStartYearBtn.innerText = 'DESC';
                    return y - x;
                }
            }).map(company => `
            <tr>
                <th>${companies.indexOf(company) + 1}</th>
                <td>${company.name}</td>
                <td><strong>${company.start}</strong></td>
                <td>${company.end}</td>
            </tr>
            `).join(''); // remove commas

        order = !order;
        companiesContainer.innerHTML = showCompanies;
    }

    function sortCompanyEnd(companies) {
        showCompanies = companies
            .map(company => company)
            .sort((a, b) => {
                const x = a.end, y = b.end;

                if (order) {
                    companiesEndYearBtn.innerText = 'ASC';
                    return x - y;
                } else {
                    companiesEndYearBtn.innerText = 'DESC';
                    return y - x;
                }
            }).map(company => `
            <tr>
                <th>${companies.indexOf(company) + 1}</th>
                <td>${company.name}</td>
                <td>${company.start}</td>
                <td><strong>${company.end}</strong></td>
            </tr>
            `).join(''); // remove commas

        order = !order;
        companiesContainer.innerHTML = showCompanies;
    }

    return { sortCompanyStart, sortCompanyEnd };



    // Short-er Way // 
    /*
        return {
            sortCompanyStart: function (companies) {
                showCompanies = companies
                    .map(company => company)
                    .sort((a, b) => {
                        const x = a.start, y = b.start;

                        if (order) {
                            companiesStartYearBtn.innerText = 'ASC';
                            return x - y;
                        } else {
                            companiesStartYearBtn.innerText = 'DESC';
                            return y - x;
                        }
                    }).map(company => `
                    <tr>
                        <th>${companies.indexOf(company) + 1}</th>
                        <td>${company.name}</td>
                        <td><strong>${company.start}</strong></td>
                        <td>${company.end}</td>
                    </tr>
                    `).join(''); // remove commas

                order = !order;
                companiesContainer.innerHTML = showCompanies;
            },
    
            sortCompanyEnd: function (companies) {
                showCompanies = companies
                    .map(company => company)
                    .sort((a, b) => {
                        const x = a.end, y = b.end;

                        if (order) {
                            companiesEndYearBtn.innerText = 'ASC';
                            return x - y;
                        } else {
                            companiesEndYearBtn.innerText = 'DESC';
                            return y - x;
                        }
                    }).map(company => `
                    <tr>
                        <th>${companies.indexOf(company) + 1}</th>
                        <td>${company.name}</td>
                        <td>${company.start}</td>
                        <td><strong>${company.end}</strong></td>
                    </tr>
                    `).join(''); // remove commas

                order = !order;
                companiesContainer.innerHTML = showCompanies;
            }
        }
    */
}

// onClick Sort Btn-s
companiesNameBtn.addEventListener('click', () => companiesSorting(companies));

const sortCompanies = companiesSorting(companies);

companiesStartYearBtn.addEventListener('click', () => sortCompanies.sortCompanyStart(companies));

companiesEndYearBtn.addEventListener('click', () => sortCompanies.sortCompanyEnd(companies));