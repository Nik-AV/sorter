class Sorter {
  constructor(data = []) {
    this.data = data;
    this.comp = (x,y) =>{
      return x - y;
    }
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data
  }

  sort(indices) {
    let srt = [];
    for(let i = 0; i<indices.length; i++){
      srt[i] = this.data[indices[i]];
    }
     for (let j = 0; j<indices.length; j++){
       for (let k = 0; k<indices.length-1-j; k++){
         if (indices[k+1]<indices[k]){
           let t = indices[k+1];
           indices[k+1] = indices[k];
           indices[k] = t;
         }
       }
    }
    srt.sort(this.comp);
    for (let i = 0; i<indices.length; i++){
      this.data[indices[i]]=srt[i];
    }
    return this.data;
  }

  setComparator(compareFunction) {
    this.comp = compareFunction;
  }
}

module.exports = Sorter; 
