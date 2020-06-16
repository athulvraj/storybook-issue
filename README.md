** NOTE :: THIS REPO IS INTENTIONALLY KEPT PUBLIC SO THAT IT CAN BE ACCESSED DIRECTLY USING npm install **

## Introduction

**A set of reusable ReactJs components that use fiori styling and can be used in any application.**

## Installation

```bash
npm install --save git+ssh://git@github.wdf.sap.corp:fieldglass-development/fg-react-components.git#master
```

## Update
```bash
npm update fg-react-components
```

## Components
- **[ActionBar](src/ActionBar)** - The ActionBar component holds the action buttons in a page and is displayed at the bottom of the page.
- **[AutoComplete](src/AutoComplete)** - A Smartselect/Autosuggest component that supports dynamic as well as static data.
- **[Badge](src/Badge)** - This is a Multipurpose component that can hold the description & title of the current page along with attributes, buttons, steps, tabs, etc...
- **[Breadcrumbs](src/Breadcrumbs)** - Shows the navigation hierarchy and links to previous steps.
- **[CardPanel](src/CardPanel)** - A stateless component that represents a Panel container that holds a set of cards. The cards are clickable and can be used to navigate to another page.
- **[Cards](src/Cards)** - A dynamic Cards component that can hold a number of Cards/Tiles having a predefined width/height. Each Card can have one of the predefined structures or can be completely dynamically designed to hold it's own content.
- **[ConfirmationModal](src/ConfirmationModal)** - This is an asynchronous and better looking version of window.confirm() that we have in every browser.
- **[Detail](src/Detail)** - A TreeView Component that is completely data-driven and helps in visualization of js/json data.
- **[ExpandableSection](src/ExpandableSection)** - Displays a Panel with a Header that has a title and who's Body is expandable/collapsible
- **[Footer](src/Footer)** - Is a static component placed at the bottom of the page across the app. It holds the SAP logo(customizable),copyright info & any other desired text.
- **[InlineHelp](src/InlineHelp)** - Displays a help icon, on hovering which, an inline Help text is displayed in a popover.
- **[LoadScreen](src/LoadScreen)** - Shows an overlay over the entire page and a spinner at the center, thus disabling the user from doing any action.
- **[MultiSelect](src/MultiSelect)** - This is an extension of the AutoComplete Component that lets the user select multiple values from an AutoComplete.
- **[Section](src/Section)** - This is basically a container that has a margin and padding and can optionally hold a title.
- **[Table](src/Table)** - Table component that can be used to initialize a simple/complex list view.
- **[TitleBar](src/TitleBar)** - Displays at the top of each page with the page title, an optional description and any number of action buttons that can be nested within the component.
- **[VerticalSplit](src/VerticalSplit)** - This is a container , which can split the app into two columns.Each column can hold its own content.

## Usage

```jsx
import React from 'react'
import { AutoComplete, LoadScreen, InlineHelp, Breadcrumbs, ConfirmationModal } from 'fg-react-components'

class Example extends React.Component {
  render () {
    return (
        <div>
            <LoadScreen />
            <AutoComplete fieldName='name' options={['Sydney', 'Jack', 'Max']} />
        </div>
    )
  }
}
```

## Preview of Components

**ActionBar**
-----
![ActionBar Preview](example/screenshots/ActionBar/action_bar.PNG)

**Autocomplete**
 - **Autocomplete with options**
    ![Autocomplete Dropdown Preview](example/screenshots/AutoComplete/autocomplete_dropdown.png)
 - **Autocomplete with no data**
    ![Autocomplete with no data Preview](example/screenshots/AutoComplete/autocomplete_no_data.png)

 **Badge**
---
![Badge Preview](example/screenshots/Badge/badge.PNG)

  **Boolean View**
---
![ Boolean View Preview](example/screenshots/BooleanView/boolean_view.PNG)

 **Breadcrumbs**
---
![Breadcrumb Preview](example/screenshots/Breadcrumbs/breadcrumbs.PNG)

 **Card Panel**
---
![Card Panel Preview](example/screenshots/CardPanel/card_panel.PNG)

 **Cards Preview**
---
![Cards Preview](example/screenshots/Cards/cards.PNG)

 **Confirmation Modal**
---
![Confirmation Modal Preview](example/screenshots/ConfirmationModal/confirmation_modal.PNG)

 **Detail**
---
![Detail Preview](example/screenshots/Detail/detail.PNG)

 **DetailView**
---
![DetailView Preview](example/screenshots/DetailView/DetailView.PNG)

 **Expandable section**
---
- **Expandable section - Expanded**\
![Expandable section Preview - Expanded](example/screenshots/ExpandableSection/expandable_section_expanded.PNG)

- **Expandable section - Collapsed**\
![Expandable section Preview - Collapsed](example/screenshots/ExpandableSection/expandable_section_collapsed.PNG)

 **Footer**
---
![Footer Preview](example/screenshots/Footer/footer.PNG)

 **Inline Help**
---
![Inline Help Preview](example/screenshots/InlineHelp/inline_help.png)

 **Loading Spinner**
---
![Loading Spinner Preview](example/screenshots/LoadScreen/loading_spinner.PNG)

 **Multiselect**
---
- **Multiselect - with Options**\
![Multiselect Preview](example/screenshots/MultiSelect/multiselect_component.png)

- **Multiselect - Selected**\
![Multiselect Selected Preview](example/screenshots/MultiSelect/multiselect_selected.png)

 **Section**
---
![Section Preview](example/screenshots/Section/section.PNG)

 **Table**
---
- **Consolidated Search with No Paginantion**\
![Consolidated Search with No Paginantion Preview](example/screenshots/Table/consolidated_search_with_no_paginantion.PNG)

- **Edit and Delete Buttons Enabled**\
![Edit and Delete Buttons Preview](example/screenshots/Table/edit_and_delete_buttons.PNG)

- **Row Search and Pagination Enabled**\
![Row Search and Pagination Preview](example/screenshots/Table/row_search_and_pagination.PNG)

- **Autoselected Row**\
![Autoselected Row Preview](example/screenshots/Table/table_with_autoselected_row.png)

- **Table with Checkbox for row selection**\
![Table with Checkbox for row selection](example/screenshots/Table/table_with_checkbox_selection_row.png)

 **TitleBar**
---
![TitleBar Preview](example/screenshots/TitleBar/title_bar.PNG)

 **VerticalSplit**
---
![VerticalSplit Preview](example/screenshots/VerticalSplit/VerticalSplit.png)

## Contribution

If you wish to make any contribution:
- Create a new branch off *master*
- Make your changes in the new branch
- Create a pull request and assign it for review to [Sydney](https://git.i.fgvms.com/users/i322511)

*Note :: It is vital that we provide backwards compatibility with each change*

## Changelog

**1.11.0**
- Added documentation website for components using storybook.

**1.10.0**
- Removed dependency on fundamental-react on the project.
- Upgraded fundamental-styles to version 0.9.0
- Now the project has depedency only on fundamental-styles for styling and markup.
- BREAKING CHANGE: Fonts need to added sperately to the consuming project since its no more
  available in the fundamental-style package.

**1.9.20**
- Added EsLint and pre-commit to check for linting errors prior to commit.

**1.9.18**
- AutoComplete : Added the ability to determine the position (top/bottom) of options in the autocomplete
  depending upon the space available in page or dialog.

**1.9.17**
- Table : Added the capability to select table rows using checkboxes.

**1.9.16**
- Table : Columns can now be passed a width in px or %.

**1.9.15**
- TitleBar : Added changes after fundamental-react ActionBar component.

**1.9.14**
- Multiselect : Fixed the bug in selected items appear in the list.
- Badge : Minor UI issue with the completed check mark box in form steps
- LoadScreen : Fixed console error

**1.9.13**
- Table : Added search icon in the search bar for the table component.

**1.9.12**
- AutoComplete : Fixed the width of dropdown menu and classes for popver control

**1.9.11**
- Table : Fixed the issue where the localization object was getting overridden & also fixed some structural issues with individual column filters.

**1.9.6**
- Table : Fixed the issue where the pages in the Table were switching randomly when the Table data was refreshed.

**1.9.5**
- Badge : Made the Badge title element a span instead of an H2

**1.9.4**
- Table : Added the ability to filter columns which are not visible by setting the 'isFilterable' flag to true.

**1.9.3**
- @SAP-Theming : dependency removed from section styles as those were causing errors.

**1.9.2**
- Breadcrumbs style : Last child of Breadcrumbs displayed in grey text and without text-decoration-line

**1.9.1**
- LoadScreen - Update the Loading Spinner with the new one defined in fundamental-styles

**1.9.0**
- Updated fundamental-react and fundamental styles

**1.8.41**
- Table - Fixed the logic to ensure that the page number does not go out of bounds when data is externally filtered.

**1.8.39**
- Table - Avoided unnecessary preprocessing of Table data on every render

**1.8.38**
- Detail - Fixed bug in rendering Array in Detail component child branch

**1.8.37**
- Badge - Added support for addition of children within the Badge

**1.8.36**
- Multiselect - Added support for array of object support as input in Multiselect

**1.8.36**
- Badge - Added support for addition of children within the Badge

**1.8.35**
- Badge - Increased the top padding of the Badge component

**1.8.34**
- Table - Formatted the position and size of the search icon within the search bar in the Table component

**1.8.33**
- Section - Made the width 'auto' instead of 100%

**1.8.32**
- LoadScreen - Update the Loading Spinner with the new one defined in fundamental-styles

**1.8.30**
- Section - Added the className attribute
**1.8.29**
- CardPanel - Fixed there issue where multiple child elements for the CardPanel were all within a single Node.

**1.8.28**
- CardPanel - Added the className attribute for CardPanel & CardPanel.Card components

**1.8.26**
- Cards - Moved the styling for the CenteredCard outside the Primary fgCard. Thus making fgCard's inner styling barebones.

**1.8.25**
- Cards - Made the Overflow hidden for the individual Cards

**1.8.24**
- Cards - Gave the individual Cards a consistent Margin of 10px

**1.8.23**
- DetailView - Changes to display two Detail Cells in the same line
- DetailView - Changes to display the second cell in next line if more data exist in the first cell

**1.8.21**
- Table - Fixed the issue where the control would switch to Page 1 when any row was selected.
- Table - Fixed the issue where the default values of the localization object were not being merged with the values provided as props.
- Table - Added the hand cursor for the Header component when sorting is enabled and removed the sortHelp text when sorting is disabled.
