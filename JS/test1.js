class StringHelper {
    constructor(value) {
        this.value = value;
    }

    
    Concat(other) {
        return new StringHelper(this.value + other.value);
    }

    
    SubString(startIndex, length) {
        if (startIndex < 0 || startIndex >= this.value.length || length <= 0) {
            return new StringHelper('');
        }

        let subString = '';
        for (let i = startIndex; i < startIndex + length && i < this.value.length; i++) {
            subString += this.value[i];
        }

        return new StringHelper(subString);
    }

    
    Distinct() {
        let distinctChars = '';
        for (let char of this.value) {
            if (distinctChars.indexOf(char) === -1) {
                distinctChars += char;
            }
        }

        return new StringHelper(distinctChars);
    }

    
    Contains(substring) {
        for (let i = 0; i <= this.value.length - substring.value.length; i++) {
            let found = true;
            for (let j = 0; j < substring.value.length; j++) {
                if (this.value[i + j] !== substring.value[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return true;
            }
        }

        return false;
    }

    
    ToString() {
        return this.value;
    }
}


const str1 = new StringHelper('Hello');
const str2 = new StringHelper('World');

const concatenated = str1.Concat(str2);
console.log(concatenated.ToString()); 

const substring = str1.SubString(2, 3);
console.log(substring.ToString()); 

const distinctChars = str1.Distinct();
console.log(distinctChars.ToString()); 

const contains = str1.Contains(new StringHelper('llo'));
console.log(contains); 
