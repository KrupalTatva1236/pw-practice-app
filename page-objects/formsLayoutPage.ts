

import { waitForAsync } from "@angular/core/testing"
import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase"


export class FormsLayoutPage extends HelperBase{

constructor(page:Page){
    super(page)}


    async submitFormUsingGridWithCredentialsAndSelectingOptions(email:string,password:string,optionText:string){

        const usingGridForm = this.page.locator('nb-card', {hasText: "Using The Grid"})
        await usingGridForm.getByRole("textbox", {name: "Email"}).fill(email)
        await usingGridForm.getByRole("textbox", {name: "Password"}).fill(password)
        await usingGridForm.getByRole("radio", {name: optionText}).check({force:true})
        await usingGridForm.getByRole("button").click()
    }

    /**
     * This Method fill out Inline Form with user details
     * @param username - should be fist and last name
     * @param email - should be valid user's Email
     * @param rememberMe - true or flase if user session to be safed
     */

    async submitInlineForm(username:string,email:string,rememberMe:boolean){
        const inlineFrom = this.page.locator('nb-card', {hasText: "Inline form"})
        await inlineFrom.getByRole("textbox", {name: "Jane Doe"}).fill(username)
        await inlineFrom.getByRole("textbox", {name: "Email"}).fill(email)
        if(rememberMe==true){
            await inlineFrom.getByRole("checkbox", {name: "Remember Me"}).check({force:true}) 
        }
        
        await inlineFrom.getByRole("button").click()


    }


}

