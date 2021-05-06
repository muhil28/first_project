/*const _={
    clamp(number, lowerBound, upperBound){
        if(number<lowerBound){
            return lowerBound;
        }else if(number>upperBound){
            return upperBound;
        }else{
            return number
        }

    }
}
*/
const _={
    clamp(number, lowerBound, upperBound){
        lowerCampedValue=Math.max(number, lowerBound);
        campedValue=Math.min(lowerCampedValue,upperBound);
        return campedValue

    },
    inRange(number,start,end){
        if(end===undefined){
            end=start;
            start=0;
        }
        if(start>end){
            newstart=end;
            end=start;
            start=newstart;
        }
        if(number>=start && number<end){
            return true;
        }else{
            return false;
        }
    }
}



// Do not write or modify code below this line.
module.exports = _;