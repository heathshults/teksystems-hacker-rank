# Color Picker
Create a color picker component, as shown below.

### Application Demo:
![](https://hrcdn.net/s3_pub/istreet-assets/RtboE8krGoBUV4PmtRLW1g/color-picker-cropped.gif)


The component will have the following functionalities:

- There is a selectedColor div, which is a div with the data-testid attribute as 'selectedColor'. This div shows the chosen color.

- Initially, the color of this div is set by props property initialSelectedColor which is a string denoting a valid CSS color name (e.g., “red” or “#efefef”).

- There is a color list, which is a div with the data-testid attribute as 'colorPickerOptions'.  Clicking any color from this list changes the color of the selectedColor div.

- Please note that backgroundColor of the clicked div in this list is the color to be set as backgroundColor of selectedColor div.  The colors in this list are passed as props via the property 'colorPickerOptions' which is an array of strings, where each string is a valid CSS color name.

## Testing Requirements

The following data-testid attributes are required in the component for the tests to pass:

- Title should have the data-testid attribute 'app-title'.
- selectedColor div should have the data-testid attribute 'selectedColor'.
- Color list should have the data-testid attribute 'colorPickerOptions'.

Please note that the colors are set by backgroundColor style specifically. Tests rely on this to pass. The component have certain classes and ids for rendering purpose. It is advised not to change them.

## Environment 

- React Version: 17.0.2
- Default Port: 8000

## Project Specifications 

**Read Only Files**
- `[src/App.test.js]`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
