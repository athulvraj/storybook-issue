## Footer

Footer component is a static component placed at the bottom of the page across the app. It holds the SAP logo(customizable),copyright info & any other desired text.

###### Parameters Accepted
- **logo** - (*binary(.png, .jpg, etc...)* | optional) - Displays the logo in the Footer. Defaults to the SAP Logo.. ```Default -> SAP Logo```
- **copyrightText** - (*string* | optional) - Displays the text besides the logo. ```No Default```
- **subtitle1** - (*string* | optional) - Displays the text below the copyrightText. ```No Default```
- **subtitle2** - (*string* | optional) - Displays the text below the subtitle1  . ```No Default```

###### Implementation
```jsx
<Footer 
    copyrightText='© 2019 SAP SE or an affiliate company'
    subtitle1='Version: 0.0.78'
    logo={importedSapLogo}
    subtitle2='Build Date: 12th Nov 2019'      
/>
/>
```
###### Preview
![Footer Preview](../../example/screenshots/Footer/footer.PNG)
