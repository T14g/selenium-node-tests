const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;
const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const dados = {
    f_name: 'Faculdade',
    l_name: 'Fadergs',
    adress: 'R. Riachuelo, 1257',
    email: 'admin@fadergs.edu.br',
    phone: '0007678678',
    gender: 'Female',
    hobbies : 'Movies',
    languages : 'Portuguese',
    skills : 'Java',
    country : 'Brazil',
    selectCountry : 'Japan',
    birth : '1986 June 4',
    password : 'C84jcjDVpcH@w7E',
    cPassword: 'C84jcjDVpcH@w7E'
}

register = async () => {
    const { f_name, l_name, adress, email, phone } = dados;

    url = 'http://demo.automationtesting.in/Index.html';

    let driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build()

    driver.manage().window().maximize() 
    driver.get(url);

    //Primeira tela
    await driver.findElement(By.id('email')).then(el => el.sendKeys('admin@gmail.com'));
    await driver.findElement(By.id('enterimg')).then(el => el.click());


    //Full Name
    await driver.findElement(By.xpath("//input[@ng-model='FirstName']")).then(el => el.sendKeys(f_name));
    await driver.findElement(By.xpath("//input[@ng-model='LastName']")).then(el => el.sendKeys(l_name));

    // //Adress
    await driver.findElement(By.xpath("//textarea[@ng-model='Adress']")).then(el => el.sendKeys(adress));

    // EmailAdress
    await driver.findElement(By.xpath("//input[@ng-model='EmailAdress']")).then(el => el.sendKeys(email));

    //Phone
    await driver.findElement(By.xpath("//input[@ng-model='Phone']")).then(el => el.sendKeys(phone));

    //Gender F 
    await driver.findElement(By.xpath("//input[@value='FeMale']")).then(el => el.click());

    //Hobbies Movies
    await driver.findElement(By.id("checkbox2")).then(el => el.click());

    //Scroll the page
    // await driver.execute('window.scrollTo(0,200');
    //Select Language msdd
    await driver.findElement(By.id("msdd")).then(el => el.click());


};

register();


