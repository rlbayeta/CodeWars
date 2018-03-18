// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the 
// new string is '(' if that character appears only once in the original string, or ')' if that 
// character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples:

// "din" => "((("

// "recede" => "()()()"

// "Success" => ")())())"

// "(( @" => "))(("


function duplicateEncode(word){
    var new_string = "";
    
    for (var i=0; i<word.length; i++){
      if ((/[A-Za-z0-9]/g).test(word[i])){
        if(word.match(new RegExp(word[i],'gi')).length > 1) new_string += ")";
        else new_string += "(";
      }else {
        if(word.match(new RegExp("\\"+word[i],'gi')).length > 1) new_string += ")";
        else new_string += "(";
      }
    }
    
    return new_string;
}