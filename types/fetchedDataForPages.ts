export interface fetchedData {
    id: string;
    title: string;
    subtitle: string;
    price: number;
    colors: string[];
    memory: number;
    description: fetchedDataDesc;
    imgUrl: string[];
}

export interface fetchedDataForSearch {
    id: string;
    title: string;
    subtitle: string;
    price: number;
    color: string;
    memory: number;
    description: fetchedDataDesc;
    imgUrl: string;
}

export interface fetchedDataDesc {
    display: string;
    protection: string;
    width: number;
    length: number;
    thickness: number;
    processor: string;
    battery: string;
    camera: string;
}

export interface PhoneCardProps {
    id: string;
    title: string;
    subtitle: string;
    imgUrl: string;
    color: string;
    memory: number;
    price: number;
    description: fetchedDataDesc;
}