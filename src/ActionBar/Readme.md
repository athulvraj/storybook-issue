## ActionBar

The ActionBar component holds the action buttons in a page and is displayed at the bottom. It has a sticky feature
wherein it will have a fixed position if it is not within the viewport.

###### Parameters Accepted
- **children** - (*jsx* | optional) - The Buttons/items to be rendered within the Bar. ```No Default```

###### Implementation
```jsx
<ActionBar>
    <Button option='transparent' typeAttr='button'>Cancel</Button>
    <Button option='emphasized'>Submit</Button>
</ActionBar>
/>
```
###### Preview
![ActionBar Preview](../../example/screenshots/ActionBar/action_bar.PNG)
