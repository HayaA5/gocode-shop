
export default class Utils {

    static groupBy(arr : any[], key : string) {  
      return arr.map(p => p.category).reduce((acc, key) => {
         (acc[key] = true || []);
         return acc;
         }, []);
    }
    
    static sortString(arr : any[], key : string, desc : boolean){
        return arr.sort((a, b) => {
            let nameA = a[key].toUpperCase(); // ignore upper and lowercase
            let nameB = b[key].toUpperCase(); // ignore upper and lowercase
            if(desc){
                if (nameA > nameB) {return -1;}
                if (nameA < nameB) {return 1;}
            }else{
                if (nameA < nameB) {return -1;}
                if (nameA > nameB) {return 1;}
            }
                return 0;
            });
    }
        
    static sortNumber(arr : any[], key : string, desc : boolean){
        return arr.sort((a, b) => {
            if(desc){
                return b[key] - a[key];
            }else{
                return a[key] - b[key];
            }
        });
    }

    static sortGal(arr : any[], key : string, desc : boolean){
        return arr.sort((a, b) => {
            a= isNaN(a[key])?a[key].toUpperCase():a[key];
            b=isNaN(b[key])?b[key].toUpperCase():b[key];  
        
            if(desc){
                if (a > b) {return -1;}
                if (a < b) {return 1;}
            }else{
                if (a < b) {return -1;}
                if (a > b) {return 1;}
            }
                return 0;
            });
    }

}