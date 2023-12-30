const criteriaConfiguration = {
    Required:{
        regex:/./,
        errorMsg:"Required"
},
OnlyDigits:{
    regex:/^[0-9]+$/,
   errorMsg:"Enter Digits only"
},
OnlyAlpha:{
    regex:/^[a-zA-Z]+$/,
    errorMsg:"Alphabets Only"
},
Min4Chars:{
    regex:/.{4,}/,
    errorMsg:"Should Min 4 chars"
}

}
