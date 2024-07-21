import { defineEventHandler} from 'h3'
import {promises as fs} from 'fs'
import path from 'path';

//define el handlers
export default defineEventHandler(async(event) => {
    const filePath = path.resolve('server/data/propertyDataZonaprop.json')
    try {
      
        const data = await fs.readFile(filePath, 'utf-8');
        const properties = JSON.parse(data)
        return properties

    } catch (error) {
        return {
            statuscode: 500,
            message: `Error al leer los datos de propiedades ${error}`
        }

        
    }
  })