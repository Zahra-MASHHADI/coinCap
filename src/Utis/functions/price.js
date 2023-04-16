export function price(n){
    if (n < 1e3) return (n/1);
    if (n >= 1e3 && n < 1e6) return +(n / 1).toFixed(4) 
  }