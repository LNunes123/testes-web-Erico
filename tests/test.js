const {Builder, By, Key} = require("selenium-webdriver")

async function openSite(){
    try{
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.manage().window().maximize()
        await driver.get("https://shopist.io/")
        await driver.sleep(10000)

        // Navegação
        const sofasPage = await driver.findElement(By.className("sofas"))
        await sofasPage.sendKeys(Key.ENTER)
        await driver.sleep(5000)
        await driver.navigate().back()
        const chairsPage = await driver.findElement(By.className("chairs"))
        await chairsPage.sendKeys(Key.ENTER)
        await driver.sleep(5000)

        //  Validando mensagem de erro
        const productSoldOut = await driver.findElement(By.className("status--red")) 
        await productSoldOut.click()  
        await driver.sleep(3000)
        const closeModalSoldOut = await driver.findElement(By.className("modal-button"))   
        await closeModalSoldOut.click()  
        await driver.sleep(3000)

        //  Adicionado item ao carrinho
        const productChairs = await driver.findElement(By.xpath("//a[@href='/department/chairs/product/1']"))
        await productChairs.sendKeys(Key.ENTER)
        await driver.sleep(4000)
        const addChairOnCart = await driver.findElement(By.className("purchase-button"))
        await addChairOnCart.click()
        await driver.sleep(3000)

        // Removendo item do carrinho
        const cart = await driver.findElement(By.className("cart"))
        await cart.click()
        await driver.sleep(5000)
        const removeButton = await driver.findElement(By.className("remove-button"))
        await removeButton.click()
        await driver.sleep(3000)

        // Finalizar compra
        const beddingPage = await driver.findElement(By.className("bedding"))
        await beddingPage.sendKeys(Key.ENTER)
        await driver.sleep(5000)
        const productbedding = await driver.findElement(By.xpath("//a[@href='/department/bedding/product/19']"))
        await productbedding.sendKeys(Key.ENTER)
        const addbeddingOnCart = await driver.findElement(By.className("purchase-button"))
        await addbeddingOnCart.click()
        await driver.sleep(3000)
        const cartPage = await driver.findElement(By.className("cart"))
        await cartPage.click()
        await driver.sleep(5000)
        const checkoutButton = await driver.findElement(By.className("checkout"))
        await checkoutButton.click()
        await driver.sleep(5000)
        const continueShopping = await driver.findElement(By.className("continue-shopping"))
        await continueShopping.click()
    } catch(e){
        console.log(e)
    }
}
openSite()