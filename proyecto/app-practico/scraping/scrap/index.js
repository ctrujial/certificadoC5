const puppeteer = require('puppeteer'); //reciben promesas



(async () => {
    const browser = await puppeteer.launch({headless: true});// nos obtiene el navegador, le podemos ingresar {headless: false} para ver el proceso abriendo el navegador
    const page =  await browser .newPage();

    await page.goto('https://www.amazon.com/');
    await page.screenshot({path: 'amazon1.jpg'});

    //field-keywords
    await page.type('#twotabsearchtextbox', 'televisor samsung');
    await page.screenshot({path: 'amazon2.jpg'});

    await page.click('.nav-search-submit input');

    //aca se depe esperar que la pagina haga la busqueda
    await page.waitForSelector('[data-component-type=s-search-result]');
    //await page.waitForNavigation({ waitUntil: 'load', timeout: '10000' });//espera 3 segundos a que la pagina cargue

    await page.screenshot({path: 'amazon3.jpg'});

    const enlaces =  await page.evaluate(()=>{
        const elementos = document.querySelectorAll('[data-component-type=s-search-result] h2 a')//ingresa en el h2 y luego en los a

        const links = [];
        for (let elemen of elementos){
            links.push(elemen.href);
        }
        return links;
    });
    console.log(enlaces.length)
    const arrayInfo = [];
    for (let enlace of enlaces){
        await page.goto(enlace);
        await page.waitForSelector('#productTitle');

        const info = await page.evaluate(() => {
            const tituloYTamano = {};
            tituloYTamano.title = document.querySelector('#productTitle').innerText;
            tituloYTamano.tamano = document.querySelector('.selection').innerText;
            return tituloYTamano;
        });
        arrayInfo.push(info);

        console.log(arrayInfo);
    }

    await browser.close();
}) ();

