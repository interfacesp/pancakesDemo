export interface Pancake {
    id: number; 
    description: string; 
    name: string ; 
    photo: UserPhoto; 
}

export interface UserPhoto {
    filePath: string; 
    webViewPath: string;
}

export interface Location{
    lati: number;
    longi: number;
}

export interface PancakeAddOptions{
    name: string,
    descr: string,
    photo: UserPhoto
}


export const listeCrepes = [
    //Première crêpe
    {
        id: 1,
        description: "Ma crêpe Mikado", 
        name: "Crepe Mikado",
        photo: {
            filePath:"https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png",
            webViewPath:"https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png"
        }
    },

    {
        id: 2,
        description: "Ma crêpe Sirop d'érable",
        name: "Sirop d'érable",
        photo: {
            filePath:"https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png",
            webViewPath:"https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png"
        }
    },
     {
         id: 3,
         description: "Ma crêpe chocolat",
         name: "Chocolat",
         photo: {
            filePath:"https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png",
            webViewPath:"https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-Images.png"
        }
     }

];