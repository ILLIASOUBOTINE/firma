import {DescriptionCard} from "../enttity/descriptionCard";
import {imgs} from "../models/img";
import {TableDescriptionText} from "../models/tableDescriptionText";

export const TableDescriptionCards: DescriptionCard[] = [
  {id:1, title: 'Ceiling', photos: imgs.imgs1, price: 2000, terms: '1 mois', descriptionText: TableDescriptionText[0]},
  {id:1, title: 'Wall', photos: imgs.imgs2, price: 7000, terms: '2 mois', descriptionText: TableDescriptionText[1]},
  {id:1, title: 'Beton', photos: imgs.imgs3, price: 3000, terms: '1 mois', descriptionText: TableDescriptionText[2]},
]
