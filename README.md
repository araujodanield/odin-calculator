<img height="15px" src="https://em-content.zobj.net/thumbs/120/twitter/322/flag-brazil_1f1e7-1f1f7.png">[  Leia este documento em português](README.br.md)

# <b>Digital Calculator</b>

Fifth project of <a href="https://www.theodinproject.com/about">The Odin Project</a> course.

A digital calculator built with JavaScript and DOM manipulation.

<a href="https://araujodanield.github.io/odin-calculator/" target="_blank">You can look the page and test the calculator by clicking here!</a>

</br>

## <b>Features</b>

This calculator was built based on Windows 10 Calculator app, but just with the basic features of it. Here's a list of what is possible to do at the moment:

</br>

- <b>Basic Operations</b>: You can do the four basic arithmetic operations: addition, subtraction, multiplication and division;

</br>

- <b>Continuous Operations</b>: You can keep doing operations using the operator buttons. Example:

        - "5 + 2"
        - If instead of "=" you press "x" then the operation will turn into "7 x" and wait for a new number;
        - If you press "2" and "+" then the operation will turn into "14 +", and so go on.


</br>

- <b>Decimal numbers</b>: It's possible to do operations with or which result in decimal numbers;
    * <i>(Note that operations that result in big decimal numbers such as "3,59999" will be automatically rounded up, so in this example, the result will be "3,6")</i>

</br>

- <b>Negative numbers</b>: You have a button that adds or removes the negative sign of a number and also works with decimal numbers;

</br>

- <b>Delete button</b>: This button allows you to delete the last number pressed, but when you have an operation result on display this button just deletes the operation, allowing you to use the result as the operand of a new operation;

</br>

- <b>Clear button</b>: Clean everything made and reset the calculator values;

</br>

## <b>Notes:</b>

#### - Different places around the world have different ways to represent thousands and decimals separators on numbers. For this project, I opted for using the brazilian style of formatting, so the thousands separator is represented by a dot ("."), while the decimals separator is represented by a comma (","). Example:
    "Five Million Two Hundred Thousand Six Hundred Point Thirty-five"

        USA: 5,200,600.35
        BRA: 5.200.600,35

#### - Since the start of this project, my goal was to make it the most similar possible to the Windows calculator, so one of the features I was trying to implement was the one where if you press the equal button (=) again after an operation the calculator repeat that operation but with the result as first operator. </br> For example, "5 + 2" results in "7", if you press the equal button then the operation turns into "7 + 2" and results in "9". </br> Unfortunately, I didn't find a way to implement this without breaking another feature of the calculator or needing to refactor all the code from scratch. And considering the time I already spent on this project trying to solve this, I decided to pass this feature for now.
