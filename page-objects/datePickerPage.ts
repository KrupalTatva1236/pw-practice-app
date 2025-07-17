import {Page , expect} from "@playwright/test"
import { HelperBase } from "./helperBase"

export class DatePickerPage extends HelperBase{


constructor(page:Page){
    super(page)}

    async selectCommonDatePickerFromToday(numberOfDayFromToday:number){
        

const calendarInputField = this.page.getByPlaceholder('Form Picker')
 
await calendarInputField.click()
 
let date = new Date()
 
date.setDate(date.getDate() + numberOfDayFromToday)
 
const expectedDate =  date.getDate().toString()
 
const expectedMonthShot = date.toLocaleString('En-US', {month: 'short'})
const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'})
 
const expectedYear = date.getFullYear()
 
const dateToAssert= `$(expectedMonthShot} $(expectedDate), $(expectedYear)`
 
let calendarMonthAndYear =await this.page.locator('nb-calendar-view-mode').textContent()
 
const expectedMonthAndYear= ` ${expectedMonthLong} ${expectedYear}`
 
while(!calendarMonthAndYear.includes(expectedMonthAndYear)) {
 
await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
 
calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
 
await this.page.locator('day-cell.ng-star-inserted').getByText(expectedDate, {exact: true}).click()
 
await expect(calendarInputField).toHaveValue(dateToAssert)
    }


}}